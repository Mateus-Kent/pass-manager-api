import express from 'express'

import { credentialRouter } from './credentialRoutes'
import { userRouter } from './userRoutes'

export const router = express.Router()

router.use('/users', userRouter)

router.use('/credentials', credentialRouter)
