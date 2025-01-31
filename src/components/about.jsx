import React from 'react';
import Logoblack from '../assets/img/logoblackwhite.webp';
import Portret from '../assets/img/portret.webp';
import '../assets/css/About.css';

const About = () => {
    return (
        <div id="apropos" className="about-section">
            <div className="section-title">À propos</div>
            <div className="paragraphs">
                <p>
                    Je suis Mary, développeuse web front-end, passionnée par la création
                    d'interfaces utilisateur performantes.
                </p>
                <p>
                    Autodidacte, organisée et rigoureuse, j'apporte professionnalisme et
                    minutie à tous les projets que j'entreprends.
                </p>
                <p>
                    Mes expériences de voyage et de vie à l'étranger (notamment un an et
                    demi en Espagne) m'ont permis d'acquérir une ouverture d'esprit et une
                    maîtrise de six langues.
                </p>
                <p>
                    Actuellement, je suis en formation sur OpenClassrooms pour devenir développeuse web et web mobile, afin de perfectionner mes compétences et d'élargir mes horizons professionnels.
                </p>
                <div className="image-container">
                    <img src={Portret} alt="Portret" className="about-image" />
                    <img src={Logoblack} alt="Logo" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default About;