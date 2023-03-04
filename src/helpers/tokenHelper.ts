import jwt, { JwtPayload } from 'jsonwebtoken'

import { env } from '../env/'
interface TokenPayload {
 userId: string
}

class TokenHelper {
 public generate(userId: string) {
  return jwt.sign({ sub: { userId } }, env.JWT_SECRET, { expiresIn: '1d' })
 }

 public verify(token: string) {
  const payload = jwt.verify(token, env.JWT_SECRET) as JwtPayload

  if (!payload.sub) {
   throw new Error('Invalid Jwt payload')
  }

  return payload.sub as unknown as TokenPayload
 }
}

export const tokenHelper = new TokenHelper()
