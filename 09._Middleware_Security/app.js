// express concept of middleware: it gets called before the callback function (only runs on the server)

import express from 'express';
const app = express();

import { rateLimit } from 'express-rate-limit'

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(generalLimiter)

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56
})

console.log(authLimiter)

import middlewareRouter from './routers/middlewareRouter.js'
app.use(middlewareRouter)

import authRouter from './routers/authRouter.js'
app.use(authRouter)

// fallback
app.get("/{*splat}", (req, res) => {
    res.send(`<h1>404</h1> <h3>didnt find a matching route</h3>`)
})

// all is for them all (post, get, delete...)
app.all("/{*splat}", (req, res) => { 
    res.send({ data:"didnt match with a route" })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT  /* server.adress().port*/); // async behavior. so if not started on a specific server (8080 here) this would be good to see what the port actually is in the console
});
console.log("server had started") // this will run and show in console before the callback above. 