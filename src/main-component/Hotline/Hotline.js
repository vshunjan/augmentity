import React, { Fragment } from 'react';
import Header4 from '../../components/header4/Header4';
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/gallery/consultbanner.jpg'
import ContactSection from './contact-form' ;
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';


const HotLine = () => {

    return (
        <Fragment>
            <div className='cybersecurity body_wrap sco_agency'>
                <main className=" page_content">                    
                    <Header4 />
                     <section className="page-title hot-line contact-banner pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30 hot-line">
                                    <Fade direction='up' className='hot-fade' triggerOnce={'false'} duration={800} delay={6}>
                                                                        <div>
                                                                            <h1 className="xb-item--title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms"> Hotline </h1>
                                                                        </div>
                                                                         <div>
                                                                            <p className="xb-item--content consult-bnr wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">If you think a security breach has occurred in your organisation </p>

                                                                        </div>
                                                                          <div className="pro-top ul_li_between hot-line mb-65 independent">
                                                                                             <div className="sec-title">
                                                                                                 <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9} className="your-swat-content">
                                                                                                
                                                                                                         <span className="content wow fadeInLeft" data-wow-duration="600ms">
                                                                                                        <span>  Contact us on our hotline</span> 
                                                                                                        <span>  UK  +44 7810790018  |     UAE  +971 524710069 </span>
                                                                                                       <span className='hot-nb-desc'> Please note the hotline is for urgent assistance only. Alternatively, please fill out the form below.</span>
                                                                                                        
                                                                                                         </span>
                                                                                                 </Fade>
                                                                                             </div>
                                                                                           
                                                                                         </div>
                                                                    </Fade>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="sd-right-img pos-rel">
                              
                                        <div className="sd-arrow-shape style-3">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactSection/>
                </main>
                <Footer/>
            </div>
        </Fragment>
    )
};
export default HotLine;