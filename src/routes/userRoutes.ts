import express from 'express'

import { signUpUser, signInUser, getUser, getUsers, deleteUser } from '../useCases/users'
import { updateUser } from '../useCases/users/updateUser'

export const userRouter = express.Router()

userRouter.post('/create', signUpUser)

userRouter.post('/auth', signInUser)

userRouter.put('/update/:id', updateUser)

userRouter.get('/getUser/:id', getUser)

userRouter.get('/getUsers', getUsers)

userRouter.delete('/delete/:id', deleteUser)
