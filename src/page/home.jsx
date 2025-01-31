import React from 'react';

import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";

import "../assets/css/Index.css";

const Home = () => {
    return (
        <section id="HomePage">
            <About />
            <Projects />
            <Skills />
            <Contact />
        </section>

    );
};

export default Home;
