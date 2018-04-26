const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const request = require('request-promise')

const helloWorld = require('./index')

test.beforeEach(async t => {
  const service = micro(helloWorld)
  t.context = {
    service,
    url: await listen(service)
  }
})
test.afterEach(async t => t.context.service.close)

test('hello world', async t => {
  const body = await request(t.context.url)

  t.deepEqual(JSON.parse(body), {hello: 'world'})
})