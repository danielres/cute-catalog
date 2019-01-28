const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const createToken = require('../../helpers/jwt/createToken')
const facebookStrategy = require('./facebookStrategy')

const router = express.Router()
router.use(passport.initialize())

passport.use(
  new LocalStrategy((username, password, done) =>
    done(null, { user: { name: 'John' } })
  )
)

passport.use(facebookStrategy)

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    res.json(req.user)
  }
)

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  async (req, res) => {
    const maxAge = process.env.AUTH_DURATION * 1000
    const payload = { userId: req.user.id }
    const token = createToken({ payload })

    res.cookie('auth', token, {
      httpOnly: true,
      maxAge,
      secure: process.env.DISABLE_SECURE_TOKEN !== 'true',
    })
    res.cookie('authExpiresAt', Date.now() + maxAge, { maxAge })

    res.redirect('/')
  }
)

module.exports = router
