import { z } from 'zod'

const envSchema = z.object({
 DATABASE_HOST: z.string().min(1, "A env 'DATABASE_HOST' da sala é necessária."),
 DATABASE_PORT: z
  .string()
  .min(1, "A env 'DATABASE_PORT' da sala é necessário.")
  .transform(value => Number(value)),
 DATABASE_NAME: z.string().min(1, "A env 'DATABASE_NAME' da sala é necessário."),
 DATABASE_USER: z.string().min(1, "A env 'DATABASE_USER' da sala é necessário."),
 DATABASE_PASS: z.string().min(1, "A env 'DATABASE_PASS' da sala é necessário."),
 JWT_SECRET: z.string().min(1, "A env 'JWT_SECRET' da sala é necessário."),
 PORT: z
  .string()
  .min(1, "A env 'PORT' da sala é necessário.")
  .transform(value => Number(value)),
 DATABASE_URL: z.string().min(1, "A env 'DATABASE_URL' da sala é necessário."),
 ENCRYPTION_KEY: z.string().min(1, "A env 'ENCRYPTION_KEY' da sala é necessário.")
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
 console.error('Variáveis de ambiente inválidas.', _env.error.format())

 throw new Error('Variáveis de ambiente inválidas.')
}

export const env = _env.data
