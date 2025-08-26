import React, { Fragment } from 'react';
import Header3 from '../../components/header3/Header3';
import Hero3 from '../../components/hero3/hero3';
import Header4 from '../../components/header4/Header4';
import About from '../../components/data-solutions-components/about/about';
import FeatureSection from '../../components/Help-Desk-Components/FeatureSection/FeatureSection';
import ServiceSection from '../../components/data-solutions-components/ServiceSection/ServiceSection';
import Testimonial from '../../components/data-solutions-components/Testimonial/Testimonial';
import QuoteSetion from '../../components/data-solutions-components/QuoteSetion/QuoteSetion';
import PartnerSection from '../../components/data-solutions-components/PartnerSection/PartnerSection';
import DataSolutioBlogSection from '../../components/data-solutions-components/DataSolutioBlogSection/DataSolutioBlogSection';
import DataSolutionFaqSection from '../../components/data-solutions-components/DataSolutionFaqSection/DataSolutionFaqSection';
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const servicepage = () => {

    return (
        <Fragment>
            <div className='data_analytics'>
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