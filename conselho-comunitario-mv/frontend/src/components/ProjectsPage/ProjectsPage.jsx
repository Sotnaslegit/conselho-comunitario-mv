import { useEffect, useState } from "react"
import './ProjectsPage.css'
import instagram from '../../assets/icons/instagram.svg'
import call from '../../assets/icons/call.svg'

const ProjectsPage = () => {
    const [card, setCard] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)

    async function fetchData() {
        try {
            const res = await fetch('http://localhost:3000/projects')
            const data = await res.json()
            setCard(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        if (localStorage.getItem("usuario") !== null) {
            setIsAdmin(true)
        }
    }, [])
    return (
        <>
            <h1 className="primary-font">PROJETOS</h1>
            <div className="container mt-4">
                {
                    isAdmin && (
                        <div className="container d-flex justify-content-center mb-3">
                            <button className="btn btn-primary fs-5">+ Adicionar</button>
                        </div>
                    )
                }
                <div className="row d-flex justify-content-between">
                    {card.map((item, index) => (
                        <div className="card mb-5" key={index}>
                            <h2 className="primary-font">{item.name}</h2>
                            <p className="secondary-font"><span>Dias: </span>{item.days}, {item.start}h às {item.end}h</p>
                            <p className="secondary-font"><span>Local: </span>{item.location}</p>
                            {item.public && (
                                <p className="secondary-font"><span>Público: </span>{item.public}</p>
                            )}
                            <p className="secondary-font"><span>Preço: </span>{item.payment}</p>
                            <p className="secondary-font"><span>Responsável: </span>{item.responsible}</p>
                            <p className="secondary-font"><span>Contatos:</span></p>
                            {item.phone && (
                                <p className="secondary-font"><img src={call} />{item.phone} </p>
                            )}
                            {item.instagram && (
                                <p className="secondary-font"><img src={instagram} /> {item.instagram}</p>
                            )}
                            {
                                isAdmin && (
                                    <div className="d-flex justify-content-between mt-4">
                                        <button className="btn btn-danger">Deletar</button>
                                        <button className="btn btn-warning">Editar</button>
                                    </div>
                                )
                            }
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage