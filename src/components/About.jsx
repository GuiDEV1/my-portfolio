import React from "react";

function About () {
    return (
     <div className="about">
        <div className="container">

            <div className="common">
                <h1 className="about-title">Sobre Mim</h1>
                <div className="underline-border"></div>
            </div>

            <div className="row h-650 align">
                <div className="col-6">
                    <div className="about_img">
                        <img src="./images/" alt="" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="about_info">
                        <h1>Desenvolvedor Front-end | Design</h1>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default About;

//parei no 48:28
