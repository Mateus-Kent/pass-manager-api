import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { afterAll, beforeAll } from 'vitest'
import { test, expect, describe } from 'vitest'

import { deleteUser } from '../../models/user'

const prisma = new PrismaClient()

describe('deleteUser', () => {
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
  await prisma.user.deleteMany()
  await prisma.$disconnect()
 })

 test('Excluir um usuário existente', async () => {
  const user = await prisma.user.findUnique({ where: { email: 'john.doe@example.com' } })

  if (!user) {
   throw new Error('Usuário não encontrado')
  }

  const deletedUser = await deleteUser(user.id)
  expect(deletedUser.id).toBe(user.id)

  const checkUser = await prisma.user.findUnique({ where: { id: user.id } })
  expect(checkUser).toBeNull()
 })
})
