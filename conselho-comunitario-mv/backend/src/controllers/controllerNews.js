import * as serviceNews from "../service/serviceNews.js"

export const paginacaoNews = async (req, res) => {
    try {
        const pagina = Number(query.pagina) - 1;
        const quantidade = Number(query.quantidade);
        const offset = pagina * quantidade;

        const result = await serviceNews.paginacaoNews(quantidade, offset)

        res.json(result)
    } catch (error) {
        console.log(error);
    }
}

export const getIdNews = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await serviceUser.getIdNews(id)

        res.json(results)
    } catch (error) {
        console.log(error);
    }
}

export const postNews = async (req, res) => {
    try {
        const body = req.body
        const results = await serviceNews.postNews(body)

        res.json(results)
    } catch (error) {
        console.log(error);
    }
}

export const deleteNews = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await serviceUser.deleteNews(id)

        res.json(results)
    } catch (error) {
        console.log(error);
    }
}