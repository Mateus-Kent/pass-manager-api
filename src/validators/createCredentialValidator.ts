import { z } from 'zod'

export const createCredentialSchema = z.object({
 emailCredential: z.string().min(1).email().optional().or(z.literal('')),
 usernameCredential: z.optional(z.string()),
 credentialPassword: z.string().min(1, 'A senha é obrigatoria'),
 websiteName: z.string().optional(),
 websiteUrl: z.string().optional()
})
