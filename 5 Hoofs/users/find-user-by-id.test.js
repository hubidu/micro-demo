const micro = require('micro')
const test = require('ava')

const findUserById = require('./find-user-by-id')

test('findUserById should find a specific user', async t => {
 const mockOpts = {
     params: {
         id: 1
     }
 }
  const user = await findUserById({}, {}, mockOpts)

  t.deepEqual(user, {
      id: 1,
      name: 'Tony Stark'
  })
})