import React, { Fragment } from 'react';

import Hero3 from '../../components/hero3/insureHed';
import Header4 from '../../components/header4/Header4';

import ServiceSection from '../../components/data-solutions-components/ServiceSection/insuresevsection';
import Testimonial from '../../components/data-solutions-components/Testimonial/insureservice';

import Footer from '../../components/Cyber-Security-Components/Footer/Footer';



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
        </Fragment>
    )
};
export default servicepage;