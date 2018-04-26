const request = require('request-promise')
const {json, createError} = require('micro')

const ApiKey = 'fa25c013986c3ee3ae280a53bb0f1285'

module.exports = async (req) => {
    if (req.method !== 'POST') throw createError(405, 'Please use POST')

    const {location} = await json(req);

    if (!location) throw createError(400, 'Expected location key in body')

    const body = await request(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`)

    return JSON.parse(body)
}
