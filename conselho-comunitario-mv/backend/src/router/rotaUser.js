import express from 'express'
import * as userController from '../controllers/controllerUser.js'

export const userRouter = express()

userRouter.get('/usuarios/:id', userController.getById)

userRouter.get('/usuarios', userController.getAll)

userRouter.post('/usuarios', userController.postUser)

userRouter.delete('/usuarios/:id', userController.deleteUser)

userRouter.post('/login', userController.loginUser)

userRouter.put('/usuarios/:id', userController.atualizaUser)




// userRouter.put('/usuarios/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const { body } = req

//     const [results] = await db.query(
//       'UPDATE user SET `name` = ?, `password` = ? WHERE id_user = ?', [body.name, body.password, id]
//     );
//     res.status(200).send('Usuario atualizado', results)
//   } catch (error) {
//     console.log(error)
//   };
// });

// userRouter.post("/login", async (req, res) => {
//   try {
//     const { body } = req;

//     const [usuario] = await db.query(
//       "Select * from user WHERE name=? and password=?",
//       [body.name, body.password]
//     );

//     if (usuario.length > 0) {
//       return res.status(200).json({
//         message: "Usuario logado",
//         dados: usuario,
//       });
//     } else {
//       return res.status(404).send("Nome ou senha errados!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });