const { createError } = require('micro')
const dispatch = require('micro-route/dispatch')

const createUser = require('./users/create-user')
const listUsers = require('./users/list-users')
const findUserById = require('./users/find-user-by-id')

module.exports = dispatch()
    .dispatch('/users', 'POST', createUser)
    .dispatch('/users', 'GET', listUsers)
    .dispatch('/users/:id', 'GET', findUserById)
    .otherwise((req, res) => { throw createError(404, 'Unknown route') })
