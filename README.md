# A website template in Common Lisp

Has the following:

In the TODO app under /TODO
* React integration
* Json API

## Prerequisites

* You need to set the `*salt*` to something credentials in `credentials.lisp`. Note: This is an insecure way of doing this probably. Do it better in your production application.
* You need to build to db
* You need to build the NPM thing

## How to set up the db

Create a postgres db called blog for the current user, then build tables required via

```
psql blog -f db.sql
```

You can login via the `/login` uri, but first you'll need to add a user-account via `webtemplate.db:insert-profile`.

e.g. `(webtemplate.db:with-connection (webtemplate.db:insert-profile "steve" "hmmmmmmmmm" ""))`

## How to build react code

From inside this directory:

```
npm run build --prefix react/todo

```

There is also a vite dev-mode. If you run the server and the dev-mode you get live edit for your react code.

```
npm run dev

```

## How to run the site

Launch via clack
```lisp
(clack:clackup webtemplate.server:*app*)
```
