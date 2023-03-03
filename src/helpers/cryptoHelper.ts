import { randomBytes, createCipheriv, createDecipheriv } from 'crypto'

import { env } from '../env'

export class CryptoHelper {
 private static readonly algorithm = 'aes-256-gcm'
 private static readonly ivLength = 12
 private static readonly secretKey = env.ENCRYPTION_KEY

 public static encrypt(text: string) {
  const iv = randomBytes(this.ivLength)
  const cipher = createCipheriv(this.algorithm, this.secretKey, iv)

  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()])

  const tag = cipher.getAuthTag()

  return `${iv.toString('hex')}:${encrypted.toString('hex')}:${tag.toString('hex')}`
 }

 public static decrypt(encryptedText: string) {
  const [ivHex, encryptedHex, tagHex] = encryptedText.split(':')

  const iv = Buffer.from(ivHex, 'hex')
  const encrypted = Buffer.from(encryptedHex, 'hex')
  const tag = Buffer.from(tagHex, 'hex')

  const decipher = createDecipheriv(this.algorithm, this.secretKey, iv)
  decipher.setAuthTag(tag)

  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()])

  return decrypted.toString('utf8')
 }
}
