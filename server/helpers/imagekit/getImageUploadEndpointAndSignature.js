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

const getImageUploadEndpointAndSignature = options => {
  const merged = {
    apiKey: process.env.IMAGEKIT_API_KEY,
    apiSecret: process.env.IMAGEKIT_API_SECRET,
    folder: options.folder || '/uploads',
    imagekitId: process.env.IMAGEKIT_ID,
    useSecure: false,
    useSubdomain: false,
    useUniqueFilename: false,
    ...options,
    timestamp: parseInt(Date.now() / 1000, 10),
  }

  return {
    endpoint: `https://upload.imagekit.io/rest/api/image/v2/${merged.apiKey}`,
    signature: calculateSignature(merged),
  }
}

module.exports = getImageUploadEndpointAndSignature
