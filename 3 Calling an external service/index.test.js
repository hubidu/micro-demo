const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const got = require('got')

const helloWorld = require('./index')

test.beforeEach(async t => {
  const service = micro(helloWorld)
  t.context = {
    service,
    url: await listen(service)
  }
})
test.afterEach(async t => t.context.service.close)

test('weather proxy service', async t => {
  const { body } = await got.post(t.context.url, {
    json: true,
    body: { location: 'munich'}
  })

  const weatherData = body
  t.truthy(weatherData.weather)
  t.true(weatherData.weather.length > 0)
})