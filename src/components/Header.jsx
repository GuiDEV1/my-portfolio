import React from "react";
import { useEffect } from "react";

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){   
      setTimeout(function(){
        elemento.innerHTML += letra;
      }, 120 * i)
    });
  }

function Header () {
    useEffect(() => {
        const titulo = document.querySelector('#titleHeader');
        if (titulo) {
          typeWrite(titulo);
        }
      }, []);


    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Printf("hellow world!");</h2>
                                <h1 id="titleHeader">
                                    Guilherme Mascarenhas
                                </h1>
                                <p>Desenvolverdor Front-end | Design</p>
                                <div className="header_buttons">
                                    <a href="https://api.whatsapp.com/send?phone=5511948616894&text=Ol%C3%A1,%20bom%20dia." target="_blank" className="btn btn-outiline">
                                      contrate-me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./images/procard.png" alt="Minha foto" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header;