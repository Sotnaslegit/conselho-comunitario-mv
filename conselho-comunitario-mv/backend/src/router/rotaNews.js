import express from "express";
import { db }from "../config/db.js";

export const newsRouter = express();

newsRouter.get("/news", async (req, res) => {
  try {
    const pagina = Number(query.pagina) - 1;
    const quantidade = Number(query.quantidade);
    const offset = pagina * quantidade;


    const [results] = await db.query("SELECT * FROM news LIMIT ? OFFSET ?", [quantidade, offset]);
    return res.status(200).json(results);

  } catch (error) {
    console.log(error);
    
  }
});

newsRouter.get("/news/:id"), async (req, res) => {
  const [results] = await db.query(
    "SELECT * FROM news WHERE id = ? ",
    [req.params.id]
  );
  res.send(results)
}

newsRouter.post("/news", async (req, res) => {
  try {
    const { body } = req
    const [results] = await db.query(
      "INSERT INTO news (title, description) VALUES (?,?)",
      [body.title, body.description]
    );

    const [newsCriado] = await db.query(
      "Select * From news where id=?",
      results.insertId
    )

    return res.status(201).json(newsCriado)

  } catch (error) {
    console.log(error)
  }
});