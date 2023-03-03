import express, { NextFunction, Request, Response } from 'express'

import { authMiddleware } from '../middlewares/authMiddleware'
import {
 createCredential,
 deleteCredential,
 getCredentialById,
 getCredentialsByUser,
 updateCredential
} from '../useCases/credentials'

export const credentialRouter = express.Router()

credentialRouter.post(
 '/create',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 createCredential
)

credentialRouter.get(
 '/getCredentials',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 getCredentialsByUser
)

credentialRouter.get('/getCredential/:id', getCredentialById)

credentialRouter.put(
 '/updateCredential/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 updateCredential
)

credentialRouter.delete(
 '/deleteCredential/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 deleteCredential
)
