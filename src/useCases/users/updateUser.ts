import { Request, Response } from 'express'

import { hashHelper } from '../../helpers/hashHelper'
import * as UserService from '../../models/user'

export async function updateUser(req: Request, res: Response) {
 const id = Number(req.params.id)

 const { username, email, password } = req.body

 const user = await UserService.getUserById({ id })

 if (!user) {
  return res.status(404).json({ erro: 'Esse usuário não existe' })
 }

 const userExists = await UserService.findFirstUser({
  where: {
   AND: [{ email: email }, { id: { not: id } }]
  }
 })

 if (userExists) {
  if (userExists.email === email) {
   return res.status(409).json({ error: 'Esse email já está em uso' })
  }
 }

 const updatedUser = await UserService.updateUser(id, {
  username,
  email,
  password: password && (await hashHelper.hash(password))
 })

 return res.status(200).json(updatedUser)
}
