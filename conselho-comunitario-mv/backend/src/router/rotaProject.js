import express from 'express'
import * as controllerProject from '../controllers/controllerProject.js'

export const projectRouter = express()

projectRouter.get('/projects', controllerProject.getProject)

projectRouter.get('/projects/:id', controllerProject.getIdProject)

projectRouter.post('/projects', controllerProject.postProject)

projectRouter.put('/projects/:id', controllerProject.putProject)

projectRouter.delete('/projects/:id', controllerProject.deleteProject)