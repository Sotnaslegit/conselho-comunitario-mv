import express from 'express'
import * as controllerNews from '../controllers/controllerNews.js'

export const newsRouter = express();

newsRouter.get('/news', controllerNews.paginacaoNews)

newsRouter.get('/news/:id', controllerNews.getIdNews)

newsRouter.post('/news', controllerNews.postNews)

newsRouter.put('/news/:id', controllerNews.atualizaNews)

newsRouter.delete('/news/:id', controllerNews.deleteNews)