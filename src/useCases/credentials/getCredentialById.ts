import { Request, Response } from 'express'

import { CryptoHelper } from '../../helpers/cryptoHelper'
import * as CredentialService from '../../models/credential'

export async function getCredentialById(req: Request, res: Response) {
 const id = Number(req.params.id)

 const credential = await CredentialService.findOneCredential({ id })

 if (!credential) {
  return res.status(404).json({ error: 'Senha não encontrada' })
 } else {
  credential.credentialPassword = CryptoHelper.decrypt(credential.credentialPassword)
  return res.status(200).json(credential)
 }
}
