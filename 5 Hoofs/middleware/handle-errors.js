const { send, createError } = require('micro')

const handleErrors = fn => async (req, res, ...opts) => {
    try {
      return await fn(req, res, ...opts)
    } catch (err) {
      // TODO Do custom error handling
      console.log('BOOM', err.stack)

      send(res, 400, {
        error: err.message
      })
    }
}

module.exports = handleErrors