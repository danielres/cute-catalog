const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({products: [{id: 1, name: 'product one'}]})
})

module.exports = router
