import * as serviceUser from "../service/serviceUser.js"

export const getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await serviceUser.getById(id)
        
        res.json(results)
    } catch (error) {
        console.log(error);
    }
}

export const getAll = async(req, res) => {
    const results = await serviceUser.getAll()
    res.json(results)
}

export const postUser = async (req, res) => {
    try {
        const body = parseInt(req.body)
        await serviceUser.postUser(body)
        
        res.send("admin criado")
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        await serviceUser.deleteUser(id)
        
        res.send("admin deletado")
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const body = parseInt(req.body)
        const results = await serviceUser.loginUser(body)
        
        res.json()
    } catch (error) {
        console.log(error);
    }
}
