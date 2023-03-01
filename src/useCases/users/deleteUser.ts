import { Request, Response } from 'express'

import * as UserService from '../../models/user'

export async function deleteUser(req: Request, res: Response) {
 const id = parseInt(req.params.id)

 const user = await UserService.deleteUser(id)

 if (user) {
  res.status(200).send()
 } else {
  res.status(404).json({ error: 'Usuário não encontrado' })
 }
}
