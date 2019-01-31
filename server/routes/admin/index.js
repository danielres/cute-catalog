const express = require('express')
const router = express.Router()

const Product = require('../../models/Product')
const ServerError = require('../../ServerError')

router.post('/products', async (req, res, next) => {
  try {
    await Product.query().insert(req.body)
    res.json({ success: true })
  } catch (e) {
    next(ServerError(422, 'Could not create product', e))
  }
})

router.put('/products/:id', async (req, res, next) => {
  try {
    await Product.query()
      .patch(req.body)
      .where('id', req.params.id)
    res.json({ success: true })
  } catch (e) {
    next(ServerError(422, 'Could not update product', e))
  }
})

module.exports = router
