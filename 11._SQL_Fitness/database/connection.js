import sqlite3 from 'sqlite3' // allows u to create queries through the connection 
import { open } from 'sqlite' //opens the connection

// open the database
const connection = await open({
    filename: 'fitness.db', //extensions dont matter
    driver: sqlite3.Database
})

export default connection
// console.log(connection)
// connection.close() //if there is no closer, the connection will keep going

