import {Router} from 'express'
const router = Router()

// authentication vs. authorisation
// authentication: system tries to identify who u are and if u have access to this
// author: after logging in it will check if u have the rights needed to see/edit things


// middleware to ensure the user is admin 
function isAdmin(req, res, next) {
    // simulates checking in the database
    // assumes that the user is admin
    const isAdmin = true
    if(isAdmin) {
        req.isAdmin = isAdmin
        //simulates username from the database
        req.username = "jennie"
        return next()
    } 
        res.status(403).send({ data: "u need to be an admin to access this route" })
}

router.get("/auth/secretroute", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username)
    res.send({ data: "some secret data" })
})

export default router