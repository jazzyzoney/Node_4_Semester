import db from './connection.js'

const gameCreated = await db.games.insert({ title: "Spiderman" })
console.log(gameCreated)