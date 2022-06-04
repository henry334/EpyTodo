create database epytodo;

use epytodo;

create table user
(
    id bigint primary key not null auto_increment,
    email varchar(255) not null,
    password varchar(255) not null,
    name varchar(255) not null,
    firstname varchar(255) not null,
    created_at datetime default current_timestamp()
);

create table todo
(
    id bigint primary key not null auto_increment,
    title varchar(255) not null,
    description varchar(255) not null,
    created_at datetime default current_timestamp(),
    due_time datetime not null,
    status varchar(255) not null default 'not started',
    user_id bigint unsigned not null
);