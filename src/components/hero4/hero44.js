import React from 'react';
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/bg/hero-bg03.png';
import LetterGlitch from './letter-glitch';
import { Link } from 'react-router-dom';
import GradientText from './grediant-text';
import BackgroundVideo from './Backgroundvideo';
import PartnerSection from '../../components/Cyber-Security-Components/PartnerSection/PartnerSection';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero44 = () => {
    return (
        <section className="hero home hero-style-three pos-rel pt-120 bg_img" >
            <div className="container">
                <div className="hero_wrap pt-90">
                    <div className="text-left xb-hero video-banner">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h1 className="xb-item--title wow skewIn" data-wow-delay="000ms" data-wow-duration="900ms">
                                    <span className='cyber'> Cyber Confidence, </span> <br/>
                                     Engineered for the   <br/>
                                      <span className='c-suite'> C-Suite  </span>

    </h1>
                            </div>
                        </Fade>
                    </div>
                </div>
         
                <div className="encircle bounce animated">
                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
  <div className="arrow"  >
    <Link onClick={PartnerSection} to={PartnerSection}/>
  </div>
</Fade>
</div>
            </div>
            
            <div className="sc_hero_video">

<BackgroundVideo />
            </div>
        </section>
    );
};

export default Hero44;
