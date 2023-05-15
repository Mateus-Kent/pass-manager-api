import { Request, Response } from 'express'

import { getFieldsWithSameValues } from '../../helpers/getFildsSameValuesHelper'
import { hashHelper } from '../../helpers/hashHelper'
import { tokenHelper } from '../../helpers/tokenHelper'
import * as UserService from '../../models/user'

export async function signUpUser(req: Request, res: Response) {
 const { email, username, password } = req.body

 const userAlreadyExists = await UserService.getUserById({ email })

 if (userAlreadyExists) {
  const fields = getFieldsWithSameValues({
   useCaseFields: { email: 'este email já está em uso' },
   payloads: {
    incoming: { email, username, password },
    stored: userAlreadyExists
   }
  })
  return res.status(409).json({ error: fields })
 }

 const hashedPassword = await hashHelper.hash(password)

 const user = await UserService.createUser({ email, username, password: hashedPassword })

 const token = tokenHelper.generate(String(user.id))

 return res.status(201).json({ user, token })
}
