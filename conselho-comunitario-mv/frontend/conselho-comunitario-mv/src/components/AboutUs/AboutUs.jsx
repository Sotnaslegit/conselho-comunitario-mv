import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div className="container abtus">
                <div className="mb-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../assets/imgs/quadra-lateral.JPG" className="d-block w-100" alt="https://placehold.co/600x400"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/imgs/academia.JPG" className="d-block w-100" alt="https://placehold.co/600x400"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/imgs/alongamento.JPG" className="d-block w-100" alt="https://placehold.co/600x400"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sobre-nos">
                <div className="container">
                    <div className="col-md-12">
                        <h2 className="primary-font">SOBRE NÓS</h2>
                        <p className="secondary-font">Em 15/04/1981, o Centro Comunitário do Monte Verde é
                            fundado pelo morador Osni Ferreira. O projeto que nasceu
                            com o intuíto de auxiliar os moradores hoje conta com maisde 11 mil participantes e mais de 10
                            projetos
                            e
                            atividades.</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6  text-center">
                            <img src="../assets/imgs/ccmv.JPG" alt="foto bairro" className="img-fluid"/>
                        </div>
                        <div className="col-md-6  text-center">
                            <img src="../assets/imgs/alongamento.JPG" alt="foto osni" className="img-fluid"/>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="col-md-12">

                        <p className="secondary-font">Atualmente o projeto possui parcerias diversas buscando
                            atender o maior número de grupos - desde crianças até
                            idosos. Também dispomos de um amplo salão de eventos,
                            salas para atividades, quadras e campo de
                            futebol.
                        </p>
                    </div>

                    <div className="container-imagem">
                        <div className="container-fluid">
                            <div className="col-md-12 d-flex justify-content-center py-5">
                                <img className="imagem grande img-fluid" src="../assets/imgs/campo-cima.JPG" alt="imagem-grande"/>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default AboutUs