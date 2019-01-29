const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', async (req, res) => {
  const products = await Product.query().orderBy('title')

  res.json({
    products: products.map(p => ({
      ...p,
      imageSrc: `https://placekitten.com/320/240?image=${p.id}`,
    })),
  })
})

module.exports = router
