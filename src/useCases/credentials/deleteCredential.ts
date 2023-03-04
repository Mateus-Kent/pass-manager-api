import { Request, Response } from 'express'

import * as CredentialService from '../../models/credential'

export async function deleteCredential(req: Request, res: Response) {
 const id = Number(req.params.id)

 const credential = await CredentialService.deleteCredential(id)

 if (credential) {
  return res.status(204).send()
 } else {
  return res.status(404).json({ error: 'Senha não encontrada' })
 }
}
