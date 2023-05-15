import React from "react";
import { FaWhatsapp, FaLinkedin,} from "react-icons/fa";
import { SiGmail, SiBehance } from "react-icons/si"

function Footer () {
    return (
        <div id="contato" className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <img src="./images/logoMe.jpg" alt="" />
                            </div>
                            <ul className="footerCircles">
                                <li onClick={() =>{ window.open("https://api.whatsapp.com/send?phone=5511948616894&text=Ol%C3%A1,%20bom%20dia.")}}><FaWhatsapp className="footerIcon"/></li>
                                <li onClick={() =>{ window.open("https://www.linkedin.com/in/guilherme-mascarenhas-dias-/")}}><FaLinkedin className="footerIcon"/></li>
                                <li onClick={() =>{ window.open("https://www.behance.net/guilhermascare3")}}><SiBehance className="footerIcon" /></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright {new Date().getFullYear()} Guilherme Mascarenhas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;