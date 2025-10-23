import { readPage, constructPage } from "./templatingEngine.js"

const frontpage = readPage("./public/pages/frontend/index.html")  // læser filen synkront, altså går ikke viedere til næste linjer før den er færdig her. placeres udenfor metoden hvor den skal bruges. 
//console.log(frontpage) // returns a buffer, therefore we add .toString above, to get something we can actually read instead 
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "DogInder | Welcome"
})

const matches = readPage("./public/pages/matches/matches.html")
export const matchesPage = constructPage(matches, {
    tabTitle: "DogInder | Matches",
    cssLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
})

const contact = readPage("./public/pages/contact/contact.html")
export const contactPage = constructPage(contact, {
    tabTitle: "DogInder | Contact"
})
