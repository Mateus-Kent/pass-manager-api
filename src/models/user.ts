import { Prisma, PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUsers(): Promise<User[]> {
 return await prisma.user.findMany()
}

export async function getUserById(where: Prisma.UserWhereUniqueInput) {
 return await prisma.user.findUnique({ where })
}

export async function createUser(input: Prisma.UserCreateInput) {
 return await prisma.user.create({ data: input })
}

export async function updateUser(id: number, input: Prisma.UserUpdateInput) {
 return await prisma.user.update({ where: { id }, data: input })
}

export async function deleteUser(id: number) {
 return await prisma.user.delete({ where: { id } })
}

export async function findFirstUser(where: Prisma.UserFindFirstArgs) {
 return await prisma.user.findFirst(where)
}
