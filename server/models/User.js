const { Model } = require('objection')

const unique = require('objection-unique')({
  fields: ['facebookId', 'email'],
  identifiers: ['id'],
})

class User extends unique(Model) {
  static get tableName() {
    return 'User'
  }

  // validations
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    }
  }
}

module.exports = User
