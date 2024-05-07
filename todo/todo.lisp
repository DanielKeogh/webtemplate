;;;; todo.lisp

(defpackage #:webtemplate.todo
  (:use #:cl)
  (:local-nicknames (#:utils #:webtemplate.utils)
										(#:db #:webtemplate.db)
										(#:jz #:com.inuoe.jzon))
  (:export
   #:handler))

(in-package #:webtemplate.todo)

;; macro utils

(defmacro parse-object ((key value) parser &body cases)
	(alexandria:with-gensyms (event event2)
		`(loop for (,event ,key) = (multiple-value-list (jz:parse-next ,parser))
					 until (eq ,event :end-object) 
					 when (eq ,event :object-key)
						 do (multiple-value-bind (,event2 ,value) (jz:parse-next ,parser)
									(declare (ignore ,event2)
													 (ignorable ,value))
									(alexandria:switch ((str:replace-all "_" "-" ,key) :test #'equalp)
										,@(loop for (case-key case-action) in cases
														collect `(,case-key ,case-action)))))))


(defmacro def-parse-type (type (&rest fields))
	(let ((type-str (prin1-to-string type)))
		(alexandria:with-gensyms (parser instance event key event2 value)
			`(defun ,(intern (str:concat "PARSE-" type-str)) (,parser)
				 (loop with ,instance = (make-instance ',type)
							 for (,event ,key) = (multiple-value-list (jz:parse-next ,parser))
							 while (eq ,event :object-key)
							 for (,event2 ,value) = (multiple-value-list (jz:parse-next ,parser))
							 do (alexandria:switch ((str:replace-all "_" "-" ,key) :test #'equalp)
										,@(loop for field in fields
														collect `(,(prin1-to-string field) (setf (slot-value ,instance ',field) ,value))))
							 finally (return ,instance))))))

;; classes

(defclass taskset ()
	((id :accessor ts-id :col-type integer :initarg :id :col-identity t)
	 (name :accessor ts-name :col-type string :initarg :name)
	 (createtime :accessor ts-createtime :col-type timestamp :initarg :createtime)
	 (edittime :accessor ts-edittime :col-type timestamp :initarg :edittime))
	(:metaclass postmodern:dao-class)
	(:keys id)
	(:table-name taskset))

(defclass task ()
  ((id :accessor ta-id :col-type integer :initarg :id :col-identity t)
	 (taskset-id :accessor ta-taskset-id :col-type integer :col-references ((taskset id) :cascade) :initarg :taskset-id)
   (name :accessor ta-name :col-type string :initarg :name)
   (description :accessor ta-description :col-type string :initarg :description)
	 (status :accessor ta-status :col-type string :initarg :status))
	(:metaclass postmodern:dao-class)
  (:base-table task)
	(:keys id))

(defun new-task (taskset-id name description status)
  (postmodern:insert-dao
   (make-instance 'task :name name
												:description description
												:status status
												:taskset-id taskset-id)))

(defun new-taskset (name)
	(let ((now (simple-date:universal-time-to-timestamp (get-universal-time))))
		(postmodern:insert-dao
		 (make-instance 'taskset :name name :edittime now :createtime now))))

;(defmacro def-write-type* (type (&rest slots)))

(defun write-task* (task)
  (jz:with-object*
    (jz:write-property* "id" (ta-id task))
		(jz:write-property* "taskset-id" (ta-taskset-id task))
    (jz:write-property* "name" (ta-name task))
    (jz:write-property* "description" (ta-description task))
		(jz:write-property* "status" (ta-status task))))

(defun write-taskset* (taskset)
	(jz:with-object*
		(jz:write-property* "id" (ts-id taskset))
		(jz:write-property* "name" (ts-name taskset))
		(jz:write-property* "createtime" (utils:simple-date-timestamp->jsdate-format (ts-createtime taskset)))
		(jz:write-property* "edittime" (utils:simple-date-timestamp->jsdate-format (ts-edittime taskset)))))

(defun write-tasks* (tasks)
  (jz:with-array*
    (dolist (task tasks)
      (write-task* task))))

(defun json-date-hook (key value)
	(print (list key value))
	(cond ((typep value 'simple-date:timestamp)
				 (values key (utils:simple-date-timestamp->jsdate-format value)))
				(t t)))

(defun stringify-/todo/task (taskset-id tasks)
	(with-output-to-string (stream)
		(jz:with-writer* (:stream stream)
			(jz:with-object*
				(jz:write-property* "taskset_id" taskset-id)
				(jz:write-key* "tasks")
				(jz:with-array*
					(dolist (task tasks)
						(write-task* task)))))))

(defun stringify-/todo/taskset (taskset)
	(with-output-to-string (stream)
		(jz:with-writer* (:stream stream)
			(write-taskset* taskset))))

(defun stringify-/todo/tasksets (tasksets)
	(with-output-to-string (stream)
		(jz:with-writer* (:stream stream)
			(jz:with-object*
				(jz:write-key* "tasksets")
				(jz:with-array*
					(dolist (taskset tasksets)
						(write-taskset* taskset)))))))

(defun tasksets->json (sets)
	(with-output-to-string (stream)
		(jz:with-writer* (:stream stream)
			(jz:with-array*
				(dolist (set sets)
					(write-taskset* set))))))

(def-parse-type task (id taskset-id name description status))

(defun parse-taskset (parser)
	(let ((instance (make-instance 'taskset)))
		(parse-object (key value) parser
			("id" (setf (ts-id instance) value))
			("name" (setf (ts-name instance) value))
			("createtime" (setf (ts-createtime instance) (utils:jsdate-format->simple-date-timestamp value)))
			("edittime" (setf (ts-edittime instance) (utils:jsdate-format->simple-date-timestamp value))))
		instance))

(defmacro parse-array (parser parser-fn)
	(alexandria:with-gensyms (event key)
		`(loop for (,event ,key) = (multiple-value-list (jz:parse-next ,parser))
					 until (eq ,event :end-array)
					 when (eq ,event :begin-object)
						 collect (,parser-fn ,parser))))

(defun parse-/todo/task (stream)
	(jz:with-parser (parser stream)
		(let (tasks taskset-id)
			(parse-object (key value) parser
				("tasks" (setf tasks (parse-array parser parse-task)))
				("taskset-id" (setf taskset-id value)))
			(values taskset-id tasks))))

(defun parse-/todo/taskset (stream)
	(jz:with-parser (parser stream)
		(let (taskset)
			(parse-object (key value) parser
				("taskset" (setf taskset (parse-taskset parser))))
			taskset)))

(defun parse-/todo/tasksets (stream)
	(jz:with-parser (parser stream)
		(let (tasksets)
			(parse-object (key value) parser
				("tasksets" (setf tasksets (parse-array parser parse-taskset))))
			tasksets)))

(defun write-tasks (tasks)
	(dolist (task tasks)
		(postmodern:upsert-dao task)))

(defun delete-tasks (tasks)
	(dolist (task tasks)
		(postmodern:delete-dao task)))

(defun write-tasksets (tasksets)
	(dolist (taskset tasksets)
		(postmodern:upsert-dao taskset)))

(defun delete-tasksets (tasksets)
	(dolist (taskset tasksets)
		(postmodern:delete-dao taskset)))

(defun todo-page ()
	(spinneret:with-html-string
		(:head
		 (:meta :charset "UTF-8")
		 (:link :rel "icon" :type "/image/x-icon" :href "/public/favicon.ico")
		 (:meta :name "viewport" :content "width=device-width, initial-scale=1.0")
		 (:title "TODO")
		 (:link :rel"stylesheet" :type "text/css" :href "/public/todo/style.css"))
		(:body (:div#root)
					 (:script :type "module" :src "/public/todo/todo.js"))))

(defun handler (env)
  (macrolet ((r200 (&body body)
							 `(list 200 nil (list ,@body)))
						 (r404 () `(list 404 nil ""))
						 (r403 () `(list 403 nil ""))
						 (get-body () `(getf env :raw-body)))
    (or
		 (utils:handler-match env
			 (("/todo")
				(r200 (todo-page)))

			 (("/todo/task")
				(case (getf env :request-method)
					(:GET
					 (r200 (utils:with-query-params ((taskset-id "tasksetid")) env
									 (stringify-/todo/task taskset-id (postmodern:select-dao 'task (:= 'taskset-id taskset-id))))))
					(:POST (multiple-value-bind (taskset-id tasks)
										 (parse-/todo/task (get-body))
									 (write-tasks tasks)
									 (r200 (stringify-/todo/task taskset-id (postmodern:select-dao 'task (:= 'taskset-id taskset-id))))))
					(:DELETE (multiple-value-bind (taskset-id tasks)
											 (parse-/todo/task (get-body))
										 (print taskset-id)
										 (print tasks)
										 (delete-tasks tasks)
										 (r200 (stringify-/todo/task taskset-id (postmodern:select-dao 'task (:= 'taskset-id taskset-id))))))))

			 (("/todo/tasksets")
				(case (getf env :request-method)
					(:GET (r200 (stringify-/todo/tasksets (postmodern:select-dao 'taskset))))
					(:POST (progn (write-tasksets (parse-/todo/tasksets (get-body)))
												(r200 (stringify-/todo/tasksets (postmodern:select-dao 'taskset)))))
					(:DELETE (progn (delete-tasksets (parse-/todo/tasksets (get-body)))
													(r200 (stringify-/todo/tasksets (postmodern:select-dao 'taskset)))))))

			 (("/todo/taskset")
				(case (getf env :request-method)
					(:GET (utils:with-query-params ((id "id")) env
									(r200 (stringify-/todo/taskset (postmodern:get-dao 'taskset id)))))
					(:POST (let ((taskset (parse-/todo/taskset (get-body)))
											 (now (simple-date:universal-time-to-timestamp (get-universal-time))))
									 (setf (ts-createtime taskset) now)
									 (setf (ts-edittime taskset) now)
									 (r200 (stringify-/todo/taskset (postmodern:upsert-dao taskset)))))
					(:DELETE (let ((id (ts-id (parse-/todo/taskset (get-body)))))
										 (postmodern:with-transaction (trans)
											 (postmodern:execute "delete from task where taskset_id = $1" id)
											 (postmodern:execute "delete from taskset cascade where id = $1" id)
											 (postmodern:commit-transaction trans))
										 (r200 "{}"))))))
		 (r404))))
