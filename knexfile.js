if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
require('./server/helpers/env/init')

module.exports = {
  client: 'postgresql',
  debug: true,
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: 'server/db/migrations',
    tableName: 'knex_migrations',
  },
}
