import express from 'express'
import { db } from '../config/db.js'

export const projectRouter = express.Router()

//GET
projectRouter.get('/projects', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM project');
        console.log(rows);
        
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'erro no servidor' })
    }
});
//GET POR ID
projectRouter.get('/projects/:id', async (req, res) => {
    const {id} = req.params
    try {
        const [rows] = await db.query('SELECT * FROM project WHERE id_project = ?', id);
        console.log(rows);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'erro no servidor' })
    }
});

// POST - adicionar novos projetos
projectRouter.post('/projects', async (req, res) => {
    const { nome, description } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO projects (nome, description) VALUES (?, ?)',
            [nome, description]
        );
        console.log('Projeto realizado com sucesso:', { id: result.insertId, nome, description });
        res.status(201).json({ id: result.insertId, nome, description });
    } catch (err) {
        console.error('Erro ao inserir projeto:', err);
        res.status(500).json({ error: 'Erro no servidor ao inserir projeto' });
    }
});

//put - atualizar projetos

projectRouter.put('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req
    
        const [results] = await db.query(
            'UPDATE projects SET `nome` = ?, `description` = ? WHERE id_projects = ?', [body.nome, body.description, id]
        );
        res.status(200).send('Projeto atualizado', results)
    } catch (error) {
        console.log(error)
    };
  });

//
// DELETE - deletar projetos
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
