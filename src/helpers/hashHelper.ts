import * as bcrypt from 'bcrypt'

class HashHelper {
 public get SALT_ROUNDS() {
  return Number(process.env.SALT_ROUNDS) || 16
 }

 public async hash(value: string) {
  return bcrypt.hash(value, this.SALT_ROUNDS)
 }

 public async compare(value: string, hash: string) {
  return bcrypt.compare(value, hash)
 }
}

export const hashHelper = new HashHelper()
