import express from 'express'
import * as controllerProject from '../controllers/controllerProject.js'

export const projectRouter = express()

projectRouter.get('/projects', controllerProject.getProject)

projectRouter.get('/projects/:id', controllerProject.getIdProject)

projectRouter.post('/projects', controllerProject.postProject)

projectRouter.put('/projects/:id', controllerProject.putProject)

projectRouter.delete('/projects/:id', controllerProject.deleteProject)


projectRouter.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query(
            'DELETE FROM projects WHERE id_projects = ?',
            [id] 
        );
    } catch {
        res.status(500).json({ error: 'Erro no servidor ao deletar projeto' });
        console.error('Erro ao deletar projeto:', err)
    }
});

// projectRouter.put('/projects/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const { body } = req
    
//         const [results] = await db.query(
//             'UPDATE projects SET `nome` = ?, `description` = ? WHERE id_projects = ?', [body.nome, body.description, id]
//         );
//         res.status(200).send('Projeto atualizado', results)
//     } catch (error) {
//         console.log(error)
//     };
//   });

// //
// DELETE - deletar projetos
