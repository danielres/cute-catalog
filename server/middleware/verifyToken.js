const jwt = require('jsonwebtoken')

const veryfyTokenMiddleware = (req, res, next) => {
  jwt.verify(req.cookies.auth, process.env.AUTH_SECRET, (err, decoded) => {
    if (err) {
      res.status(401)
      err.message = 'Unauthorized'
      next(err)
    } else {
      req.decoded = decoded
      next()
    }
  })
}

module.exports = veryfyTokenMiddleware
