// import dependencies
const express = require('express')
const {config} = require('dotenv').config()

const Authentication = require('./controllers/authenticaion')

const {errorHandler} = require('./controllers/errorHandler')

const app = express()
app.use(express.json())

app.post('/register', Authentication.register)
app.post('/login', Authentication.login)

//app.post('/prediction')

app.use(errorHandler)



app.listen(process.env.PORT, () => {
  console.log(`Base URL : localhost:${process.env.PORT}`)
})