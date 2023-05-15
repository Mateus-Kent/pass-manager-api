import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { test, expect, describe, afterAll, beforeAll } from 'vitest'

import { createUser } from '../../models/user'

const prisma = new PrismaClient()

describe('createUser', () => {
 beforeAll(async () => {
  await prisma.user.delete({ where: {} })
 })

 afterAll(async () => {
  await prisma.user.delete({ where: {} })
  await prisma.$disconnect()
 })

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
})
