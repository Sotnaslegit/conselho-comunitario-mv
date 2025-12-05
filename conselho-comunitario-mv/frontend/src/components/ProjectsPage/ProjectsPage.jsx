import { useEffect, useState } from "react"
import './ProjectsPage.css'
import instagram from '../../assets/icons/instagram.svg'
import call from '../../assets/icons/call.svg'

const ProjectsPage = () => {
    const [card, setCard] = useState([])

    function check(instagramig) {
        if (instagramig) {
            <p className="secondary-font"><img src={instagram} />{instagramig}</p>
        }
    }

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
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage