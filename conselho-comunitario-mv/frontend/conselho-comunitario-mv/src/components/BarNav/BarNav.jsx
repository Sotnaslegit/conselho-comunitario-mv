import { BrowserRouter, Route, Link } from "react-router-dom"
import './BarNav.css'
import logoIcon from '../../assets/logo-icon.png'

const BarNav = () => {

    return (
        <>
            <BrowserRouter>
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
                                    <Link to = '/HomePage'><img className="navIcon" src="assets/imgs/icons/home.svg" alt="" />INÍCIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = '/AboutUs'><img className="navIcon" src="assets/imgs/icons/sobre-nos.svg" alt="" />SOBRE NÓS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = '/ProjectsPage'><img className="navIcon" src="assets/imgs/icons/fitness.svg" alt="" />PROJETOS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Hall'> <img className="navIcon" src="assets/imgs/icons/salao.svg" alt="" />SALÃO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = '/NewsPage'><img className="navIcon" src="assets/imgs/icons/megaphone.svg" alt="" />NOTÍCIAS</Link>
                                </li>
                            </ul>
                        </div>
                        <img width={"100px"} />
                    </div>
                </nav>
            </BrowserRouter>
        </>
    )
}

export default BarNav