import express from 'express'
import * as controllerUser from '../controllers/controllerUser.js'

export const userRouter = express()

userRouter.get('/usuarios/:id', controllerUser.getById)

userRouter.get('/usuarios', controllerUser.getAll)

userRouter.post('/usuarios', controllerUser.postUser)

userRouter.delete('/usuarios/:id', controllerUser.deleteUser)

userRouter.put('/usuarios/:id', controllerUser.atualizaUser)

userRouter.post('/login', controllerUser.loginUser)