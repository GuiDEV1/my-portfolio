import React from "react";

function Header () {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>console.log("hello world")</h2>
                                <h1>Guilherme Mascarenhas</h1>
                                <p>duis aute dolor on reprehender in voluptareu <br/>dolore nulla periatur</p>
                                <div className="header_buttons">
                                    <a href="header" className="btn btn-outiline">
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