const crypto = require('crypto')

const calculateSignature = options => {
  const message = [
    {
      key: 'filename',
      value: options.filename,
    },
    {
      key: 'timestamp',
      value: options.timestamp,
    },
    {
      key: 'apiKey',
      value: options.apiKey,
    },
  ].sort((a, b) => a.key > b.key)

  const messageStr = message.map(i => `${i.key}=${i.value}`).join('&')

  return crypto
    .createHmac('sha1', options.apiSecret)
    .update(messageStr)
    .digest('hex')
}

const getUploadSignedUrl = options => {
  const merged = {
    apiKey: process.env.IMAGEKIT_API_KEY,
    apiSecret: process.env.IMAGEKIT_API_SECRET,
    folder: '/',
    imagekitId: process.env.IMAGEKIT_ID,
    useSecure: false,
    useSubdomain: false,
    useUniqueFilename: false,
    ...options,
    timestamp: parseInt(Date.now() / 1000, 10),
  }

  return calculateSignature(merged)
}

module.exports = getUploadSignedUrl
