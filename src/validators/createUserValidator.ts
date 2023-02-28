import { z } from 'zod'

export const createUserSchema = z.object({
 email: z.string().min(1, 'O email é necessário ').email('Email precisa ser valido'),
 username: z.string().min(1, 'O nome de usuário é necessário'),
 decryptedPassword: z.string().min(6, 'A senha tem que ter no minimo 6 caracteres')
})
