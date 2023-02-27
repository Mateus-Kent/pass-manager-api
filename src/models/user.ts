import { Prisma, PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUsers(): Promise<User[]> {
 return await prisma.user.findMany()
}

export async function getUserById(where: Prisma.UserWhereUniqueInput) {
 return await prisma.user.findUnique({ where })
}

export async function createUser(username: string, email: string, password: string) {
 return await prisma.user.create({ data: { username, email, password } })
}

export async function updateUser(id: number, username: string, email: string) {
 return await prisma.user.update({ where: { id }, data: { username, email } })
}

export async function deleteUser(id: number) {
 return await prisma.user.delete({ where: { id } })
}
