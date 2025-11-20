import express from 'express'
const app = express()

app.use(express.static('public'))

app.use(express.json())

import exercisesRouter from './routers/exercisesRouter.js'
app.use(exercisesRouter)
import usersRouter from './routers/usersRouter.js'
app.use(usersRouter)


// fallback route
// app.get("/{*splat}", (req, res) => {
//     res.sendFile()
// })


const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("server is running on port", PORT))