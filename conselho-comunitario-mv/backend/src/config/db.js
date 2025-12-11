import mysql from "mysql2/promise"

export const db = await mysql.createConnection({
    host:"localhost",
    port:"5000",
    user:"root",
    password:"saiporra",
    database:"db_mv"
})