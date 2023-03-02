import express, { NextFunction, Request, Response } from 'express'

import { authMiddleware } from '../middlewares/authMiddleware'
import { createCredential } from '../useCases/credentials'

export const credentialRouter = express.Router()

credentialRouter.post(
 '/create',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 createCredential
)
