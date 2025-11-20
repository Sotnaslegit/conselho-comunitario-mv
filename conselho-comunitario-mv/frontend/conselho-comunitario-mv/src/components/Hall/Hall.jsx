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
            <div className="container text-center">
                <h1 className="mb-4 primary-font fw-bold">SALÃO</h1>

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
                                            <img src={banheiro2}className="d-block w-100" alt="" />
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

                        <p className=" mb-2 mt-5 secondary-font'">
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