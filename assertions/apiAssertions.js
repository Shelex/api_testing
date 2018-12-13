let chai = require('chai')
const expect = chai.expect
chai.use(require('chai-json-schema'));
const schema = require('./json-schema')

module.exports = {
    statusCode : async function (res) {
        await expect(res.status).to.equal(200)
        await expect(res.statusText).to.equal('OK')
    },

    InfoSchema: async function (res) {
        chai.assert.jsonSchema(res.data, schema.info)
    }

    
}