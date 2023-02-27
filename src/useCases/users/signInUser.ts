import { Request, Response } from 'express'

import { hashHelper } from '../../helpers/hashHelper'
import { tokenHelper } from '../../helpers/tokenHelper'
import * as UserService from '../../models/user'

export async function signInUser(req: Request, res: Response) {
 const { email, password } = req.body

 const user = await UserService.getUserById({ email })

 if (!user) {
  return res.status(404).json({ message: 'User not found' })
 }

 const isValidPassword = await hashHelper.compare(password, user.password)

 if (!isValidPassword) {
  return res.status(401).json({ message: 'This password is incorrect' })
 }

 const token = tokenHelper.generate(user.id)

 return res.status(200).json({ user, token })
}
