const FacebookStrategy = require('passport-facebook').Strategy

const findOrCreateUserByFacebookId = require('../../queries/findOrCreateUserByFacebookId')

module.exports = new FacebookStrategy(
  {
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    profileFields: ['id', 'displayName', 'email'],
  },
  async (accessToken, refreshToken, profile, cb) => {
    let error
    let user
    try {
      user = await findOrCreateUserByFacebookId({
        facebookId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      })
    } catch (e) {
      error = e
    }

    return cb(error, user)
  }
)
