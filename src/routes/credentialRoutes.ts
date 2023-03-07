import express, { NextFunction, Request, Response } from 'express'

import { authMiddleware } from '../middlewares/authMiddleware'
import { validate } from '../middlewares/validatorMiddleware'
import {
 createCredential,
 deleteCredential,
 getCredentialById,
 getCredentialsByUser,
 updateCredential
} from '../useCases/credentials'
import { createCredentialSchema, updateCredentialSchema } from '../validators'

export const credentialRouter = express.Router()

credentialRouter.post(
 '/create',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 validate(createCredentialSchema),
 createCredential
)

credentialRouter.get(
 '/getCredentials',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 getCredentialsByUser
)

credentialRouter.get(
 '/getCredential/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 getCredentialById
)

credentialRouter.put(
 '/updateCredential/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 validate(updateCredentialSchema),
 updateCredential
)

credentialRouter.delete(
 '/deleteCredential/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 deleteCredential
)
