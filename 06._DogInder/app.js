import express from 'express';
import path from 'path';

// anbefaler at have imports i blokke - det er mærkeligt i andre sprog men her giver det mening i logisk blokke (det er okay hvis man bare smider det i toppen)

const app = express();

app.use(express.static("public"));

import matchesRouter from "./routers/matchesRouter.js"
app.use(matchesRouter)

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)

// ========================= PAGES =====================================

import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter)

// import fs from "fs"

// const frontpage = fs.readFileSync("./public/pages/frontend/index.html").toString() // læser filen synkront, altså går ikke viedere til næste linjer før den er færdig her. placeres udenfor metoden hvor den skal bruges. 
// //console.log(frontpage) // returns a buffer, therefore we add .toString above, to get something we can actually read instead 

// const matchesPage = fs.readFileSync("./public/pages/matches/matches.html").toString()

// const header = fs.readFileSync("./public/components/header/header.html").toString()
// const footer = fs.readFileSync("./public/components/footer/footer.html").toString()

// less loading time. server side rendering MEANS NO CORS ERRORS

// THESE HAVE BEEN MADE INTO ROUTERS IN PAGESROUTER.JS !!
// import { frontpagePage, matchesPage } from './util/pagesUtil.js';

// app.get("/", (req, res) => {
//     //res.sendFile(path.resolve('public/pages/frontend/index.html'))
//     res.send(frontpage)
// });

// app.get("/matches", (req, res) => {
//     res.send(matchesPage)
// });

// ========================= API =======================================

// task create a /api/matches route that returns 5 dog objects contain urls. 

import { getMatches } from './util/matchesUtil.js';

// app.get("/api/matches", async (req, res) => {
//     const matches = await getMatches() // venter på at getMatches() returnere noget 
//     res.send({ data:matches })
// })


// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});
