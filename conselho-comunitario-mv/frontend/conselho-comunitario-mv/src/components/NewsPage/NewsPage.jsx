import { useEffect, useState } from "react"

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
            <h1 class="text-center">NOTÍCIAS</h1>
            <div class="container d-flex justify-content-center align-items-center">
                {card.map((item, index) => (
                    <div className="card" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewsPage