import logoTexto from '../../assets/logo-texto.png'

const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img className="imgLogo" src={logoTexto} width="365" alt="" />
                </div>
            </div>

            <div className="container text-center">
                <div className="mb-5">
                    <h3 className='primary-font'>Aqui você vai encontrar:</h3>
                    <p className='secondary-font'>
                        <br />
                        Projetos gratuitos ou a preço popular — pra toda comunidade!
                        Notícias sobre bairro
                        <br /><br />
                        Uma página "Sobre Nós", contando a história incrível do nosso bairro Monte Verde
                        <br /><br />
                        Tudo isso feito com muito carinho pra você, morador ou visitante!
                    </p>
                </div>
            </div >
        </>
    )
}

export default HomePage