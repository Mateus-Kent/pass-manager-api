import { Request, Response } from 'express'

import { CryptoHelper } from '../../helpers/cryptoHelper'
import * as CredentialService from '../../models/credential'

export async function createCredential(req: Request, res: Response) {
 const { emailCredential, usernameCredential, credentialPassword, websiteName, websiteUrl } = req.body

 const hashedCredentialPassword = CryptoHelper.encrypt(credentialPassword)

 const credential = await CredentialService.createCredential({
  emailCredential,
  usernameCredential,
  credentialPassword: hashedCredentialPassword,
  websiteName,
  websiteUrl,
  user: {
   connect: {
    id: Number(req.userId)
   }
  }
 })

 return res.status(201).json(credential)
}
