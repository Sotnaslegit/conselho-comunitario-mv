import { db } from "../config/db.js";

export const paginacaoNews = async (quantidade, offset) => {
    try {
        const [results] = await db.query("SELECT * FROM news ORDER BY id_news DESC LIMIT ? OFFSET ?", [quantidade, offset]);
        return results
    } catch (error) {
        console.log(results);
    }
}

export const getIdNews = async (id) => {
    try {
        const [results] = await db.query(
            "SELECT * FROM user WHERE id_user=?",
            id
        );

        return results
    } catch (error) {
        console.log(error);
    }
}


export const postNews = async (body) => {
    try {
        if (body !== null) {
            const [results] = await db.query(
                "INSERT INTO news (title, description) VALUES (?,?)",
                [body.title, body.description]
            );

            return "Noticia criada"
        } else {
            return "Insira titulo e descrição "
        }

    } catch (error) {
        console.log(error);
    }
}

export const deleteNews = async (id) => {
    try {
        const [results] = await db.query(
            "DELETE FROM news WHERE id_news= ?",
            id
        );

        return ("Noticia deletado!");
    } catch (error) {
        console.log(error);
    }
}