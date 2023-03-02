import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createCredential(input: Prisma.CredentialsCreateInput) {
 return await prisma.credentials.create({ data: input })
}

export async function updateCredential(id: number, input: Prisma.CredentialsUpdateInput) {
 return await prisma.credentials.update({ where: { id }, data: input })
}

export async function deleteCredential(id: number) {
 return await prisma.credentials.delete({ where: { id } })
}
