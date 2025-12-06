import express from 'express'
import cors from 'cors'
import { userRouter } from './src/router/rotaUser.js'
import { newsRouter } from './src/router/rotaNews.js'
import { projectRouter } from './src/router/rotaProject.js'
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use(projectRouter)
app.use(userRouter)
app.use(newsRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});