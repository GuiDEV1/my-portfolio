import React from "react";
import { FaAlignJustify } from 'react-icons/fa'

function NavBar () {
    const [state, setState] = React.useState(true);
    return(
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                            <img src="./images/logoMe.jpg" alt="logo" />
                        </div>
                    </ul>
                     {state ? (
                        <ul className="navbar_right">
                           <li><a href="">Home</a></li>
                           <li><a href="">Sobre mim</a></li>
                           <li><a href="">Habilidades</a></li>
                           <li><a href="">Experiência</a></li>
                           <li><a href="">Projetos</a></li>
                           <li><a href="">Contato</a></li>
                        </ul>
                     ): (
                        ""
                     )}
                </div>
            </div>
              <div className="toggle" onClick={() => setState(!state)}>
                  <FaAlignJustify />
              </div> 
        </nav>
    )
}

export default NavBar;

// Parei no 16:06