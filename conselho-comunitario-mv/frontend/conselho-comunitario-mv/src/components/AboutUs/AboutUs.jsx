import './AboutUs.css'
import ccmv from '../../assets/ccmv.JPG'
import alongamento from '../../assets/alongamento.JPG'
import campoCima from '../../assets/campo-cima.JPG'

const AboutUs = () => {
    return (
        <>
            <div className="container">
                <div className="col-md-12 text-center">
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
                    <div className="col-md-12 d-flex justify-content-center py-5">
                        <img src={ccmv} alt="foto bairro" className="img-fluid" width={650}/>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="col-md-12 text-center">

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
                            <img className="imagem grande img-fluid" src={campoCima} alt="imagem-grande" width={650} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs