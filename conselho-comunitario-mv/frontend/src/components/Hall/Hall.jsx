import salao from '../../assets/salao.jpg'
import palco from '../../assets/palco.jpg'
import cooler from '../../assets/cooler.jpg'
import cozinha from '../../assets/cozinha.jpg'
import fogaoALenha from '../../assets/fogaoalenha.jpg'
import fogao from '../../assets/fogao.jpg'
import banheiro1 from '../../assets/banheiro1.jpg'
import banheiro2 from '../../assets/banheiro2.jpg'

const Hall = () => {
    return (
        <>

            <h1 className="primary-font">SALÃO</h1>

            <div className="container">
                <div className="mb-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={salao} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={palco} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={cooler} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={cozinha} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={fogaoALenha} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={fogao} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={banheiro1} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={banheiro2} className="d-block w-100" alt="" />
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

                    <p className="mt-5 secondary-font'">
                        Espaço amplo e climatizado, ideal para aniversários, casamentos, formaturas e eventos corporativos.
                        Capacidade para até 100 pessoas, com cozinha equipada, banheiros, estacionamento e área externa.
                        Local de fácil acesso e seguro.
                    </p>
                    <p className='secondary-font text-center'>
                        <strong>Informações e reservas pelo WhatsApp:</strong><a href="https://wa.me/5548985015251?text=Ol%C3%A1!%20Vim%20pelo%20site%20CCMV%20e%20gostaria%20de%20exclarecer%20algumas%20d%C3%BAvidas..."> (48) 98501-5251</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hall