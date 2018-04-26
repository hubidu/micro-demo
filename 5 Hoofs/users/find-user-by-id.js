const compose = require('micro-compose')
const { createError } = require('micro')
const userDB = require('../db/user-db')

// "Middleware" which finds user and attaches to request
const findUserById = fn => async (req, res, opts) => {
    const user = userDB.find(user => user.id === parseInt(opts.params.id, 10))
    if (!user) throw createError(400, 'Unknown user')
    
    req.user = user

    return await fn(req, res, opts)
}

module.exports = compose(findUserById)(
    async (req, res) => {
        if (!req.user) throw createError(400, 'USer should be attached to request')
        console.log('Processing...')
        return req.user
    }
)