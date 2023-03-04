import { Request, Response } from 'express'

import * as UserService from '../../models/user'

export async function deleteUser(req: Request, res: Response) {
 const id = Number(req.params.id)

 const user = await UserService.deleteUser(id)

 if (user) {
  return res.status(204).send()
 } else {
  return res.status(404).json({ error: 'Usuário não encontrado' })
 }
}
