import * as serviceNews from "../service/serviceNews.js"

export const paginacaoNews = async (req, res) => {
    try {
        const {query} = req
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
        const results = await serviceNews.getIdNews(id)

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

export const atualizaNews = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const results = await serviceNews.atualizaNews(id, body)

        res.json(results)
    } catch (error) {
        console.log(error);
    }
}
export const deleteNews = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await serviceNews.deleteNews(id)

        res.json(results)
    } catch (error) {
        console.log(error);
    }
}