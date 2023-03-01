import { z } from 'zod'

export const updateUserSchema = z.object({
 email: z.optional(z.string().min(1, 'O email é necessário ').email('Email precisa ser valido')),
 username: z.optional(z.string().min(1, 'O nome de usuário é necessário')),
 password: z.optional(
  z
   .string()
   .min(1, 'O nome de usuário é necessário')
   .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/)
 )
})
