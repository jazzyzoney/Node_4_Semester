import { Router } from 'express' // because we only want router from express 
import { getMatches } from '../util/matchesUtil.js'

// dummy router - ikke en instans af en server
const router = Router() // a router can contain many routes

router.get("/api/matches", async (req, res) => {
    const matches = await getMatches() // venter på at getMatches() returnere noget 
    res.send({ data:matches })
})

export default router // means that when importing in app.js u dont have to respect it and can call it whatever u want 
