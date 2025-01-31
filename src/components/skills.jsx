import React from "react";
import "../assets/css/Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faWordpress, faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faDatabase as faDatabaseSolid } from '@fortawesome/free-solid-svg-icons';
import Flag from 'react-world-flags';

export default function Skills({ title }) {
    const skills = [
        { icon: faHtml5, name: 'HTML5', value: 94, colorClass: 'progress-bar-html' },
        { icon: faCss3, name: 'CSS', value: 94, colorClass: 'progress-bar-css' },
        { icon: faWordpress, name: 'WordPress', value: 80, colorClass: 'progress-bar-wordpress' },
        { icon: faDatabaseSolid, name: 'MongoDB', value: 75, colorClass: 'progress-bar-mongodb' },
        { icon: faJava, name: 'JAVA', value: 70, colorClass: 'progress-bar-java' },
        { icon: faFigma, name: 'Figma', value: 85, colorClass: 'progress-bar-figma' },
        { icon: faTrello, name: 'Trello', value: 75, colorClass: 'progress-bar-trello' },
        { icon: faReact, name: 'React', value: 88, colorClass: 'progress-bar-react' },
    ];

    const languages = [
        { name: 'Roumain', value: 99, colorClass: 'progress-bar-romanian', flag: 'RO' },
        { name: 'Francais', value: 99, colorClass: 'progress-bar-french', flag: 'FR' },
        { name: 'Anglais', value: 95, colorClass: 'progress-bar-english', flag: 'GB' },
        { name: 'Español', value: 85, colorClass: 'progress-bar-spanish', flag: 'ES' },
        { name: 'Serbe', value: 80, colorClass: 'progress-bar-serbian', flag: 'RS' },
        { name: 'Allemand', value: 60, colorClass: 'progress-bar-german', flag: 'DE' },
    ];

    return (
        <div className="skills-section">
            <div id="competence" className="section-title">Compétences</div>
            {skills.map((skill, index) => (
                <div key={index} className={`progress-bar ${skill.colorClass}`} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.value} aria-label={`${skill.name} skill level is ${skill.value} percent`} style={{ width: `${skill.value}%` }}>
                    <span className="skill">
                        <FontAwesomeIcon icon={skill.icon} size="2x" />
                        &nbsp;{skill.name}
                        <i className="val">{skill.value}%</i>
                    </span>
                </div>
            ))}

            <div className="section-title">Langues Parlées</div>
            {languages.map((language, index) => (
                <div key={index} className={`progress-bar ${language.colorClass}`} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={language.value} aria-label={`Niveau en ${language.name}  ${language.value} percent`} style={{ width: `${language.value}%` }}>
                    <span className="skill">
                        <Flag code={language.flag} style={{ width: '2em', marginRight: '5px' }} />
                        &nbsp;{language.name}
                        <i className="val">{language.value}%</i>
                    </span>
                </div>
            ))}
        </div>
    );
}
