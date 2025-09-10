import React, { Fragment } from 'react';
import Header4 from '../../components/header4/Header4';
import Hero2 from '../../components/hero2/hero2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BrandSection from '../../components/It-Services-Components/BrandSection/BrandSection';
import ProjectSection from '../../components/It-Services-Components/ProjectSection/ProjectSection';
import WorkProcess from '../../components/It-Services-Components/WorkProcess/WorkProcess';

import Footer from '../../components/Cyber-Security-Components/Footer/Footer';



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