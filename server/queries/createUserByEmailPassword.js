const User = require('../models/User')

const createUserByEmailPassword = ({ email, name, password }) =>
  User.query().insert({ email, name, password })

module.exports = createUserByEmailPassword
