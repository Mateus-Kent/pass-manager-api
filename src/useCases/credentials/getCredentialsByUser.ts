import { Request, Response } from 'express'

import * as CredentialService from '../../models/credential'

export async function getCredentialsByUser(req: Request, res: Response) {
 const credentials = await CredentialService.findManyCredential({ userId: Number(req.userId) })

 return res.status(200).json(credentials)
}
