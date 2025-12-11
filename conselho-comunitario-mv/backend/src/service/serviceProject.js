import { db } from "../config/db.js";

export const getProject = async () => {
    const [results] = await db.query("SELECT * FROM project ORDER BY id_project DESC");
    return results;
};

export const getIdProject = async (id) => {
    const [results] = await db.query("SELECT * FROM project WHERE id_project = ?", [id]);
    return results;
};

export const postProject = async (body) => {
    const [result] = await db.query(
        "INSERT INTO project(name, days, start, end, location, public, payment, responsible, phone, instagram) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [body.name, body.days, body.start, body.end, body.location, body.public, body.payment, body.responsible, body.phone, body.instagram]
    );
    const [newProject] = await db.query("SELECT * FROM project WHERE id_project = ?", [result.insertId]);
    return newProject[0];
};

export const putProject = async (id, body) => {
    await db.query(
        "UPDATE project SET name = ?, days = ?, start = ?, end = ?, location = ?, public = ?, payment = ?, responsible = ?, phone = ?, instagram = ? WHERE id_project = ?",
        [body.name, body.days, body.start, body.end, body.location, body.public, body.payment, body.responsible, body.phone, body.instagram, id]
    );
};

export const deleteProject = async (id) => {
    await db.query("DELETE FROM project WHERE id_project = ?", [id]);
};
