import express from 'express'
import { db } from '../config/db.js'

export const userRouter = express()

userRouter.get("/usuarios", async (req, res) => {
  const [results] = await db.query("SELECT * FROM user");
  res.send(results);
});

userRouter.get("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const [results] = await db.query(
    "SELECT * FROM user WHERE id_user=?",
    id
  );
  res.send(results);
});

userRouter.post("/usuarios", async (req, res) => {
  try {
    const { body } = req;
    const [results] = await db.query(
      "INSERT INTO user (name, password) VALUES (?,?)",
      [body.name, body.password]
    );

    const [usuarioCriado] = await db.query(
      "Select * from user WHERE id_user=?",
      results.insertId
    );

    return res.status(201).json(usuarioCriado);
  } catch (error) {
    console.log(error);
  }
});

userRouter.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query(
      "DELETE FROM user WHERE id_user=?",
      id
    );
    res.status(200).send("Usuário deletado!", results);
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { body } = req;

    const [usuario] = await db.query(
      "Select * from user WHERE name=? and password=?",
      [body.name, body.password]
    );

    if (usuario.length > 0) {
      return res.status(200).json({
        message: "Usuario logado",
        dados: usuario,
      });
    } else {
      return res.status(404).send("Nome ou senha errados!");
    }
  } catch (error) {
    console.log(error);
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
      const { id } = req.params
      const { body} = req
  
      const [results] = await pool.query(
          'UPDATE usuario SET `nome` = ?, `idade` = ? WHERE id = ?', [body.nome, body.idade, id]
      );
      res.status(200).send('Usuario atualizado', results)
  } catch (error) {
      console.log(error)
  };
});