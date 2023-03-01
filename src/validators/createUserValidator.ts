import { z } from 'zod'

export const createUserSchema = z.object({
 email: z.string().min(1, 'O email é necessário ').email('Email precisa ser valido'),
 username: z.string().min(1, 'O nome de usuário é necessário'),
 password: z
  .string()
  .min(6, 'A senha tem que ter no minimo 6 caracteres')
  .regex(
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
   'A senha tem que ter no minimo uma letra minúscula, uma letra maiúscula  e um caracter especial'
  )
})
