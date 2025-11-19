import './FooterBar.css'
import whatsapp from '../../assets/icons/whatsapp.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import call from '../../assets/icons/call.svg'
import email from '../../assets/icons/email.svg'

const FooterBar = () => {
    return (
        <>
            <div className="footer">
                <div className="d-flex justify-content-around">

                    <div className="mb-4 text-center">
                        <h5>Redes Sociais</h5>

                        <div className="social-icons">
                            <div className="d-flex">
                                <a href="https://w.app/xocq7k"><img src={whatsapp} alt="" /></a>
                                <a href="https://www.facebook.com/groups/moradoreseamigosdobairromv"><img src={facebook} alt="" /></a>
                                <a href="https://www.instagram.com/conselhoccmv/"><img src={instagram} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 text-center">
                        <h5>Onde estamos</h5>
                        <p>R. do Guaramirim, 200<br />Monte Verde, Florianópolis - SC, 88032-480
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.15589499155!2d-48.497485894009635!3d-27.55767184350902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738a3a215baef%3A0x9ad1986d8bc6359!2sConselho%20Comunit%C3%A1rio%20Monte%20Verde!5e0!3m2!1spt-BR!2sbr!4v1750897792662!5m2!1spt-BR!2sbr"
                            width="300" height="225" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="mb-4 text-center">
                        <h5>Fale Conosco:</h5>
                        <div className="ctt">
                            <label><img src={call} alt="" /></label>
                            <p>48 98501-5251</p>
                        </div>
                        <div className="ctt">
                            <label><img src={email} alt="" /> </label>
                            <p>ccmv.adm@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterBar