import React from "react";


function Skils () {
   
    const header = {
        mainHeader: "Tecnologias",
    };

    const state = [
        {
            id: 1,
            icon: './icons/html.png',
            heading: "HTML 5",
            text: "Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor."
        },
        {
            id: 2,
            icon: './icons/css.png',
            heading: "CSS 3"
        },
        {
            id: 3,
            icon: './icons/js.png',
            heading: "JavaScript"
        },
        {
            id: 4,
            icon: './icons/react.png',
            heading: "React"
        },
        {
            id: 5,
            icon: './icons/bootstrap.png',
            heading: "Bootstrap"
        },
        {
            id: 6,
            icon: './icons/figma.png',
            heading: "Figma"
        },
        {
            id: 7,
            icon: './icons/canva.png',
            heading: "Canva"
        },
        {
            id: 8,
            icon: './icons/ps.png',
            heading: "Photoshop"
        },
        {
            id: 9,
            icon: './icons/php.png',
            heading: "PHP"
        },
    ];

    return (
       <div className="services">
         <div className="container">
            <div className="services_haeader">
                <div className="common">
                    <h2 className="heading">{header.mainHeader}</h2>
                    <div className="commonBorder"></div>
                </div>

                <div className="row bgMain">
                   {state.map((info) => (
                       <div className="col-4 bgMain">
                        <div className="services_box">
                            <img src={info.icon} alt="icones" className="commonIcons" />
                            <h4 className="services_box-header">{info.heading}</h4>
                        </div>
                       </div> 
                   ))}

                </div>
            </div>
         </div>
       </div>
    )
}


export default Skils;

//1:07:40