;;;; pages.lisp

(defpackage #:webtemplate.pages
  (:local-nicknames (#:s #:spinneret)
		    (#:db #:webtemplate.db))
  (:use #:cl)
  (:export
   ;; macros
   :with-page
   ;;pages
   :do-404
   :post
   :edit
   :css-core
   :home
   :archive
   :admin
   :about
   :login
   :login-succeeded
   :login-failed))

(in-package :webtemplate.pages)

(defmacro get-edit-url (subject)
  `(str:concat "/edit/" (quri:url-encode ,subject)))

(defmacro get-post-url (subject)
  `(str:concat "/post/" (quri:url-encode ,subject)))

(defun get-markdown (val)
  (let ((3bmd-code-blocks:*code-blocks* t)
	(3bmd-code-blocks:*renderer* :chroma)
	(3bmd-code-blocks:*code-blocks-pre-class-format* "codeblock ~a"))
    (with-output-to-string (stream)
      (3bmd:parse-string-and-print-to-stream val stream))))

(spinneret:deftag post-tag (control attrs &key subject time content show-edit)
  `(:div.text-body
    ,@attrs ,@control
    (:h1.posttitle ,subject)
    (when ,show-edit
      (:a.float-right :href (get-edit-url ,subject) "edit"))
    (:p.posttime ,time)
    (:div.content (:raw (get-markdown ,content)))))

(spinneret:deftag post-link-tag (control attrs &key subject time)
  `(:div.post-link
    ,@attrs ,@control
    (:a :href (get-post-url ,subject) ,subject)
    (:span.time ,time)))

(spinneret:deftag post-link-edit-tag (control attrs &key subject time visible)
  `(:div.post-link
    ,@attrs ,@control
    (:a :href (get-post-url ,subject) ,subject)
    (:span.time ,time)
    " "
    (:a :href (get-edit-url ,subject) "edit")
    (:span ,visible)))

(spinneret:deftag md (default attrs &key text)
  `(:raw ,@default ,@attrs (get-markdown ,text)))

(defmacro with-page ((env &key title active-nav logged-in-p extra-head) &body body)
  (declare (ignorable active-nav))
  (alexandria:with-gensyms (username username-spare ignored-env) 
    `(let* ((,username (getf env :username))
	    (,(or logged-in-p username-spare) ,username)
	    (,ignored-env ,env))
       (declare (ignore ,ignored-env))
       (declare (ignorable ,(or logged-in-p username-spare)))
      (spinneret:with-html-string
	(:html
	 (:head
	  (:title ,title)
	  (:link :rel "preconnect" :href "https://fonts.googleapis.com")
	  (:link :rel "preconnect" :href "https://fonts.gstatic.com" :crossorigin "")
	  (:link :rel "stylesheet" :href "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap")
	  (:link :rel "stylesheet" :type "text/css" :href "/css/base.css")
	  (:link :rel "icon" :type "image/x-icon" :href "/public/favicon.ico")
	  (:script :type "text/javascript" :src "/public/js/base.js")
	  ,@extra-head)
	 (:body
	  (:div.topbar
	   (:div.navlinks.inter-title
	    (:a :href "/" "Home")
	    (list
	     (:a :href "/archive" "Archive")
	     (:a :href "/about" "About")
	     (when ,username (:p.rightnav (format nil "Welcome, ~A!" ,username))))))
	  (:div.afternav
	   ,@body)))))))

(defun home (env posts)
  (with-page (env :title "DanielKeogh.com" :logged-in-p logged-in)
    (loop for post in posts do
      (with-accessors ((body db:bp-body)
		       (subject db:bp-subject)
		       (time db:bp-time))
	  post
	(post-tag
	  :subject subject
	  :time time;(clsql:format-time nil time :format :pretty)
	  :content body
	  :show-edit logged-in)))
    (:div.text-body
     (:p.center "Find more posts in the " (:a :href "/archive" "Archive")))))

(defun login (env)
  (with-page (env :title "Login")
    (:div.text-body
     (:form :action "login" :method "POST"
	    (:label :for :|username| "Username")
	    (:input :type "text" :name :|username|)
	    (:br)
	    (:label :for :|password| "Password")
	    (:input :type "password" :name :|password|)
	    (:br)
	    (:input :type "submit" :value "Login")))))

(defun login-succeeded (env)
  (with-page (env :title "Login succeeded")
    (:div.text-body
     (:h1 "Successfully logged in.")
     (md :text "Go to [Archive](/archive)"))))

(defun login-failed (env)
  (with-page (env :title "Login failed")
    (:div.text-body
     (:h1 "Login failed.")
     (md :text "[Try again?](/login)"))))

(defun post (env subject time body)
  (with-page (env :title subject :logged-in-p logged-in)
    (post-tag :subject subject :time time :content body :show-edit logged-in)))

(defun edit (env subject body visible)
  (with-page (env :title (str:concat "Edit " subject))
    (:div.text-body
     (:form :action "/edit" :method "POST"
	    (:input :type "hidden" :name "old-subject" :value subject)
	    (:input :type "hidden" :name "delete" :value "false")
	    (:label :for "subject" "Subject:")
	    (:br)
	    (:input :type "text" :name "subject" :value subject)
	    (:br)
	    (:label :for "body" "Body:")
	    (:br)
	    (:textarea.bodytextarea :rows "1" :cols "1" :name "body" body)
	    (:br)
	    (:label :for "isvisible" "Is public")
	    (:input :type "checkbox" :name "isvisible" :value "isvisible" :checked (when visible "true"))
	    (:br)
	    (:input :type "submit" :value "Edit Post" :name "submit"))
     (:form :action "/edit" :method "POST"
	    :onsubmit "return confirm('Are you sure you want to delete this?')"
	    (:input :type "hidden" :name "old-subject" :value subject)
	    (:input :type "hidden" :name "delete" :value "true")
	    (:input :type "submit" :value "Delete Post" :name "submit"))
     (:a :target "_blank" :rel "noopener noreferrer" :href "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" "Markdown Cheat Sheet"))))

(defun do-404 (env path)
  (with-page (env :title "404 - Page not found")
    (:div.text-body (format nil "The page at path [~a] does not exist" path))))

(defun archive (env posts)
  (with-page (env :title "Archive" :logged-in-p logged-in)
    (:div.text-body
     (:div.archive-body
      (:h1 "Articles")
      (when logged-in
	(:a.button :href "/new" "Add new Article"))
      (:p "Below is the list of all articles that are public on this website:")
      (loop for (subject time visible) in posts do
	(if logged-in
	    (post-link-edit-tag :subject subject :time time :visible (unless (equal "t" visible) "🙈"))
	    (post-link-tag :subject subject :time time))
	(:br))))))

;; css

(defparameter *background-color* "rgba(255, 255, 200, 1)")
(defparameter *text-background-color* "rgba(255, 255, 255, 1)")
(defparameter *hover-color* "rgba(230, 220, 190, 1)")
(defparameter *nav-color* "rgba(240, 230, 200, 1)")
(defparameter *nav-height* "2.5em")
(defparameter *title-forecolor* "rgba(0, 0, 0, 1)")
(defparameter *date-color* "#808080")

(defun css-core ()
  (css-lite:css
    (("html")
     (:scroll-behaviour "smooth"))
    (("body")
     (:background-color *background-color*
      :font-family "'Open Sans', sans-serif"
      :padding 0
      :margin 0))
    ((".topbar")
     (:z-index 1
      :top 0
      :width "100%"
      :height *nav-height*
      :background-color *nav-color*
      :position "fixed"
      :box-shadow "0px 0px 8px 0px #969696"))
    ((".rightnav")
     (:float "right"
      :position "absolute"
      :right "0px"
      :top "0px"
      :padding-right "1em"))
    ((".navlinks")
     (:overflow "hidden"
      :text-align "center"
      :padding-top "0.2em"))
    ((".navlinks" "a")
     (:color *title-forecolor*
      :text-align "center"
      :padding "0.5em 0.5em"
      :text-decoration "none"
      :font-size "2em"))
    ((".navlinks" "a:hover")
     (:background-color *hover-color*))
    ((".afternav")
     (:padding-top *nav-height*))
    ((".archive-body")
     (:text-align "center"))
    ((".post-link" "a")
     (:padding-right "1em"))
    ((".text-body")
     (:max-width "40em"
      :background-color *text-background-color*
      :margin "auto"
      :margin-top ".5em"
      :padding "1em"
      :box-shadow "0px 0px 8px 1px #969696"))
    ((".text-body" "h1, h2, h3, h4, h5, h6")
     (:margin-top ".5em"
      :margin-bottom 0))
    ((".text-body" "h1")
     (:text-align "center"))
    ((".posttime")
     (:text-align "center"
      :size "0.8em"
      :margin 0
      :color *date-color*))
    ((".center")
     (:text-align "center"))
    ((".float-right")
     (:text-align "center"
      :float "right"))
    ((".inter-title")
     (:font-family "\"Inter\", sans-serif"
      :font-optical-sizing "auto"
      :font-weight "300"
      :font-style "normal"
      :font-variation-settings "\"s1nt\" 0"))
    ((".bodytextarea")
     (:width "100%"
      :min-height "20em"
      :resize "vertical"))
    ((".codeblock")
     (:padding "1em"))))
