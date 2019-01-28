require('./helpers/env/init')
require('./db/init')

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const verifyToken = require('./middleware/verifyToken')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/login', require('./routes/login'))
app.use('/api/products', require('./routes/products'))

app.use('/api/private', verifyToken, (req, res) => {
  res.json({ userId: req.decoded.userId })
})

module.exports = app
