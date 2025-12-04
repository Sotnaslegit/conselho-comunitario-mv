import { useEffect, useState } from "react"
import './NewsPage.css'

const NewsPage = () => {
    const [card, setCard] = useState([])

    async function fetchData() {
        try {
            const res = await fetch('http://localhost:3000/news?pagina=1&quantidade=20')
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
            <h1 class="text-center primary-font mb-4">NOTÍCIAS</h1>
            <div class="container">
                <div className="row d-flex justify-content-between">
                    {card.map((item, index) => (
                        <div className="cardNews mb-5" key={index}>
                            <h2 className="primary-font">{item.title}</h2>
                            <p className="secondary-font">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewsPage