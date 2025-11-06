import {Router} from 'express'
const router = Router()

router.get("/addicecream", (req, res) => {
    req.session.flavor = "choco caramel"
    req.session.amount = 5
    res.send(req.session)
})

router.get("/eaticecream", (req, res) => {
    req.session.amount--
    if(!req.session.flavor) {
        return res.send({ message: "shop is nonexistent" })
    }
    if(!req.session.amount) {
        return res.send({ message: "ran out of ice cream" })
    }
    res.send({ flavor: req.session.flavor, amount: req.session.amount })
})

router.get("/closeshop", (req, res) => {
    req.session.destroy()
})

export default router