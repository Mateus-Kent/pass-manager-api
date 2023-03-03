import express, { NextFunction, Request, Response } from 'express'

import { authMiddleware } from '../middlewares/authMiddleware'
import { validate } from '../middlewares/validatorMiddleware'
import { signUpUser, signInUser, getUser, getUsers, updateUser, deleteUser } from '../useCases/users'
import { createUserSchema, updateUserSchema } from '../validators'

export const userRouter = express.Router()

userRouter.post('/create', validate(createUserSchema), signUpUser)

userRouter.post('/auth', signInUser)

userRouter.put(
 '/update/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 validate(updateUserSchema),
 updateUser
)

userRouter.get(
 '/getUser/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 getUser
)

userRouter.get('/getUsers', getUsers)

userRouter.delete(
 '/delete/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
 deleteUser
)
