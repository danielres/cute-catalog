const express = require('express')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

const router = express.Router()
router.use(passport.initialize())

passport.use(
  new LocalStrategy((username, password, done) =>
    done(null, { user: { name: 'John' } })
  )
)

passport.use(
  new FacebookStrategy(
    {
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const params = { facebookId: profile.id }
      let error
      let user

      try {
        user = await User.query().where(params)
        if (user.length === 0)
          user = await User.query().insert({
            ...params,
            name: profile.displayName,
          })
      } catch (e) {
        error = e
      }
      return cb(error, user)
    }
  )
)

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    res.json(req.user)
  }
)

router.get('/facebook', passport.authenticate('facebook'))

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)
module.exports = router
