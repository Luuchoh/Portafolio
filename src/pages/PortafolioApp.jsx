import React from 'react';

import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { Testimonies } from '../components/Testimonies';
import { Footer } from '../components/Footer';

import '../Styles/general-styles.css';
import '../Styles/portafolio-styles.css';

export const PortafolioApp = () => {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <Projects />
            <Testimonies />
            <Footer />
        </div>
    )
}
