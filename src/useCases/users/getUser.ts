import { Request, Response } from 'express'

import * as UserService from '../../models/user'

export async function getUser(req: Request, res: Response) {
 const id = Number(req.params.id)

 const user = await UserService.getUserById({ id })

 if (user) {
  res.status(202).json(user)
 } else {
  res.status(404).json({ error: 'Usuário não encontrado' })
 }
}
