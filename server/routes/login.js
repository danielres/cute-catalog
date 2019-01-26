const express = require('express')
const router = express.Router()

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(
  new LocalStrategy((username, password, done) =>
    done(null, { user: { name: 'John' } })
  )
)

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    res.json(req.user)
  }
)

module.exports = router
