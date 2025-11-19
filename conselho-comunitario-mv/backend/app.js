import express from 'express'
import cors from 'cors'
const PORT = 3000

const app = express()

app.use(express.json())

app.use(cors())

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});