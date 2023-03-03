import { Request, Response } from 'express'

import { CryptoHelper } from '../../helpers/cryptoHelper'
import * as CredentialService from '../../models/credential'

export async function updateCredential(req: Request, res: Response) {
 const id = Number(req.params.id)

 const { emailCredential, usernameCredential, credentialPassword, websiteName, websiteUrl } = req.body

 const credential = await CredentialService.findOneCredential({ id })

 if (!credential) {
  return res.status(404).json({ error: 'Senha não encontrada' })
 }

 const updatedCredential = await CredentialService.updateCredential(id, {
  emailCredential,
  usernameCredential,
  credentialPassword: CryptoHelper.encrypt(credentialPassword),
  websiteName,
  websiteUrl
 })

 return res.status(200).json(updatedCredential)
}
