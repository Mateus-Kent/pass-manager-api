import { NextFunction, Request, Response } from 'express'

import { tokenHelper } from '../helpers/tokenHelper'

class AuthMiddleware {
 async execute(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
   return res.status(401).json({ message: 'Have to be a authorization' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
   const data = tokenHelper.verify(token)

   req.userId = data.userId

   next()
  } catch (err) {
   return res.status(401).json({ message: 'Have to be a authorization' })
  }
 }
}

export const authMiddleware = new AuthMiddleware()
