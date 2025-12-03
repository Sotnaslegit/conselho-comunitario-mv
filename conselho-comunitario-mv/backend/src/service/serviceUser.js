import { db } from "../config/db.js";

export const getById = async (id) => {
    const [results] = await db.query(
        "SELECT * FROM user WHERE id_user=?",
        id
    );
    
    return results
}

export const getAll = async()=>{
    const [results] = await db.query(
        "SELECT * FROM user"
    )
    return results
}

export const postUser = async (body) => {
    const [results] = await db.query(
        "INSERT INTO `user`(`name`, `password`) VALUES(?,?)",
        [body.name, body.password]
    );
    
    return results
}

export const deleteUser = async (id)=>{
    try {    
        const [results] = await db.query(
            "DELETE FROM user WHERE id_user=?",
            id
        )

        return 
    } catch (error) {
        return error
    }

}

export const loginUser = async (body)=>{
    try {
        const { body } = req;
    
        const [usuario] = await db.query(
          "Select * from user WHERE name=? and password=?",
          [body.name, body.password]
        );
    
        if (usuario.length > 0) {
          return res.status(200).json({
            message: "Usuario logado",
            dados: usuario,
          });
        } else {
          return res.status(404).send("Nome ou senha errados!");
        }
      } catch (error) {
        console.log(error);
      }
}