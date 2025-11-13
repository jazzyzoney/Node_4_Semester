import 'dotenv/config'
import express from 'express'
const app = express()

import session from 'express-session'

app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//routers, real estate agents, houses
import realEstateAgentsRouter from './routers/realEstateAgentsRouter.js'
app.use(realEstateAgentsRouter)
import housesRouter from './routers/housesRouter.js'
app.use(housesRouter)


const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("server is running on port", PORT))