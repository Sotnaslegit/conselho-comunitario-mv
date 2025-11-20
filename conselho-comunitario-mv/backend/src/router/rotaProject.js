const express = require('express');
const router = express.Router();
const db = require('../config/db');


//GET
router.get('/projects', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nome, description FROM projects');
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'erro no servidor' })
    }
});

// POST - adicionar novos projetos
router.post('/projects', async (req, res) => {
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

router.put('/projects/:id'), async (req, res) => {
    const { id } = req.params;
    const { nome, description } = req.body;

    try {
        const [result] = await db.query(
            'UPDATE projects SET nome = ?, description = ? WHERE id = ?',
            [nome, description, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Projeto não encontrado' });
        }

        res.json({ id, nome, description });
    } catch (err) {
        console.error('Erro ao atualizar projeto:', err);
        res.status(500).json({ error: 'Erro no servidor ao atualizar projeto' });
    }
}

//
// DELETE - deletar projetos
router.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query(
            'DELETE FROM projects WHERE id = ?',
            [id]
    
});