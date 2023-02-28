import { Request, Response } from 'express'

import * as UserService from '../../models/user'

export async function updateUser(req: Request, res: Response) {
 const id = parseInt(req.params.id)

 const { username, email } = req.body

 const user = await UserService.updateUser(id, username, email)

 if (user) {
  res.status(200).json(user)
 } else {
  res.status(404).json({ error: 'User not found' })
 }
}
