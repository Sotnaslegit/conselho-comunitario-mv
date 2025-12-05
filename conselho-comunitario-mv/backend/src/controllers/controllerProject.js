import * as serviceProject from "../service/serviceProject.js"

export const getProject = async(req, res) => {
    try {
        const results = await serviceProject.getProject()
        res.json(results)
    } catch (error) {
        console.log(error);
        
    }
}

export const getIdProject = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await serviceProject.getIdProject(id)
        res.json(results)
    } catch (error) {
        console.log(error);
        
    }
}

export const postProject = async(req, res) => {
    try {
        const body = req
        await serviceProject.postProject(body)

        res.send("Projeto criado")
    } catch (error) {
        console.log(error);
        
    }
}

export const putProject = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const body = req
        await serviceProject.putProject(id, body)

        res.send("Projeto criado")
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteProject = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        await serviceProject.deleteProject(id)

        res.send("Projeto deletado")
    } catch (error) {
        console.log(error);
        
    }
}