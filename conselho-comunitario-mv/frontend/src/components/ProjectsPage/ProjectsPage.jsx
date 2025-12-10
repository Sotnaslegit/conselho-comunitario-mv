import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ProjectsPage.css';
import instagram from '../../assets/icons/instagram.svg';
import call from '../../assets/icons/call.svg';

const ProjectsPage = () => {

    const [card, setCard] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Fetch inicial
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then(res => res.json())
            .then(data => setCard(data))
            .catch(err => console.log(err));

        if (localStorage.getItem("usuario")) setIsAdmin(true);
    }, []);

    // ================= MODAL ADD =================
    function AddProjectModal({ onAdd, ...props }) {
        const [form, setForm] = useState({
            name: "", days: "", start: "", end: "", location: "",
            public: "", payment: "", responsible: "", phone: "", instagram: ""
        });

        const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

        const postar = async () => {
            try {
                const res = await fetch("http://localhost:3000/projects", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
                const newProject = await res.json();
                onAdd(newProject); // adiciona ao estado
                props.onHide();    // fecha modal
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <Modal {...props} size="lg" centered>
                <Modal.Header closeButton><Modal.Title>Adicionar Projeto</Modal.Title></Modal.Header>
                <Modal.Body>
                    {Object.keys(form).map(key => (
                        <input
                            key={key}
                            className="form-control my-2"
                            name={key}
                            value={form[key]}
                            placeholder={key}
                            onChange={handleChange}
                        />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={postar}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    // ================= MODAL EDIT =================
    function EditProjectModal({ project, onEdit, ...props }) {
        const [form, setForm] = useState({});

        useEffect(() => {
            if (project) setForm(project);
        }, [project]);

        const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

        const editar = async () => {
            try {
                const res = await fetch(`http://localhost:3000/projects/${form.id_project}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
                const updatedProject = await res.json();
                onEdit(updatedProject); // atualiza lista
                props.onHide();         // fecha modal
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <Modal {...props} size="lg" centered>
                <Modal.Header closeButton><Modal.Title>Editar Projeto</Modal.Title></Modal.Header>
                <Modal.Body>
                    {Object.keys(form).map(key => (
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

    // ================= DELETE =================
    const deletar = async (id_project) => {
        try {
            await fetch(`http://localhost:3000/projects/${id_project}`, { method: "DELETE" });
            setCard(prev => prev.filter(item => item.id_project !== id_project));
        } catch (error) {
            console.log(error);
        }
    };

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

            <AddProjectModal
                show={showAdd}
                onHide={() => setShowAdd(false)}
                onAdd={(newProject) => setCard(prev => [...prev, newProject])}
            />

            <EditProjectModal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                project={selectedProject}
                onEdit={(updatedProject) =>
                    setCard(prev => prev.map(item =>
                        item.id_project === updatedProject.id_project ? updatedProject : item
                    ))
                }
            />
        </>
    );
};

export default ProjectsPage;
