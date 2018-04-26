const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const got = require('got')

const app = require('./index')

test.beforeEach(async t => {
  const service = micro(app)
  t.context = {
    service,
    url: await listen(service)
  }
})
test.afterEach(async t => t.context.service.close)

test('GET /users should return a list of users', async t => {
  const { body } = await got.get(`${t.context.url}/users`)

  t.truthy(body)
  t.true(body.length > 0)
})