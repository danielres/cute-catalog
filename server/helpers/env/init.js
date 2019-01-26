const dotenv = require('dotenv')
const path = require('path')

const env = process.env.NODE_ENV
if (env === 'dev' || env === 'development') {
  const file = '.env'
  console.log(`[server] Loading environment "${env}" from: "${file}"`)
  dotenv.load({ path: path.resolve(file) })
}
