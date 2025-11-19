import './Hall.css'

const Hall = () => {
    return (
        <>
            <div class="container">
                <h1 class="mb-4 primary-font fw-bold">SALÃO</h1>

                <div class="container">
                    <div class="mb-5">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="../assets/imgs/salao.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/palco.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/cooler.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/cozinha.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/fogaoalenha.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/fogao.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/banheiro1.jpg" class="d-block w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/imgs/banheiro2.jpg" class="d-block w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p class=" mb-2 mt-5 secondary-font'">
                            Espaço amplo e climatizado, ideal para aniversários, casamentos, formaturas e eventos corporativos.
                            Capacidade para até 100 pessoas, com cozinha equipada, banheiros, estacionamento e área externa.
                            Local de fácil acesso e seguro.
                        </p>
                        <p>
                            <strong>📞 Informações e reservas pelo WhatsApp:</strong> <a href="https://wa.me/5511912345678"
                                target="_blank">(11) 91234-5678</a>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hall