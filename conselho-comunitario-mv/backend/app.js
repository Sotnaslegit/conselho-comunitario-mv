import express from 'express'
import cors from 'cors'
import { userRouter } from './src/router/rotaUser.js'
import { newsRouter } from './src/router/rotaNews.js'
import { projectRouter } from './src/router/rotaProject.js'
const PORT = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(newsRouter)
app.use(projectRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});