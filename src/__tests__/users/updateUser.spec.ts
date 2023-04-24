import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { afterAll, beforeAll } from 'vitest'
import { test, expect, describe } from 'vitest'

import { updateUser } from '../../models/user'

const prisma = new PrismaClient()

describe('updateUser', () => {
 beforeAll(async () => {
  await prisma.user.create({
   data: {
    username: 'john.doe@example.com',
    email: 'john.doe@example.com',
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date()
   }
  })
 })

 afterAll(async () => {
  await prisma.user.deleteMany({ where: {} })
  await prisma.$disconnect()
 })

 test('Should update an User', async () => {
  const user = await prisma.user.findUnique({ where: { email: 'john.doe@example.com' } })

  if (!user) {
   throw new Error('Usuário não encontrado')
  }

  const updatedUser = await updateUser(user.id, { username: 'Jane Doe' })

  expect(updatedUser.id).toBe(user.id)
  expect(updatedUser.username).toBe('Jane Doe')
 })
})
