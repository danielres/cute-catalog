const { Model } = require('objection')

class Product extends Model {
  static get tableName() {
    return 'Product'
  }

  // validations
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],

      properties: {
        id: { type: 'integer' },
      }
    }
  }

}

module.exports = Product
