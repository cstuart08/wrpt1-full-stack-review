drop table if exists users;
drop table if exists product_images;
drop table if exists products;

create table users (
  user_id serial primary key not null,
  email varchar(500) not null,
  hash varchar(1000) not null
);

create table products (
  product_id serial primary key not null,
  description varchar(1000) not null,
  price decimal not null,
  category varchar(100) not null,
  name varchar(100)
);

create table product_images (
  product_images_id serial primary key not null,
  product_id integer references products(product_id) not null,
  url text not null
);