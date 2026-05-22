import React, { Fragment } from 'react';

import Hero3 from '../../components/hero3/anlyseHed.js';
import Header4 from '../../components/header4/Header4.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import ServiceSection from '../../components/data-solutions-components/ServiceSection/ServiceSection.js';
import Testimonial from '../../components/data-solutions-components/Testimonial/analyseservice.js';

import Footer from '../../components/Cyber-Security-Components/Footer/Footer.js';


const servicepage = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <main className="page_content">
                    <Header4 /> 
                    <Hero3 />
                    <ServiceSection />
                    <Testimonial />
                   
                </main>
            </div>
                <Footer/>
                <Scrollbar/>
        </Fragment>
    )
};
export default servicepage;