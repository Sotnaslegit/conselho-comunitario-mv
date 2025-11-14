import './BarNav.css'
import logoIcon from '../../assets/logo-icon.png'

const BarNav = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={logoIcon} alt="logo" width={"100px"} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="index.html"><img className="navIcon" src="assets/imgs/icons/home.svg" alt="" />INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="pages/sobre-nos.html"><img className="navIcon" src="assets/imgs/icons/sobre-nos.svg" alt="" />SOBRE NÓS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="pages/projetos.html"><img className="navIcon" src="assets/imgs/icons/fitness.svg" alt="" />PROJETOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="pages/salao.html"> <img className="navIcon" src="assets/imgs/icons/salao.svg" alt="" />SALÃO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="pages/noticias.html"><img className="navIcon" src="assets/imgs/icons/megaphone.svg" alt="" />NOTÍCIAS</a>
                            </li>
                        </ul>
                    </div>
                    <img width={"100px"} />
                </div>
            </nav>
        </>
    )
}

export default BarNav