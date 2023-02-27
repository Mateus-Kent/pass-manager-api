import express from 'express'

import { signUpUser, signInUser } from '../useCases/users'

export const userRouter = express.Router()

userRouter.post('/create', signUpUser)

userRouter.post('/auth', signInUser)
