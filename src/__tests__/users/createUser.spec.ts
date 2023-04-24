import { faker } from '@faker-js/faker'
import { test, expect } from 'vitest'

import { createUser } from '../../models/user'

test('Should create an user', async () => {
 const user = {
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  createdAt: new Date(),
  updatedAt: new Date()
 }

 const createdUser = await createUser(user)

 expect(createdUser.username).toBe(user.username)
 expect(createdUser.email).toBe(user.email)
 expect(createdUser.password).toBe(user.password)
})
