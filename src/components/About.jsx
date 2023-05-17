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
                        <img src="./images/about.jpg" alt="" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="about_info">
                        <h1>Desenvolvedor Front-end | Design</h1>
                        <div className="about_info">
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi 
                               libero a distinctio architecto, molestiae, esse in omnis impedit atque 
                               voluptatem dolor dolorem facere numquam eos amet suscipit! Nemo, officiis! Labore.
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi 
                               <br /><br />
                               libero a distinctio architecto, molestiae, esse in omnis impedit atque 
                               voluptatem dolor dolorem facere numquam eos amet suscipit! Nemo, officiis! Labore.
                            </p>

                            <div className="about_buttons">
                                <a href="./myCV.pdf" download="Cúrriculo: Guilherme Mascarenhas" className="btn about-btn-outiline">Dowload CV</a>
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
