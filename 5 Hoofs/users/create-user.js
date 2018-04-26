const { json, createError } = require('micro')

const userDB = require('../db/user-db')

module.exports = async req => {
    const user = await json(req)
    if (!user.name) throw createError(400, 'user must have a name')

    user.id = Date.now()

    userDB.push(user)

    return `Created new user ${user.id}`
}