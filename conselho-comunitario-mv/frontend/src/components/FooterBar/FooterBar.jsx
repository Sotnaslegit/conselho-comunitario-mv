import './FooterBar.css'
import whatsapp from '../../assets/icons/whatsapp.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import call from '../../assets/icons/call.svg'
import email from '../../assets/icons/email.svg'

const FooterBar = () => {
    return (
        <>
            <div className="footer mt-4">
                <div className="container-fluid d-flex justify-content-around">
                    <div className="container mb-6 d-flex justify-content-around flex-column">
                        <div style={{display: "flex", gap: "50px", "flexDirection": "column", "margin": "0 auto"}}>
                            <div className="container mb-6 -flex">
                                <h5 className='secondary-font'>Redes Sociais</h5>
                                <div className="social-icons">
                                    <div className="d-flex">
                                        <a href="https://w.app/xocq7k"><img src={whatsapp} alt="" /></a>
                                        <a href="https://www.facebook.com/groups/moradoreseamigosdobairromv"><img src={facebook} alt="" /></a>
                                        <a href="https://www.instagram.com/conselhoccmv/"><img src={instagram} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container mb-6">
                                <h5 className='primary-font'>Fale Conosco:</h5>
                                <div className="ctt">
                                    <label><img src={call} alt="" /></label>
                                    <p className='secondary-font'>48 98501-5251</p>
                                </div>
                                <div className="ctt">
                                    <label><img src={email} alt="" /> </label>
                                    <p className='secondary-font'>ccmv.adm@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="container mb-6 text-center mt-5">
                        <h5 className='primary-font'>Onde estamos</h5>
                        <p className='secondary-font'>R. do Guaramirim, 200<br />Monte Verde, Florianópolis - SC, 88032-480
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.15589499155!2d-48.497485894009635!3d-27.55767184350902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738a3a215baef%3A0x9ad1986d8bc6359!2sConselho%20Comunit%C3%A1rio%20Monte%20Verde!5e0!3m2!1spt-BR!2sbr!4v1750897792662!5m2!1spt-BR!2sbr"
                            width="300" height="200" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FooterBar