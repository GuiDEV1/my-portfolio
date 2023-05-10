import React from "react";


function Skils () {
   
    const header = {
        mainHeader: "Tecnologias",
    };

    const state = [
        {
            id: 1,
            icon: './icons/',
            heading: "HTML 5"
        },
        {
            id: 2,
            icon: './icons/',
            heading: "css 3"
        },
        {
            id: 3,
            icon: './icons/',
            heading: "JavaScript"
        },
        {
            id: 4,
            icon: './icons/',
            heading: "React"
        },
        {
            id: 5,
            icon: './icons/',
            heading: "Bootstrap"
        },
        {
            id: 6,
            icon: './icons/',
            heading: "Figma"
        },
        {
            id: 7,
            icon: './icons/',
            heading: "Canva"
        },
        {
            id: 8,
            icon: './icons/',
            heading: "Photoshop"
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

                <div className="row bgmain">

                </div>
            </div>
         </div>
       </div>
    )
}


export default Skils;

//58:14