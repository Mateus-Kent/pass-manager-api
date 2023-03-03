import { z } from 'zod'

export const updateCredentialSchema = z.object({
 emailCredential: z.string().min(1).email().optional().or(z.literal('')),
 usernameCredential: z.string().optional(),
 credentialPassword: z.string().optional(),
 websiteName: z.string().optional(),
 websiteUrl: z.string().optional()
})
