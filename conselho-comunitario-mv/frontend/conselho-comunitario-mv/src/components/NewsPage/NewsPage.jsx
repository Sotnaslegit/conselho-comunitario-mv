const NewsPage = () => {
    return (
        <>
            <h1 class="text-center primary-font fw-bold">DESTAQUES</h1>
            <div class="container">
                <div class="mb-5">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../assets/imgs/campo.JPG" class="d-block w-100" alt="https://placehold.co/600x400" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/imgs/paisagem.JPG" class="d-block w-100" alt="https://placehold.co/600x400" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/imgs/queda-braco.JPG" class="d-block w-100" alt="https://placehold.co/600x400" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="noticias">
                <h2 class="text-center primary-font fw-bold">NOTÍCIAS</h2>
                <div class="container">
                    <div class="card">
                        <div class="card-container">
                            <div class="card-image">
                                <img width="100%" src="../assets/imgs/pesos.JPG" alt="" />
                            </div>
                            <div class="card-description">
                                <h3 class="text-center">Título</h3>
                                <p>Descrição</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="card">
                        <div class="card-container">
                            <div class="card-image">
                                <img width="100%" src="../assets/imgs/queda-braco.JPG" alt="" />
                            </div>
                            <div class="card-description">
                                <h3 class="text-center">Título</h3>
                                <p>Descrição</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="card">
                        <div class="card-container">
                            <div class="card-image">
                                <img width="100%" src="../assets/imgs/campo-lateral.JPG" alt="" />
                            </div>
                            <div class="card-description">
                                <h3 class="text-center">Título</h3>
                                <p>Descrição</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}