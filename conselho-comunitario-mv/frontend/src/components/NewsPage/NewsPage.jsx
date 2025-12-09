import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './NewsPage.css';

// MODAL PARA ADICIONAR
function PostModal(props) {
    const { onAdd } = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const postar = async () => {
        try {
            const res = await fetch(`http://localhost:3000/news`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description })
            });

            const data = await res.json();
            onAdd(); // atualiza lista
            props.onHide(); // fecha o modal

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Notícia</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>Título</h4>
                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />

                <h4 className="mt-3">Descrição</h4>
                <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={postar}>Postar</Button>
            </Modal.Footer>
        </Modal>
    );
}

// MODAL PARA EDITAR
function EditModal(props) {
    const { news, onEdit } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (news) {
            setTitle(news.title);
            setDescription(news.description);
        }
    }, [news]);

    const editar = async () => {
        try {
            const res = await fetch(`http://localhost:3000/news`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: news.id,
                    title,
                    description
                })
            });

            const data = await res.json();
            onEdit(data); // atualiza lista
            props.onHide(); // fecha o modal

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Notícia</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>Título</h4>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />

                <h4 className="mt-3">Descrição</h4>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={editar}>Salvar</Button>
            </Modal.Footer>
        </Modal>
    );
}

const NewsPage = () => {
    const [card, setCard] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    const [pagina, setPagina] = useState(1);
    const quantidade = 4;

    // estados dos modais
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:3000/news?pagina=${pagina}&quantidade=${quantidade}`);
            const data = await res.json();
            setCard(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletar = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/news/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();
            fetchData()
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        if (localStorage.getItem("usuario") !== null) {
            setIsAdmin(true);
        }
    }, [pagina]);

    return (
        <>
            <h1 className="text-center primary-font mb-4">NOTÍCIAS</h1>

            <div className="container">

                {isAdmin && (
                    <div className="container d-flex justify-content-center mb-3">
                        <Button variant="primary fs-5" onClick={() => setShowAdd(true)}>
                           + Adicionar
                        </Button>
                    </div>
                )}

                <div className="row d-flex justify-content-between">
                    {card.map((item) => (
                        <div className="cardNews mb-5" key={item.id}>
                            <h2 className="primary-font">{item.title}</h2>
                            <p className="secondary-font">{item.description}</p>

                            {isAdmin && (
                                <div className="d-flex justify-content-between mt-4">

                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            setSelectedNews(item);
                                            setShowEdit(true);
                                        }}
                                    >
                                        Editar
                                    </button>

                                    <button className="btn btn-danger" onClick={() => deletar(item.id_news)}>Deletar</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn pagination"
                        disabled={pagina <= 1}
                        onClick={() => setPagina(pagina - 1)}
                    >
                        Anterior
                    </button>

                    <button
                        className="btn pagination"
                        disabled={card.length < quantidade}
                        onClick={() => setPagina(pagina + 1)}
                    >
                        Próxima
                    </button>
                </div>
            </div>

            {/* MODAL DE ADICIONAR */}
            <PostModal
                show={showAdd}
                onHide={() => setShowAdd(false)}
                onAdd={() => fetchData()}
            />

            {/* MODAL DE EDITAR */}
            <EditModal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                news={selectedNews}
                onEdit={(editado) =>
                    setCard(card.map(item => item.id === editado.id ? editado : item))
                }
            />
        </>
    );
};

export default NewsPage;
