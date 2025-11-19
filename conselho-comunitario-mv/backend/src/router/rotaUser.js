import express from 'express'
import {db} from '../config/db.js'

export const userRouter = express()

userRouter.get("/usuarios", async (req, res) => {
    const [results] = await pool.query("SELECT * FROM user");
    res.send(results);
  });