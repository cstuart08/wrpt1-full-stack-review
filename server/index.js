require('dotenv').config()

const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { json } = require('express')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(json())

/*
HTTP Request is an object with 3 things:
  {
    line: {
      URI: devmountain.com,
      method: GET,
      ...
    },
    headers: {
      cookies: {...},
      ...
    },
    body(optional): { req.body stuff... }   <-- app.use(json()) allows us to turn this json object into readable javascript.
  }
*/

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
    secret: SESSION_SECRET
  })
)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then( dbInstance => {
  console.log('Database connected')
  app.set('db', dbInstance)

  app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))
})