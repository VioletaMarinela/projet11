import React from 'react';

import Banner from "../components/banner";

import '../assets/css/Banner.css';
import '../assets/css/Index.css';


const Header = ({ content }) => {
    return (
        <header className="header-structure">
            <Banner />
            <nav>
                <ul className="nav-links">
                    <li>
                        <a
                            className={
                                content === 1 ? "nav-link active" : "nav-link"
                            }
                            href="#apropos"
                        >
                            à propos
                        </a>
                    </li>
                    <li>
                        <a
                            className={content === 2 ? "nav-link active" : "nav-link"}
                            href="#competence"
                        >
                            Compétences
                        </a>
                    </li>
                    <li>
                        <a
                            className={content === 3 ? "nav-link active" : "nav-link"}
                            href="#projects"
                        >
                            projets
                        </a>
                    </li>
                    <li>
                        <a
                            className={content === 4 ? "nav-link active" : "nav-link"}
                            href="#contact"
                        >
                            contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;  
