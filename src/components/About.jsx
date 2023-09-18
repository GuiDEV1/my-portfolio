import React from "react";

function About () {    
    return (
     <div id="about" className="about">
        <div className="container">

            <div className="common">
                <h1 className="about-title">Sobre Mim</h1>
                <div className="underline-border"></div>
            </div>

            <div className="row h-650 align">
                <div className="col-6">
                    <div className="about_img">
                        
                        <img src="https://avatars.githubusercontent.com/u/100242616?v=4" alt="" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="about_info">
                        <h1>Desenvolvedor Front-end | Design</h1>
                        <div className="about_info">
                            <p>
                               Olá, me chamo Guilherme. Nasci na capital de São Paulo, sempre fui apaixonado por tecnologias, porém, no início não 
                               sabia qual ramo seguir. Até que decidi estudar programação.
                               Através dela, conheci e desenvolvi grande interesse em Front-end e Design, 
                               e venho os desenvolvendo desde então. A música e os games como hobby sempre mantiveram minha mente aberta e conectada com o mundo a minha volta, em partes tornando a mesma 
                               fortemente alimentada por desafios e possibilidades.
                               
                               <br /><br />
                                Mesmo com a carga educacional da faculdade referente ao tema, sempre busquei por mais e me mantenho constantemente atualizado. 
                                Tenho como meta avançar meus conhecimentos até a posição de Desenvolvedor Front-end Sênior.
                            </p>

                            <div className="about_buttons">
                                <a href="./Currículo+GuilhermeMascarenhasDias.pdf" download="Cúrriculo: Guilherme Mascarenhas" className="btn about-btn-outiline">Dowload CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default About;

/*
 Dar sequencia ao modo escuro
*/


