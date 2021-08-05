import React from 'react';

import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Testimonies } from '../components/Testimonies';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

import '../Styles/general-styles.css';
import '../Styles/portafolio-styles.css';

export const PortafolioApp = () => {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <Projects />
            <Services />
            <Testimonies />
            <Contact />
            <Footer />
        </div>
    )
}
