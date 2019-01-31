require('./helpers/env/init')
require('./db/init')

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const ensureAdmin = require('./middleware/ensureAdmin')
const verifyToken = require('./middleware/verifyToken')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/login', require('./routes/login'))
app.use('/api/products', require('./routes/products'))
app.use('/api/users', verifyToken, require('./routes/users'))

app.use('/api/admin', verifyToken, ensureAdmin, require('./routes/admin'))

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.code || res.statusCode || 500).json({ error: error.message })
})

module.exports = app
