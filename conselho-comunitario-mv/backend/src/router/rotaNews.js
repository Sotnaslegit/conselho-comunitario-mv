import { router } from "express";
import pool from "../config/db.js";

const rotaNews = router();

rotaNews.get("/", async (req, res) => {
    const [results] = await pool.query("SELECT * FROM noticias");
    return res.status(200).json(results);
  });
  
  rotaNews.get ("/id:") , async (req, res) =>{
    const [results] = await pool.query( 
        "SELECT * FROM  noticias WHERE id = ? ",
            [req.params.id]
    );
    res.send(results)
   }
app.post("/", async (req, res) => {

  try {
    const { body } = req
    const [results] = await pool.query(
      "INSERT INTO usuario (nome, idade) VALUES (?,?)",
      [body.nome, body.idade]
    );

    const [usuarioCriado] = await pool.query(
      "Select * From usuario where id=?",
      results.insertId
    )

    return res.status(201).json(usuarioCriado)

  } catch (error) {
    console.log(error)
  }
});

login


export default rotaNews;

