import * as bcrypt from 'bcrypt'

class HashHelper {
 get SALT_ROUNDS() {
  return Number(process.env.SALT_ROUNDS) || 16
 }

 async hash(value: string) {
  return bcrypt.hash(value, this.SALT_ROUNDS)
 }

 async compare(value: string, hash: string) {
  return bcrypt.compare(value, hash)
 }
}

export const hashHelper = new HashHelper()
