import React from "react";
import { data } from "../data/projects";
import "../assets/css/Projects.css";

// Import images  
import ohmyfoodImage from "../assets/img/ohmyfood.webp";
import printitImage from "../assets/img/printit.webp";
import ninacarducciImage from "../assets/img/ninacarducci.webp";

const imageMap = {
    1: ohmyfoodImage,
    2: printitImage,
    3: ninacarducciImage,
};

export default function Projects() {
    return (
        <div className="projects-section">
            <div id="projects" className="section-title">Mes Projets</div>
            <ul className="projects-list">
                {data.map(({ id, name, date, live, pro, description, competences, tags }) => (
                    <li className="project-card" key={id}>
                        {imageMap[id] && <img
                            src={imageMap[id]}
                            alt={`${name} project`}
                            className="project-image" />}
                        <div className="project-details">
                            <h3>{name}</h3>
                            <p className="project-date">{date}</p>
                            <div className="project-links">
                                <a href={live} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                                {pro && <span className="pro-badge">(pro)</span>}
                            </div>
                            <div className="project-description">
                                <h3>Description</h3>
                                <p>{description}</p>
                                <h3>Compétences</h3>
                                <p>{competences}</p>
                                <h3>Tags</h3>
                                <p>{tags}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <a
                href="https://github.com/VioletaMarinela"
                target="_blank"
                className="more-projects"
                rel="noopener noreferrer"
            >
                Pour plusieurs projets
            </a>
        </div>
    );
}
