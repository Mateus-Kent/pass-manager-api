import express from 'express'

import { createUser } from '../useCases/users/createUser'

export const userRouter = express.Router()

userRouter.post('/create', createUser)
