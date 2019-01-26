require('./db/init')

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const productsRouter = require('./routes/products')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/products', productsRouter)

module.exports = app
