const express = require('express')
const passport = require('passport')

const facebookStrategy = require('./facebookStrategy')
const findUserByEmailPassword = require('../../queries/findUserByEmailPassword')
const ServerError = require('../../ServerError')
const setAuthCookies = require('./setAuthCookies')

const router = express.Router()
router.use(passport.initialize())

passport.use(facebookStrategy)

router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await findUserByEmailPassword({ email, password })
    if (!user) return next(ServerError(404, 'User not found'))

    setAuthCookies({ res, user })

    res.json({ success: true })
  } catch (e) {
    next(e)
  }
})

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  async (req, res, next) => {
    try {
      setAuthCookies({ res, user: req.user })

      res.redirect('/')
    } catch (e) {
      next(e)
    }
  }
)

module.exports = router
