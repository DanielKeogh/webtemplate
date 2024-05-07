;;;; webtemplate

(asdf:defsystem #:webtemplate
  :description "a template blog, but it also has a TODO written in react for fun"
  :license "MIT"
  :serial t
  :depends-on (;;utils
							 :alexandria
							 :str

							 ;;server and plugins
							 :clack
							 :hunchentoot
							 :lack-middleware-session
							 :hermetic
							 :websocket-driver-server

							 ;; UI parsing
							 :trivia
							 :trivia.ppcre
							 :quri

							 ;;html
							 :spinneret
							 :css-lite
							 :3bmd
							 :3bmd-ext-code-blocks

							 ;;json
							 :com.inuoe.jzon

							 ;;db
							 :postmodern
							 :simple-date/postgres-glue)
  :components ((:file "package")
							 (:file "utils")
							 (:file "db")
							 (:file "pages")
							 (:file "config")
							 (:file "todo/todo")
               (:file "server")))
