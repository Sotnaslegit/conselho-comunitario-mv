import { useEffect, useState } from "react"
import './ProjectsPage.css'
import instagram from '../../assets/icons/instagram.svg'
import call from '../../assets/icons/call.svg'

const ProjectsPage = () => {
    const [card, setCard] = useState([])

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
    }, [])
    return (
        <>
            <h1 className="primary-font">PROJETOS</h1>
            <div className="container mt-4">
                <div className="row d-flex justify-content-between">
                    {card.map((item, index) => (
                        <div className="card mb-5" key={index}>
                            <h2 className="primary-font">{item.nome}</h2>
                            <p className="secondary-font"><span>Dias: </span>{item.dias}, {item.hora_inicio}h às {item.hora_fim}h</p>
                            <p className="secondary-font"><span>Local: </span>{item.localizacao}</p>
                            <p className="secondary-font"><span>Público: </span>{item.publico_alvo}</p>
                            <p className="secondary-font"><span>Preço: </span>{item.forma_pagamento}</p>
                            <p className="secondary-font"><span>Responsável: </span>{item.responsavel}</p>
                            <p className="secondary-font"><span>Contatos:</span></p>
                            <p className="secondary-font"><img src={call} />{item.numero} </p>
                            <p className="secondary-font"><img src={instagram} />{item.instagram}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage