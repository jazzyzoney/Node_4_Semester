import db from './connection.js'

/* queries against the database:
db.exec
run DDL
DCL 
*/

// const deleteMode = process.argv.find((argument) => argument.includes('delete'))

const deleteMode = process.argv.includes('delete') // both are good, this is just easier to read 

if (deleteMode) {
db.exec(`DROP TABLE IF EXISTS exercises`)
db.exec(`DROP TABLE IF EXISTS users`)
}

/*
conventions for SQL:
use lowercase - keywords will pop out and what is dynamic will pop out, so it is easier to read 
use snake case
use plural for tables
*/

// create an exercises and users table using SQL syntax you know 
// DDL
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    role TEXT CHECK( role IN ("ADMIN", "STAFF", "USER") ) 
);

CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT current_timestamp,
    difficulty INTEGER,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users (id)
);
`)


