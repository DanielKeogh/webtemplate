;;;; server.lisp

(defpackage #:webtemplate.server
  (:local-nicknames (#:a #:alexandria)
										(#:c #:clack)
										(#:hr #:hermetic)
										(#:tr #:trivia)
										(#:db #:webtemplate.db)
										(#:pages #:webtemplate.pages)
										(#:utils #:webtemplate.utils))
  (:use #:cl)
  (:export :*app*))

(in-package #:webtemplate.server)

;; vars

(defparameter *root-path* (asdf:system-source-directory (asdf:find-system :webtemplate)))

(defparameter *static-resource-path*
  (merge-pathnames "resources/" *root-path*))

(eval-when (:compile-toplevel :load-toplevel :execute)
	(defparameter *hermetic-session* (make-hash-table)))

(hermetic:setup
 :user-p 'db:get-profile
 :user-pass 'db:get-profile-password
 :user-roles 'db:get-profile-roles
 :session *hermetic-session*
 :denied '(lambda (&optional params)
					 (declare (ignore params)
						(pages:with-page (:title "Access Denied.")
							(:h1 "Access Denied.")))))

(defun get-archive-page (env)
  (list 200 nil (list (pages:archive env (db:all-post-names (hermetic:logged-in-p))))))

(defun make-edit-response (env)
  (utils:with-body-params ((old-subject "old-subject")
													 (delete "delete")
													 (subject "subject")
													 (isvisible "isvisible")
													 (body "body"))
      env
    (if (equal delete "true")
				(db:delete-post old-subject)
				(db:update-post old-subject subject body (equal isvisible "isvisible")))
    (get-archive-page env)))

(defun handler (env)
  (handler-case
			(macrolet ((r200 (&body body)
									 `(list 200 nil (list ,@body)))
								 (r404 ()
									 `(progn (print "mup")
													 (list 400 nil (list (pages:do-404 env (getf env :path-info))))))
								 (if-user (is-user &optional isnt-user)
									 `(hermetic:auth (:user)
																	 ,is-user
																	 ,isnt-user)))
				(db:with-connection
						(let ((*hermetic-session* (or (getf env :lack.session) *hermetic-session*)))
							(alexandria:when-let (username (hermetic:logged-in-p))
								(setf env (append (list :username username) env)))
							(or (utils:handler-match env
										(("/") (r200 (pages:home env (db:latest-posts 3))))
										(("/archive") (get-archive-page env))
										(("/about") (r200 (pages:about env)))
										(("/login" :request-method :GET)
										 (r200 (if-user (pages:login-succeeded env)
																		(pages:login env))))
										(("/login" :request-method :POST)
										 (utils:with-body-params ((username "username")
																							(password "password"))
												 env
											 (r200
												(hermetic:login (list :|username| username :|password| password)
																				(pages:login-succeeded env)
																				(pages:login-failed env)
																				(pages:login-failed env)))))
										(("/css/base.css") (r200 (pages:css-core)))
										((tr:property :path-info (trivia.ppcre:ppcre "/post/(.*)" path))
										 (a:when-let* ((post-name (quri:url-decode path))
																	 (post (db:find-post post-name)))
											 (r200 (pages:post env
																				 (db:bp-subject post)
																				 (db:bp-time post)
																				 (db:bp-body post)))))
										(("/new") (if-user (r200 (pages:edit env "" "" t))))
										(("/edit" :request-method :POST) (if-user (make-edit-response env)))
										((tr:property :path-info (trivia.ppcre:ppcre "/todo(.*)" path))
										 (webtemplate.todo:handler env))
										((tr:property :path-info (trivia.ppcre:ppcre "/edit/(.*)" path))
										 (if-user (let* ((name (quri:url-decode path))
																		 (post (db:find-post name)))
																(if post
																		(r200 (pages:edit env
																											(db:bp-subject post)
																											(db:bp-body post)
																											(db:bp-visible post))))))))
									(r404)))))
    (error (c)
      (list 500 nil (list (format nil "500 - Internal server error. ~a" c) )))))

(defparameter *app* (funcall lack.middleware.session:*lack-middleware-session*
														 (lack:builder
															:session
															(:static :path "/public/"
																			 :root *static-resource-path*)
															(lambda (env) (funcall 'handler env)))))
