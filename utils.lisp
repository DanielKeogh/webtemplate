;;;; utils.lisp

(defpackage #:webtemplate.utils
  (:use #:cl)
  (:local-nicknames (#:tr #:trivia))
  (:export
	 #:handler-match
	 #:with-body-params
	 #:with-query-params
	 ;; Dates
	 #:simple-date-timestamp->jsdate-format
	 #:jsdate-format->simple-date-timestamp
	 #:jsdate-p))

(in-package #:webtemplate.utils)

(defmacro handler-match (env &body clauses)
  (append
   `(tr:match ,env)
   (loop for (expr action) in clauses
	 for frst = (car expr)
	 for ext-expr = (if (stringp frst)
			    (append
			     `(and (tr:property :path-info ,frst))
			     (loop for (key val) on (cdr expr) by #'cddr
				   collect `(tr:property ,key ,val)))
			    expr)
	 collect (list ext-expr action))))

(defmacro with-params (pairs env place &body body)
  (let ((p (gensym)))
    `(let* ,(append
						 `((,p (getf ,env ,place)))
						 (loop for pair in pairs
									 for param = (first pair)
									 for str = (second pair)
									 collect `(,param (cdr (assoc ,str ,p :test #'equalp)))))
       ,@body)))

(defmacro with-body-params (pairs env &body body)
	`(with-params ,pairs ,env :body-parameters ,@body))

(defmacro with-query-params (pairs env &body body)
	`(with-params ,pairs ,env :query-parameters ,@body))

(defvar *jsdate-regex* "(\\d+)-(\\d+)-(\\d+)T(\\d+):(\\d+):(\\d+)\\.(\\d+)Z")

(defun jsdate-p (str)
	(when (ppcre:scan *jsdate-regex* str) t))

(defun simple-date-timestamp->jsdate-format (timestamp)
	(multiple-value-bind (year month day hour minute second millis) (simple-date:decode-timestamp timestamp)
		(format nil "~d-~2,'0d-~2,'0dT~2,'0d:~2,'0d:~2,'0d.~3,'0dZ" year month day hour minute second millis)))

(defun jsdate-format->simple-date-timestamp (str)
	(multiple-value-bind (value groups)
			(ppcre:scan-to-strings *jsdate-regex* str)
		(when value
			(multiple-value-bind (year month day hour minute second millis)
					(values-list (map 'list 'parse-integer groups))
				(simple-date:encode-timestamp year month day hour minute second millis)))))
