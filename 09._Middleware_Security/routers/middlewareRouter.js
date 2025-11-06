import {Router} from 'express';
const router = Router();

router.get("/room", (req, res) => {
    res.send({ data: "you are in room 1" })
})

router.get("/room", (req, res, next) => { // not possible because it has already "matched" with the first route and it cant be overwritten
    res.send({ data: "you are in room 2" })
    console.log("")
    next() // tells the function to go to the next match
})

//inline middleware 
router.get("/room", (req, res, next) => {
    res.send({ data: "you are in room 1" })
    console.log("")
    next() 
}, (req, res) => {
    res.send({ data: "you are in room 2" })
})

// ---------------- use case 

function ipLogger(req, res, next) {
    console.log(req.ip)
    next()
}
//app.use("/room", ipLogger) // will hit all that match the /room endpoint 

//assignment: create a greeter middleware that says "hello" to anyone that enters a room and then sends them on their way
function greeter(req, res, next) {
    console.log("hello")
    next()
}
//app.use("/room", greeter)

// -------------

export default router