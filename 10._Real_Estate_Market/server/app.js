import 'dotenv/config'
import express from 'express'
const app = express()

app.use(express.json())

import path from 'path'
app.use(express.static(path.resolve('../client/dist')))

// import cors from 'cors'
// app.use(cors({
//     origin: true,
//     credentials: true
// }))

// another way to achieve the same, without using cors library
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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

// fallback route
app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'))
})

const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("server is running on port", PORT))