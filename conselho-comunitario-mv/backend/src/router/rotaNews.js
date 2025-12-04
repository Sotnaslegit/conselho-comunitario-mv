import express from 'express'
import * as controllerNews from '../controllers/controllerNews.js'

export const newsRouter = express();

userRouter.get('/news', controllerNews.paginacaoNews)

userRouter.get('/news/:id', controllerNews.getIdNews)

userRouter.post('/news', controllerNews.postNews)

userRouter.delete('/news/:id', controllerNews.deleteNews)


// newsRouter.delete("/news/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [results] = await pool.query(
//       "DELETE FROM news WHERE  id_news= ?",
//       id
//     );
//     res.status(200).send("Noticia deletado!", results);
//   } catch (error) {
//     console.log(error);
//   }
// });

// newsRouter.post("/news", async (req, res) => {
//   try {
//     const { body } = req
//     const [results] = await db.query(
//       "INSERT INTO news (title, description) VALUES (?,?)",
//       [body.title, body.description]
//     );

//     const [newsCriado] = await db.query(
//       "Select * From news where id_news=?",
//       results.insertId
//     )

//     return res.status(201).json(newsCriado)

//   } catch (error) {
//     console.log(error)
//   }
// });

// newsRouter.get("/news", async (req, res) => {
//   try {
//     const pagina = Number(query.pagina) - 1;
//     const quantidade = Number(query.quantidade);
//     const offset = pagina * quantidade;

//     const [results] = await db.query("SELECT * FROM news LIMIT ? OFFSET ?", [quantidade, offset]);
//     return res.status(200).json(results);

//   } catch (error) {
//     console.log(error);

//   }
// });

// newsRouter.get("/news/:id"), async (req, res) => {
//   try {
//     const [results] = await db.query(
//       "SELECT * FROM news WHERE id_news = ? ",
//       [req.params.id]
//     );
//     res.send(results)
//   } catch (error) {
//     console.log(error);

//   }
// }



