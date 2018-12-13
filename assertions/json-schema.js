function nestedArraySchema (minItems, isUnique, itemsType) {
    return {
        type: 'array',
                minItems: minItems,
                uniqueItems: isUnique,
                    items: {
                    type: itemsType
                }
    }
}

function stringSchema () {
    return {
        type: 'string'
    }
}

module.exports = {
    info: Object.freeze({
        title: 'info schema',
        type: 'object',
        required: ['patch', 'classes', 'sets', 'standard', 'wild', 'types', 'factions', 'qualities', 'races', 'locales'],
        properties: {
            patch: stringSchema(),
            classes: nestedArraySchema(12, true, 'string'),
            sets: nestedArraySchema(18, true, 'string'),
            standard: nestedArraySchema(8, true, 'string'),
            wild: nestedArraySchema(18, true, 'string'),
            types: nestedArraySchema(6, true, 'string'),
            factions: nestedArraySchema(3, true, 'string'),
            qualities: nestedArraySchema(5, true, 'string'),
            races: nestedArraySchema(8, true, 'string'),
            locales: nestedArraySchema(15, true, 'string')
        }
})
}