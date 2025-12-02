import * as userService from "../service/serviceUser.js"
import express from "express"


export const getByIdC = (req, res) => {
    try {
        const id = parseInt(req, params.id)
        const results = userService.getById(id)
        res.json(results)
    } catch (error) {
        console.log(error);
    }
}

// export const getAll = (req, res) => {
//     const results = userService.getAll()
//     res.json(results)
// }