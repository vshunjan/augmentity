import React, { Fragment } from 'react';
import Header4 from '../../components/header4/Header4';
import Hero2 from '../../components/hero2/hero2';
import FeatureSection from '../../components/It-Services-Components/FeatureSection';
import About from '../../components/It-Services-Components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BrandSection from '../../components/It-Services-Components/BrandSection/BrandSection';
import FunFactSection from '../../components/It-Services-Components/FunFact/FunFact';
import ProjectSection from '../../components/It-Services-Components/ProjectSection/ProjectSection';
import WorkProcess from '../../components/It-Services-Components/WorkProcess/WorkProcess';
import ParallaxSection from '../../components/It-Services-Components/PerallaxSection/PerallaxSection';
import Testimonial from '../../components/It-Services-Components/Testimonial/Testimonial';
import TeamSection from '../../components/It-Services-Components/TeamSection/TeamSection';
import ContactSection from '../../components/It-Services-Components/ContactSection';
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import sIcon5 from '../../images/bg/parallax.jpg'


const AboutPage = () => {

    return (
        <Fragment>
            <div className='bg-black body_wrap it-services'>
                <Header4 />
                <main className="page_content">
                    <Hero2 />
                    <ProjectSection />
                    <BrandSection />
                    <WorkProcess />
                    
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default AboutPage;