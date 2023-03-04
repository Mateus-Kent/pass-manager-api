import { Request, Response } from 'express'

import * as UserService from '../../models/user'

export async function getUser(req: Request, res: Response) {
 const id = Number(req.params.id)

 const user = await UserService.getUserById({ id })

 if (user) {
  return res.status(200).json(user)
 } else {
  return res.status(404).json({ error: 'Usuário não encontrado' })
 }
}
