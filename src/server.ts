import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { INDEX_ROUTES } from './routes'

const app = express()
  .use(express.json())
  .use(cors())
  .use('/', INDEX_ROUTES)

const PORT = process.env.PORT || 3006
const server = app.listen(PORT, () => console.log(` server run in port ${PORT}`))
server.timeout = 60000