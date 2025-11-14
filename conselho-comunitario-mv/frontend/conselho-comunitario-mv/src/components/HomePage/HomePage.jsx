const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img className="imgLogo" src="assets/imgs/logo-texto.png" width="365" alt="" />
                </div>
            </div>

            <div className="container">
                <div className="mb-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/imgs/parquinho.JPG" className="d-block w-100" alt="https://placehold.co/600x400" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/imgs/campo-cima.JPG" className="d-block w-100" alt="https://placehold.co/600x400" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/imgs/quadra.JPG" className="d-block w-100" alt="https://placehold.co/600x400" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="mb-5">
                    <h6 className="primary-font text-center fw-bold">Aqui você vai encontrar:</h6>
                    <p className="text-center secondary-font" />
                    <br />
                    Projetos gratuitos ou a preço popular — pra toda comunidade!
                    Notícias sobre bairro
                    <br /><br />
                    Uma página "Sobre Nós", contando a história incrível do nosso bairro Monte Verde
                    <br /><br />
                    Tudo isso feito com muito carinho pra você, morador ou visitante!
                <p/>
            </div>
        </div >
        </>
    )
}

export default HomePage