import { Link } from "react-router-dom"
import './BarNav.css'
import logoIcon from '../../assets/logo-icon.png'
import home from '../../assets/icons/home.svg'
import sobreNos from '../../assets/icons/sobre-nos.svg'
import fitness from '../../assets/icons/fitness.svg'
import salao from '../../assets/icons/salao.svg'
import megaphone from '../../assets/icons/megaphone.svg'

const BarNav = () => {

    return (
        <>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img src={logoIcon} alt="logo" width={"100px"} />

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to = '/home'><img className="navIcon" src={home} alt="" />INÍCIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = '/aboutus'><img className="navIcon" src={sobreNos} alt="" />SOBRE NÓS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = '/news'><img className="navIcon" src={megaphone} alt="" />NOTÍCIAS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = '/projects'><img className="navIcon" src={fitness} alt="" />PROJETOS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/hall'> <img className="navIcon" src={salao} alt="" />SALÃO</Link>
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