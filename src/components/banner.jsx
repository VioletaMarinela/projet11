import React from 'react';
import Logobanner from '../assets/img/logobanner.webp';

import '../assets/css/Banner.css';

const Banner = () => {
    return (
        <section className='SectionBanner'>
            <img src={Logobanner} alt="Logobanner" className="SectionBanner" />
        </section>
    );
};

export default Banner;