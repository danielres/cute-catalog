const dotenv = require('dotenv')
const path = require('path')

const env = process.env.NODE_ENV

;(() => {
  const file = '.env.local'
  console.log(`[server] Loading local env vars "${env}" from: "${file}"`)
  dotenv.load({ path: path.resolve(file) })
})()

if (env === 'dev' || env === 'development') {
  const file = '.env'
  console.log(`[server] Loading environment "${env}" from: "${file}"`)
  dotenv.load({ path: path.resolve(file) })
}
