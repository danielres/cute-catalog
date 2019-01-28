const jwt = require('jsonwebtoken')

const veryfyTokenMiddleware = (req, res, next) => {
  jwt.verify(req.cookies.auth, process.env.AUTH_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Token is not valid',
      })
    } else {
      req.decoded = decoded
      next()
    }
  })
}

module.exports = veryfyTokenMiddleware
