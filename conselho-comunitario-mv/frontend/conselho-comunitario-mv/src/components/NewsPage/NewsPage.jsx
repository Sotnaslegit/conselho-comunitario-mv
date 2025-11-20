const NewsPage = () => {
    return (
        <>
            <h1 class="text-center primary-font fw-bold">NOTÍCIAS</h1>
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
        </>
    )
}

export default NewsPage