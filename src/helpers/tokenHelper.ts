import jwt from 'jsonwebtoken'

import { env } from '../env/'

class TokenHelper {
 generate(userId: number) {
  return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: '1d' })
 }

 verify(token: string) {
  return jwt.verify(token, env.JWT_SECRET)
 }
}

export const tokenHelper = new TokenHelper()
