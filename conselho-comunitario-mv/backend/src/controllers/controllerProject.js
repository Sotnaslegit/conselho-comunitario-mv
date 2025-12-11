import * as serviceProject from "../service/serviceProject.js";
import { db } from "../config/db.js";

export const getProject = async (req, res) => {
    try {
        const results = await serviceProject.getProject();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar projetos" });
    }
};

export const getIdProject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const results = await serviceProject.getIdProject(id);
        if (!results.length) return res.status(404).json({ error: "Projeto não encontrado" });
        res.json(results[0]);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o projeto" });
    }
};

export const postProject = async (req, res) => {
    try {
        const body = req.body;
        const newProject = await serviceProject.postProject(body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar o projeto" });
    }
};

export const putProject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const body = req.body;
        await serviceProject.putProject(id, body);
        const [updated] = await db.query("SELECT * FROM project WHERE id_project = ?", [id]);
        if (!updated.length) return res.status(404).json({ error: "Projeto não encontrado" });
        res.json(updated[0]);
    } catch (error) {
        res.status(500).json({ error: "Erro ao editar o projeto" });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await serviceProject.deleteProject(id);
        res.json({ message: "Projeto deletado" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar o projeto" });
    }
};
