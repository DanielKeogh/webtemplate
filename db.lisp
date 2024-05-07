;;;; db.lisp

(defpackage #:webtemplate.db
  (:use #:cl)
  (:export
   ;;credentials
   :credentials-set-p
   :set-credentials
   :read-default-credentials
   ;;connection
   :with-connection
   :connection-spec

   ;; auth
   :insert-profile
   :get-profile
   :get-profile-password
   :get-profile-roles
   :password
   :password-eq
   :*db-server*
   :*db-name*
   :*db-username*
   :*db-password*
   ;;blogpost manipulation
   :blogpost
   :blogpost-p
   :bp-subject
   :bp-body
   :bp-time
   :bp-visible

   :latest-posts
   :all-posts
   :all-post-names
   :find-post
   :new-post
   :update-post
   :delete-post))

(in-package #:webtemplate.db)

;; auth

(defparameter *salt* nil)
(defparameter *db-server* nil)
(defparameter *db-name* nil)
(defparameter *db-username* (str:trim (uiop:run-program "whoami" :output :string)))
(defparameter *db-password* "")
(defparameter *credentials-path* (merge-pathnames "credentials" (asdf:system-relative-pathname :webtemplate nil)))

(defun credentials-set-p ()
  (and *db-username* *db-password*))

(defun set-credentials (username password)
  (setf *db-username* username
	*db-password* password))

(defun read-credentials (&optional (file-path *credentials-path*))
  (with-open-file (stream file-path :if-does-not-exist nil)
    (when stream
      (let ((user (read-line stream nil))
	    (password (read-line stream nil)))
	(when (and user password)
	  (set-credentials (str:trim user) (str:trim password)))))))

;; Connection

(defun connection-spec ()
  (list *db-server* *db-name* *db-username* *db-password*))

(defun connect ()
	(postmodern:connect-toplevel *db-name* *db-username* *db-password* *db-server*))

(defmacro with-connection (&body body)
	`(postmodern:with-connection (list *db-name* *db-username* *db-password* *db-server*)
		 ,@body))

;; objects

(defclass blogpost ()
  ((subject :accessor bp-subject :col-type string :initarg :subject)
   (body :accessor bp-body :col-type string :initarg :body)
   (time :accessor bp-time :col-type timestamp :initarg :time)
   (isvisible :accessor bp-visible :col-type boolean :initarg :visible))
  (:metaclass postmodern:dao-class)
	(:keys subject)
	(:table-name blogpost))

(defclass profile ()
  ((id :accessor id :col-type serial :initarg :id)
   (username :accessor username :col-type string :initarg :username)
   (password :accessor password :col-type string :initarg :password)
   (email :accessor email :col-type string :initarg :email)
   (isadmin :accessor isadmin :col-type boolean :initarg :isadmin)
   (isactive :accessor isactive :col-type boolean :initarg :isactive))
  (:metaclass postmodern:dao-class)
	(:keys id)
	(:table-name profile))

;; create tables

(defun init-tables ()
	(postmodern:execute-file (merge-pathnames "db.sql"
																						(asdf:system-source-directory
																						 (asdf:find-system :webtemplate)))))

;; utils

(defun with-retry-fn (fn)
  (loop with result = nil
				for tries from 1 to 5
				for try = (handler-case
											(prog1 nil
												(setf result (funcall fn)))
										(error (ex)
											(declare (ignore ex))
											t))
				while try
				finally (return result)))

(defmacro with-retry (&body body)
  `(with-retry-fn (lambda () ,@body)))

(defun generate-timestamp ()
  (get-universal-time))

;; profile

(defun hash-password (password)
    (crypto:pbkdf2-hash-password-to-combined-string (babel:string-to-octets password)))

(defun password-eq (profile password)
  (cl-pass:check-password password (password profile)))

(defun insert-profile (username password email)
  (let ((p (make-instance 'profile
													:username username
													:password (hash-password password)
													:email email
													:isactive t
													:isadmin nil)))
    (with-retry (postmodern:insert-dao p))))

(defun get-profile (username)
  (car (postmodern:select-dao 'profile (:= 'username username))))

(defun get-profile-password (username)
  (password (get-profile username)))

(defun get-profile-roles (username)
  (if (isadmin (get-profile username))
      (list :admin :user)
      (list :user)))

;; post

(defun all-post-names (&optional show-invis)
  (if show-invis
      (postmodern:query "select subject, to_char(time, 'MonthDD, YYYY'), isvisible from blogpost order by time desc")
      (postmodern:query "select subject, to_char(time, 'MonthDD, YYYY') from blogpost where isvisible = true order by time desc")))

(defun find-post (subject)
	(car (postmodern:select-dao 'blogpost
					 (:= 'subject subject))))

(defun latest-posts (num)
	(postmodern:query  "select * from blogpost where isvisible = true order by time desc limit $1" num
										(:dao blogpost)))

(defun new-post (subject body visible)
	(postmodern:insert-dao
	 (make-instance 'blogpost :subject subject :body body :visible visible :time (simple-date:universal-time-to-timestamp (get-universal-time)))))

(defun update-post (old-subject subject body visible)
  (if (equal "" old-subject)
      (new-post subject body visible)
			(postmodern:query (:update 'blogpost
												 :set 'subject subject
												 'isvisible visible
												 'body body
												 :where (:= 'subject old-subject)))))

(defun delete-post (subject)
	(postmodern:query (:delete :from 'blogpost :where (:= 'subject subject))))
