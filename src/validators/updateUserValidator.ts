import { z } from 'zod'

export const updateUserSchema = z.object({
 email: z.string().min(1, 'O email é necessário ').email('Email precisa ser valido').optional(),
 username: z.string().min(1, 'O nome de usuário é necessário').optional()
})
