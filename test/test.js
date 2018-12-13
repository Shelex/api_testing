let api = require('../api/hsApi')
let assert = require('../assertions/apiAssertions')

describe('Get info', async function() {
    it('should return a list of current patch, classes, sets, types, factions, qualities, races and locales.', async () => {
      let info = await api.info()
      await assert.statusCode(info)
      await assert.validateInfoSchema(info)
    })
    it('should fail.', async () => {
      let info = await api.info()
      delete info.data.factions
      await assert.statusCode(info)
      await assert.validateInfoSchema(info)
    })
})