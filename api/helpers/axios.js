const axios = require('axios')
const _CONST = require('./constants')
const instance = axios.create({ baseURL: _CONST.baseUrl })
instance.defaults.headers.common['X-Mashape-Key'] = _CONST.apiKey
module.exports = instance