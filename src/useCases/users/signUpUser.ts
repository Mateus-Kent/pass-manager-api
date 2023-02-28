import { Request, Response } from 'express'

import { hashHelper } from '../../helpers/hashHelper'
import { tokenHelper } from '../../helpers/tokenHelper'
import * as UserService from '../../models/user'

export async function signUpUser(req: Request, res: Response) {
 const { email, username, decryptedPassword } = req.body

 const password = await hashHelper.hash(decryptedPassword)

 const user = await UserService.createUser(email, username, password)

 const token = tokenHelper.generate(String(user.id))

 return res.status(201).json({ user, token })
}
