import { Request, Response } from 'express'

import * as UserService from '../../models/user'

export async function getUsers(req: Request, res: Response) {
 const users = await UserService.getUsers()

 return res.status(200).json(users)
}
