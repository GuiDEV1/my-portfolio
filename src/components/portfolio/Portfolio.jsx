import React, { useState } from "react";
import './portfolio.css';
import data from "./data";

function Portfolio () {
    const [item, setItem] = useState(data);

    const filterItem = (cateItem) => {
       const updateItem = data.filter((curElem) => {
         return curElem.category === cateItem
       })
       setItem(updateItem)
    };
    return(
      <section id="portifolio" className="portfolio mtop">
        <div className="container">

            <div className="head flexSB">
                <div className="left">
                    <h2>Meus principais projetos</h2>
                </div>
            </div>

            <div className="links">
                <ul className="flexSB">
                    <li className="active" onClick={() => setItem(data)}>Todos</li>
                    <li onClick={() => filterItem("Developer")}>Developer</li>
                    <li onClick={() => filterItem("Design")}>Design</li>
                    <li><a href="https://github.com/GuiDEV1" target="_blank">Ver mais</a></li>
                </ul>
            </div>
                <div className="content grid mtop">
                    {item.map((elem) => {
                        const {cover, title, link} = elem;
                        return(
                           <div className="box" onClick={link}>
                             <div className="img">
                                <img src={cover} alt="" />
                             </div>
                             <div className="overlay">
                                <h1>{title}</h1>
                             </div>
                           </div>
                        )
                    })}
                </div>
        </div>
      </section>
    )
}

export default Portfolio;