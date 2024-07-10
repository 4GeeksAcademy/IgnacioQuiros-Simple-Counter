import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning bg-gradient border-bottom border-5 border-dark py-3">
            <div className="container-fluid">
                <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "DodgerBlue" }} />
                <a className="navbar-brand ms-2" >Learning With React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="https://es.react.dev/">ReactPage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://es.wikipedia.org/wiki/React">ReactWiki</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

//rafce