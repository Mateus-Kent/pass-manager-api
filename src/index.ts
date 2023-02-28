/* eslint-disable no-unused-vars */
import cors from 'cors'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'

import { env } from './env'
import { router } from './routes/routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
 console.log('ERROR:', err)
 return res.status(500).json({ error: err })
})

const port = env.PORT || 3000

app.listen(port, () => console.log(`Server listening on port ${port}`))
