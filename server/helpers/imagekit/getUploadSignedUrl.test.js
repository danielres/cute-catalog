require('../env/init')
const getUploadSignedUrl = require('./getUploadSignedUrl')

describe('getUploadSignedUrl()', () => {
  it('provides an imagekit upload signed url', () => {
    const options = {
      filename: 'cute-cat01.jpg',
      folder: '/cats',
    }
    const result = getUploadSignedUrl(options)
    expect(result.signature.length).toEqual(40)
    expect(result.endpoint).toEqual(
      `https://upload.imagekit.io/rest/api/image/v2/${
        process.env.IMAGEKIT_API_KEY
      }`
    )
  })
})
