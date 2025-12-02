import express from "express"
import { db } from "../config/db.js";

export const getById = async (id) => {
    const [results] = await db.query(
        "SELECT * FROM user WHERE id_user=?",
        id
    );
    return results
}

// export const getAll = async()=>{
//     const [results] = await db.query(
//         "SELECT * FROM user"
//     )
//     return results
// }