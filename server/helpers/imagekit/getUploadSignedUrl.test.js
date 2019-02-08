require('../env/init')
const getUploadSignedUrl = require('./getUploadSignedUrl')

describe('getUploadSignedUrl()', () => {
  it('provides an imagekit upload signed url', () => {
    const options = {
      filename: 'cute-cat01.jpg',
      folder: '/cats',
    }

    expect(getUploadSignedUrl(options).length).toEqual(40)
  })
})
