const { createError } = require('micro')
const userDB = require('../db/user-db')

module.exports = async (req, res, { params }) => {
    const user = userDB.find(user => user.id === parseInt(params.id, 10))
    if (!user) throw createError(400, 'Unknown user')

    return user
}