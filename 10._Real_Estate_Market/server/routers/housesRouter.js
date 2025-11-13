import {Router} from 'express'
const router = Router()

router.get("/houses", (req, res) => {
    req.session.housingMarket = req.session.housingMarket || []
    res.send({ data: req.session.housingMarket })
})

// const someValue = undefined
// someValue?.push("123")
// console.log(someValue)

router.post("/houses", (req, res) => {
    req.session.housingMarket = req.session.housingMarket || []
    req.session.housingMarket.push(req.body)
    
    res.send({ data: req.session.housingMarket })
})

export default router