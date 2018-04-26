const { createError } = require('micro')
const compose = require('micro-compose')
const dispatch = require('micro-route/dispatch')

// "Middleware"

/* Problem: A lot of the middlewares do not work out of the box with dispatch when route
 * parameters are used
 */ 
const visualize = require('./middleware/visualize')
const handleErrors = require('./middleware/handle-errors')

// Routes
const createUser = require('./users/create-user')
const listUsers = require('./users/list-users')
const findUserById = require('./users/find-user-by-id')

const decorate = fn => compose(handleErrors, visualize)(fn)

module.exports = dispatch()
    .dispatch('/users', 'POST', decorate(createUser))
    .dispatch('/users', 'GET', decorate(listUsers))
    .dispatch('/users/:id', 'GET', decorate(findUserById))
    .otherwise((req, res) => { throw createError(404, 'Unknown route') })
