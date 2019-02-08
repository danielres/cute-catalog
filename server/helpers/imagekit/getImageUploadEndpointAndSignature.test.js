require('../env/init')
const getImageUploadEndpointAndSignature = require('./getImageUploadEndpointAndSignature')

describe('getImageUploadEndpointAndSignature()', () => {
  it('provides an imagekit upload endpoint and signature', () => {
    const options = {
      filename: 'cute-cat01.jpg',
      folder: '/cats',
    }

    const result = getImageUploadEndpointAndSignature(options)

    expect(result.signature.length).toEqual(40)
    expect(result.endpoint).toEqual(
      `https://upload.imagekit.io/rest/api/image/v2/${
        process.env.IMAGEKIT_API_KEY
      }`
    )
  })
})
