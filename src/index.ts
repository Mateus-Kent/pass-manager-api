import cors from 'cors'
import express from 'express'

import { env } from './env'

const app = express()
app.use(cors())
app.use(express.json())

const port = env.PORT || 3000

app.listen(port, () => console.log(`Server listening on port ${port}`))
