import './AdminPage.css'
import logoCCMV from '../../assets/icons/logoCCMV.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("usuario") == null) {
            navigate('/home')
        }
    }, [])
    return (
        <>
            <div className="container py-5">

                <img src={logoCCMV} alt="" />

                <header className="mb-5 text-center">
                    <h1 className="fw-bold">Painel Administrativo</h1>
                    <p className="text-muted fs-5">Logado como Admin.</p>
                </header>

            </div>

            <div className="modal fade" id="modalProjeto" tabindex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Novo Projeto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" for="nomeProjeto">Nome do Projeto:</label>
                                    <input type="text" id="nomeProjeto" name="nome" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="diasProjeto">Dias (Ex: Seg, Qua, Sex):</label>
                                    <input type="text" id="diasProjeto" name="dias" className="form-control" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" for="horaInicio">Hora de Início:</label>
                                        <input type="time" id="horaInicio" name="hora_inicio" className="form-control" />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" for="horaFim">Hora de Fim:</label>
                                        <input type="time" id="horaFim" name="hora_fim" className="form-control" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="localizacaoProjeto">Localização:</label>
                                    <input type="text" id="localizacaoProjeto" name="localizacao" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="publicoAlvo">Público Alvo:</label>
                                    <input type="text" id="publicoAlvo" name="publico_alvo" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="formaPagamento">Forma de Pagamento:</label>
                                    <select id="formaPagamento" name="forma_pagamento" className="form-select">
                                        <option value="">Selecione a Forma</option>
                                        <option value="Gratuito">Gratuito</option>
                                        <option value="PIX">PIX</option>
                                        <option value="Cartao">Cartão</option>
                                        <option value="Boleto">Boleto</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="responsavelProjeto">Nome do Responsável:</label>
                                    <input type="text" id="responsavelProjeto" name="responsavel" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="numeroResponsavel">Número de Contato (WhatsApp):</label>
                                    <input type="tel" id="numeroResponsavel" name="numero" className="form-control" placeholder="(xx) xxxxx-xxxx" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="instagramProjeto">Instagram (Usuário ou Link):</label>
                                    <input type="text" id="instagramProjeto" name="instagram" className="form-control" placeholder="@usuario_projeto" />
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" form="formProjeto" className="btn btn-primary">Salvar Projeto</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalNoticia" tabindex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Nova Notícia</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" for="tituloNoticia">Título:</label>
                                    <input type="text" id="tituloNoticia" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" for="descricaoNoticia">Descrição:</label>
                                    <textarea id="descricaoNoticia" className="form-control" rows="3"></textarea>
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button className="btn btn-success">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage