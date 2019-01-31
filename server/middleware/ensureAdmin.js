const findUserById = require('../queries/findUserById')

const ensureAdminMiddleware = async (req, res, next) => {
  const { userId } = req.decoded
  const currentUser = await findUserById(userId)
  if (currentUser.isAdmin) return next()

  res.status(401)
  next(Error('Unauthorized'))
}

module.exports = ensureAdminMiddleware
