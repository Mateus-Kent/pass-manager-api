import express, { NextFunction, Request, Response } from 'express'

import { authMiddleware } from '../middlewares/authMiddlewares'
import { signUpUser, signInUser, getUser, getUsers, deleteUser } from '../useCases/users'
import { updateUser } from '../useCases/users/updateUser'

export const userRouter = express.Router()

userRouter.post('/create', signUpUser)

userRouter.post('/auth', signInUser)

userRouter.put(
 '/update/:id',
 (req: Request, res: Response, next: NextFunction) => authMiddleware.execute(req, res, next),
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
