import crypto from 'crypto'

import { env } from '../env'

export class CryptoHelper {
 private static readonly algorithm = 'aes-256-cbc'
 private static readonly iv = crypto.randomBytes(16)
 private static readonly secretKey = env.ENCRYPTION_KEY

 public static encrypt(text: string): string {
  const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, this.iv)
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])

  return `${this.iv.toString('hex')}:${encrypted.toString('hex')}`
 }

 public static decrypt(encryptedText: string): string {
  const [ivHex, encryptedHex] = encryptedText.split(':')
  const iv = Buffer.from(ivHex, 'hex')
  const encrypted = Buffer.from(encryptedHex, 'hex')
  const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, iv)
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()])

  return decrypted.toString()
 }
}
