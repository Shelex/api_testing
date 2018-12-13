const {ApiGroup} = require('axios-actions')
const axios =  require('./helpers/axios')
const cardFilters = 'attack={attack}&collectible={collectible}&cost={cost}&durability={durability}&health={health}'

const hsApi = new ApiGroup(axios, {
    cards : `get cards?${cardFilters}`,
    cardBacks: 'get cardbacks',
    cardSearch: 'get cards/search/{name}',
    cardSet: `get cards/sets/{set}?${cardFilters}`,
    cardsByClass: `get cards/classes/{class}?${cardFilters}`,
    cardsByFaction: `get cards/factions/{faction}?${cardFilters}`,
    cardsByQuality: `get cards/qualities/{quality}?${cardFilters}`,
    cardsByRace: `get cards/races/{race}?${cardFilters}`,
    cardsByType: `get cards/types/{type}?${cardFilters}`,
    info: 'get info',
    singleCard: 'get cards/{name}?collectible={collectible}'
})

module.exports = hsApi


