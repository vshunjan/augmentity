import React, { Fragment } from 'react';
import Header4 from '../../components/header4/Header4';
import Hero44 from '../../components/hero4/hero44';
import PartnerSection from '../../components/Cyber-Security-Components/PartnerSection/PartnerSection';
import ServiceSection from '../../components/Cloud-devops-components/ServiceSection/ServiceSection';
import About from '../../components/Cyber-Security-Components/about/about';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import WorkFlow from '../../components/Cyber-Security-Components/WorkFlow/WorkFlow';
import IndustrieSection from '../../components/Cyber-Security-Components/IndustrieSection/IndustrieSection';
import TestimonialSection from '../../components/Cyber-Security-Components/TestimonialSection/TestimonialSection';
import Achievements from '../../components/Cyber-Security-Components/Achievements/Achievements';
import CyberBlogSection from '../../components/Cyber-Security-Components/CyberBlogSection/CyberBlogSection';
import ContactSection from '../../components/Cyber-Security-Components/ContactSection';
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage5 = () => {

    return (
        <Fragment>
            <div className='cybersecurity body_wrap sco_agency'>
                <main className=" page_content">
                    <div className='colour8'></div> 
                    <Header4 />
                    <Hero44 />
                    <PartnerSection />
                    <ServiceSection />
                     <WorkProcess />
                    <About />
                    <WorkFlow />
                    {/* <IndustrieSection />
                    <TestimonialSection />
                    <Achievements />
                    <CyberBlogSection /> */}
                    {/* <ContactSection /> */}
                    {/* <Scrollbar /> */}
                </main>
                <Footer/>
            </div>
        </Fragment>
    )
};
export default HomePage5;