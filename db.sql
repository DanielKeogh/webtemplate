-- db.sql

create table if not exists blogpost (
       subject text primary key not null,
       body text not null,
       isvisible boolean not null,
       time timestamp not null
);

create unique index if not exists blogpost_title on blogpost (subject);
create unique index if not exists blogpost_time on blogpost (time);

create table if not exists profile (
       id serial primary key not null,
       username varchar(26) not null,
       password varchar(150) not null,
       email text not null,
       isactive boolean not null,
       isadmin boolean not null 
);

create unique index if not exists profile_username on profile (username);
create unique index if not exists profile_email on profile (lower(email));

-- todo stuff

create table if not exists taskset (
			 id serial primary key not null,
			 name varchar(150) not null,
			 createtime timestamp not null,
			 edittime timestamp not null
);

create index if not exists taskset_edittime on taskset (edittime);

create table if not exists task (
       id serial primary key not null,
			 taskset_id integer references taskset(id),
       name varchar(150) not null,
       description text not null,
			 status varchar(10) not null
);

create index if not exists task_taskset_id on task(taskset_id);
