import db from './connection.js'

const gameCharacterDelete = await db.game_characters.deleteOne({ name: "Lara Croft" })

console.log(gameCharacterDelete)