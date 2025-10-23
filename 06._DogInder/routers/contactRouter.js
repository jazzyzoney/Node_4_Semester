import { Router } from 'express' // because we only want router from express 

const router = Router() 

router.post("/api/contact", async (req, res) => {
    console.log(req.body)
   res.send({ data: "message received" })
})

export default router 
