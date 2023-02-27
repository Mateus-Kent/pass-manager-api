import { Request, Response } from 'express'

import { hashHelper } from '../../helpers/hashHelper'
import { tokenHelper } from '../../helpers/tokenHelper'
import * as UserService from '../../models/user'

export async function createUser(req: Request, res: Response) {
 try {
  const { name, email, decryptedPassword } = req.body

  const password = await hashHelper.hash(decryptedPassword)

  const user = await UserService.createUser(name, email, password)

  const token = tokenHelper.generate(user.id)

  return res.status(201).json({ user, token })
 } catch (error) {
  console.log(error)

  res.sendStatus(500)
 }
}
