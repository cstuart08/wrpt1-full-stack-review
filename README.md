# wrpt1-full-stack-review

## MVP
- Users should be able to find products
- Users should be able to purchase products
- Users should be able to register for an account, login, logout
- Users should be able to delete an account
- Users should be able to have a cart

## ICEBOX
- utility snack bars
- share a product with another user
- login with social media or 3rd party accounts
- admin UI
- SMS & Email features
- order history
- recommended products based on viewed & purchased products
- wishlist
- product reviews & ratings

## DEPENDENCIES
- axios
- express
- massive
- express-session
- redux
- react-redux
- redux-promise-middleware
- redux-devtools-extension
- react-router-dom
- react-toastify
- bcryptjs
- dotenv

## SERVER

### Controllers
- usersController
- productsController

### Endpoints

#### Products
- get all products => GET '/api/products'
- get a single product => GET '/api/products/:id'
- get cart products => POST '/api/products'

#### Users
- register a user => POST '/api/register'
- login a user => POST '/api/login'
- logout a user => DELETE '/api/logout'
- delete a user => DELETE '/api/delete'

## DATABASE

### Tables
- products
- product images
- users

#### Products
``` SQL
  create table products (
  product_id serial primary key not null,
  description varchar(1000) not null,
  price decimal not null,
  category varchar(100) not null
  );
```

#### Product Images
``` SQL
  create table product_images (
  product_images_id serial primary key not null,
  product_id references products (product_id) not null,
  url text not null
  );
```

#### Users
``` SQL
  create table users (
    user_id serial primary key not null,
    email varchar(500) not null,
    password varchar(1000) not null
  );
```

## FRONT-END
