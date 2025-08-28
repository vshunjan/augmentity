
import React, { Fragment } from 'react';
import ContactSection from '../../components/ContactSection';
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Fade } from "react-awesome-reveal";
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import Bg from '../../images/gallery/consultbanner.jpg'
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '../../images/icon/music-icon.svg'
import bImg1 from '../../images/hero/contact-img.png'
import bImg2 from '../../images/shape/brd_shape.png'

const TeamPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header4 />
                <section className="page-title contact-banner pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                                                        <div>
                                                                            <h1 className="xb-item--title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">Consult Us </h1>
                                                                        </div>
                                                                    </Fade>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="sd-right-img pos-rel">
                                        {/* <img src={bImg1} alt="" /> */}
                                        <div className="sd-arrow-shape style-3">
                                            {/* <img className="xbzoominzoomup" src={bImg2} alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactSection />
                {/* <CtaSection /> */}
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;