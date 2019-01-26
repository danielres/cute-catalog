exports.up = knex => {
  return knex.schema.createTable('User', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('password')
    table.string('facebookId')
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('User')
}
