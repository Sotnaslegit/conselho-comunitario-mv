import { useEffect, useState } from "react"
import './NewsPage.css'

const NewsPage = () => {
    const [card, setCard] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    const [pagina, setPagina] = useState(1);
    const quantidade = 4;

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:3000/news?pagina=${pagina}&quantidade=${quantidade}`);
            const data = await res.json();
            setCard(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
        if (localStorage.getItem("usuario") !== null) {
            setIsAdmin(true)
        }
    }, [pagina])
    return (
        <>
            <h1 className="text-center primary-font mb-4">NOTÍCIAS</h1>
            <div className="container">
                {
                    isAdmin && (
                        <div className="container d-flex justify-content-center mb-3">
                            <button className="btn btn-primary fs-5">+ Adicionar</button>
                        </div>
                    )
                }
                <div className="row d-flex justify-content-between">
                    {card.map((item, index) => {
                        return (
                            <div className="cardNews mb-5" key={index}>
                                <h2 className="primary-font">{item.title}</h2>
                                <p className="secondary-font">{item.description}</p>
                                {
                                    isAdmin && (
                                        <div className="d-flex justify-content-between mt-4">
                                            <button className="btn btn-danger">Deletar</button>
                                            <button className="btn btn-warning">Editar</button>
                                        </div>
                                    )
                                }
                            </div>

                        )
                    })}
                </div>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn pagination"
                        disabled={pagina <= 1}
                        onClick={() => setPagina(pagina - 1)}
                    >
                        Anterior
                    </button>

                    <button className="btn pagination" disabled={card.length < quantidade} onClick={() => setPagina(pagina + 1)}>
                        Próxima
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewsPage