import { MongoClient } from 'mongodb'

const url = "mongodb://localhost:27017" // check port when running the db
                // :// indicates that what comes before is the protocol

const client = new MongoClient(url)

const dbName = "games_library"

await client.connect()

const gamesLibrary = client.db(dbName)

export default {
    games: gamesLibrary.collection("games"),
    game_characters: gamesLibrary.collection("game_characters")
}