import React from 'react';
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/bg/hero-bg03.png';
// import LetterGlitch from './letter-glitch';
import { Link } from 'react-router-dom';
import BackgroundVideo from './Backgroundvideo';
import PartnerSection from '../../components/Cyber-Security-Components/PartnerSection/PartnerSection';
import './about.css'

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero2 = () => {
    return (
        <section className="about-banner hero hero-style-three pos-rel pt-120 bg_img" >
            <div className="container">
                <div className="hero_wrap pt-90">
                    <div className="text-left xb-hero video-banner">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h1 className="xb-item--title wow skewIn" data-wow-delay="000ms" data-wow-duration="900ms">
                                     Who We Are
                                      <span className='c-suite'> NOT  <hr className='crossed-line'/> </span>
                               </h1>
                            </div>
                        </Fade>
                    </div>
                </div>
         
                {/* <div className="encircle bounce animated">
                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
  <div className="arrow"  >
    <Link onClick={PartnerSection} to={PartnerSection}/>
  </div>
</Fade>
</div> */}
            </div>
            
            <div className="sc_hero_video">
    {/* <LetterGlitch
  glitchSpeed={10}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/> */}
<BackgroundVideo />
            </div>
        </section>
    );
};

export default Hero2;
