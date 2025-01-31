import React from 'react';
import logo from '../assets/img/logo.webp';
import '../assets/css/Index.css';

const Footer = () => {
    return (
        <footer className="footer-structure">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="legal">
                <p>&copy; {new Date().getFullYear()} Violeta Marinela. All Rights Reserved.</p>
                <p>
                    <a href="/terms" >Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
                </p>
            </div>
            <a href="https://github.com/VioletaMarinela" target="_blank" rel="noreferrer">
                <span className="social-text">GitHub</span>
                <div className="github"></div>
            </a>
        </footer>
    );
};

export default Footer;