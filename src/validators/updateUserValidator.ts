import { z } from 'zod'

export const updateUserSchema = z.object({
 email: z.string().min(1).email().optional().or(z.literal('')),
 username: z.string().min(1, 'O nome de usuário é necessário').optional(),
 password: z
  .string()
  .min(1, 'O nome de usuário é necessário')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/)
  .optional()
})
