import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { afterAll, beforeAll } from 'vitest'
import { test, expect, describe } from 'vitest'

import { deleteUser } from '../../models/user'

const prisma = new PrismaClient()

const email = faker.internet.email()

describe('deleteUser', () => {
 beforeAll(async () => {
  await prisma.user.delete({ where: {} })

  await prisma.user.upsert({
   create: {
    username: 'john.doe@example.com',
    email: email,
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   update: {
    username: 'aaaaaa',
    updatedAt: new Date()
   },
   where: {
    email: 'john.doe@example.com'
   }
  })
 })

 afterAll(async () => {
  await prisma.$disconnect()
 })

 test('Excluir um usuário existente', async () => {
  const user = await prisma.user.findUnique({ where: { email: email } })

  if (!user) {
   throw new Error('Usuário não encontrado')
  }

  const deletedUser = await deleteUser(user.id)
  expect(deletedUser.id).toBe(user.id)

  const checkUser = await prisma.user.findUnique({ where: { id: user.id } })
  expect(checkUser).toBeNull()
 })
})
