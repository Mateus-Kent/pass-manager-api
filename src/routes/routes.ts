import express from 'express'

import { userRouter } from './userRoutes'

export const router = express.Router()

router.use('/users', userRouter)
