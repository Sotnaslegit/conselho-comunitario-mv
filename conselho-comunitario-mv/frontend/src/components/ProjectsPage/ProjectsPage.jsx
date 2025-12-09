import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ProjectsPage.css';
import instagram from '../../assets/icons/instagram.svg';
import call from '../../assets/icons/call.svg';

// MODAL ADD
function AddProjectModal(props) {
    const { onAdd } = props;

    const [name, setName] = useState("");
    const [days, setDays] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [location, setLocation] = useState("");
    const [publico, setPublic] = useState("");
    const [payment, setPayment] = useState("");
    const [responsible, setResponsible] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");

    const postar = async () => {
        try {
            await fetch(`http://localhost:3000/projects`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name, days, start, end, location, publico, payment, responsible,
                    phone, instagram
                })
            });

            onAdd();   // atualiza lista
            props.onHide(); // fecha modal

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton><Modal.Title>Adicionar Projeto</Modal.Title></Modal.Header>

            <Modal.Body>
                <input className="form-control my-2" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                <input className="form-control my-2" placeholder="Dias" onChange={(e) => setDays(e.target.value)} />
                <input className="form-control my-2" placeholder="Início" onChange={(e) => setStart(e.target.value)} />
                <input className="form-control my-2" placeholder="Fim" onChange={(e) => setEnd(e.target.value)} />
                <input className="form-control my-2" placeholder="Local" onChange={(e) => setLocation(e.target.value)} />
                <input className="form-control my-2" placeholder="Público" onChange={(e) => setPublic(e.target.value)} />
                <input className="form-control my-2" placeholder="Preço" onChange={(e) => setPayment(e.target.value)} />
                <input className="form-control my-2" placeholder="Responsável" onChange={(e) => setResponsible(e.target.value)} />
                <input className="form-control my-2" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} />
                <input className="form-control my-2" placeholder="Instagram" onChange={(e) => setInstagram(e.target.value)} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={postar}>Salvar</Button>
            </Modal.Footer>
        </Modal>
    );
}

// MODAL EDIT
function EditProjectModal(props) {
    const { project, onEdit } = props;

    const [form, setForm] = useState({
        name: "", days: "", start: "", end: "", location: "",
        public: "", payment: "", responsible: "", phone: "", instagram: ""
    });

    useEffect(() => {
        if (project) setForm(project);
    }, [project]);

    const editar = async () => {
        try {
            const res = await fetch(`http://localhost:3000/projects`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            onEdit(data);
            props.onHide();

        } catch (error) {
            console.log(error);
        }
    };

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton><Modal.Title>Editar Projeto</Modal.Title></Modal.Header>

            <Modal.Body>
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        className="form-control my-2"
                        name={key}
                        value={form[key] || ""}
                        onChange={handleChange}
                    />
                ))}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={editar}>Salvar</Button>
            </Modal.Footer>
        </Modal>
    );
}

const ProjectsPage = () => {

    const [card, setCard] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);

    async function fetchData() {
        try {
            const res = await fetch("http://localhost:3000/projects");
            const data = await res.json();
            setCard(data);
        } catch (err) {
            console.log(err);
        }
    }

    const deletar = async (id_project) => {
        try {
            await fetch(`http://localhost:3000/projects/${id_project}`, {
                method: "DELETE"
            });

            fetchData(); // recarrega lista

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        if (localStorage.getItem("usuario")) {
            setIsAdmin(true);
        }
    }, []);

    return (
        <>
            <h1 className="primary-font">PROJETOS</h1>

            <div className="container mt-4">

                {isAdmin && (
                    <div className="container d-flex justify-content-center mb-3">
                        <button className="btn btn-primary fs-5" onClick={() => setShowAdd(true)}>
                            + Adicionar
                        </button>
                    </div>
                )}

                <div className="row d-flex justify-content-between">
                    {card.map((item) => (
                        <div className="card mb-5" key={item.id_project}>
                            <h2 className="primary-font">{item.name}</h2>

                            <p><b>Dias:</b> {item.days}, {item.start}h às {item.end}h</p>
                            <p><b>Local:</b> {item.location}</p>
                            {item.public && <p><b>Público:</b> {item.public}</p>}
                            <p><b>Preço:</b> {item.payment}</p>
                            <p><b>Responsável:</b> {item.responsible}</p>

                            <p><b>Contatos:</b></p>
                            {item.phone && <p><img src={call} /> {item.phone}</p>}
                            {item.instagram && <p><img src={instagram} /> {item.instagram}</p>}

                            {isAdmin && (
                                <div className="d-flex justify-content-between mt-4">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            setSelectedProject(item);
                                            setShowEdit(true);
                                        }}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deletar(item.id_project)}
                                    >
                                        Deletar
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL ADD */}
            <AddProjectModal
                show={showAdd}
                onHide={() => setShowAdd(false)}
                onAdd={() => fetchData()}
            />

            {/* MODAL EDIT */}
            <EditProjectModal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                project={selectedProject}
                onEdit={(editado) =>
                    setCard(card.map(item =>
                        item.id_project === editado.id_project ? editado : item
                    ))
                }
            />
        </>
    );
};

export default ProjectsPage;
