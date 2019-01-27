const jwt = require('jsonwebtoken')

const decodeToken = ({ token, secret = process.env.AUTH_SECRET }) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject({
          success: false,
          message: 'Token is not valid',
        })
      } else {
        resolve(decoded)
      }
    })
  })

module.exports = decodeToken
