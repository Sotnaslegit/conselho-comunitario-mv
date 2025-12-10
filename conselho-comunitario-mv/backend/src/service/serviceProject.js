import { db } from "../config/db.js";

export const getProject = async () => {
    try {
        const [results] = await db.query('SELECT * FROM project')

        return results
    } catch (error) {
        console.log(error);
    }
}

export const getIdProject = async (id) => {
    try {
        const [results] = await db.query('SELECT * FROM project WHERE id_project = ?', id);
        return results
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'erro no servidor' })
    }
}

export const postProject = async (body) => {
    try {
        const [result] = await db.query(
            'INSERT INTO project(name, days, start, end, location, public, payment, responsible, phone, instagram) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [body.name, body.days, body.start, body.end, body.location, body.publico, body.payment, body.responsible, body.phone, body.instagram]
        );

        return ("Projeto criado")
    } catch (error) {
        console.log(error);
    }
}

export const putProject = async (id, body) => {
    try {
        const [results] = await db.query(
            'UPDATE project SET `name` = ?, `days`=?, `start`=?, `end`=?, `location`=?, public=?, payment=?, responsible=?, phone=?, instagram=? WHERE id_project = ?',
            [body.name, body.days, body.start, body.end, body.location, body.public, body.payment, body.responsible, body.phone, body.instagram, id]
        );
        return ("Projeto atualizado")
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM project WHERE id_projects = ?',
            id 
        );

        result ("Projeto deletado")
    } catch(error) {
        console.log(error);
    }
}   