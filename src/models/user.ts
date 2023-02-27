import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface User {
 id: number
 username: string
 email: string
 password: string
}

export async function getUser(): Promise<User[]> {
 return await prisma.user.findMany()
}

export async function getUserById(id: number): Promise<User | null> {
 return await prisma.user.findUnique({ where: { id } })
}

export async function createUser(username: string, email: string, password: string): Promise<User> {
 return await prisma.user.create({ data: { username, email, password } })
}

export async function updateUser(id: number, username: string, email: string): Promise<User | null> {
 return await prisma.user.update({ where: { id }, data: { username, email } })
}

export async function deleteUser(id: number): Promise<User | null> {
 return await prisma.user.delete({ where: { id } })
}
