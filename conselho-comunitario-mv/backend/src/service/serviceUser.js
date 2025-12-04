import { db } from "../config/db.js";


export const getAll = async()=>{
    const [results] = await db.query(
        "SELECT * FROM user"
    )
    return results
}

export const getById = async (id) => {
    const [results] = await db.query(
        "SELECT * FROM user WHERE id_user=?",
        id
    );
    
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

        return ("Usuario deletado")
    } catch (error) {
        return error
    }

}

export const loginUser = async (body)=>{
    try {    
        const [usuario] = await db.query(
          "SELECT * FROM user WHERE name=? and password=?",
          [body.name, body.password]
        );
        console.log(body);
        
        if (usuario.length > 0) {
          return ("Usuario logado");
        } else {
        
          return ("Nome ou senha incorretos!");
        }
      } catch (error) {
        console.log(error);
      }
}

export const atualizaUser = async (id, body) => {
  try {
    const [results] = await db.query(
      'UPDATE user SET `name` = ?, `password` = ? WHERE id_user = ?', [body.name, body.password, id]
    );
    return ('Usuario atualizado', results)
  } catch (error) {
    console.log(error)
  };
};