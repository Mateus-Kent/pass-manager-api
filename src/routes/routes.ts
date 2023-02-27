import express from 'express'

import { userRouter } from './userRoutes.js'

export const router = express.Router()

router.use('/users', userRouter)
