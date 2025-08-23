import React from 'react';
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/bg/hero-bg03.png';
import LetterGlitch from './letter-glitch';
import { Link } from 'react-router-dom';
import GradientText from './grediant-text';
import BackgroundVideo from './Backgroundvideo';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero44 = () => {
    return (
        <section className="hero hero-style-three pos-rel pt-120 bg_img" >
            <div className="container">
                <div className="hero_wrap pt-90">
                    <div className="text-left xb-hero video-banner">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h1 className="xb-item--title wow skewIn" data-wow-delay="000ms" data-wow-duration="900ms">
                                    <span className='cyber'> Cyber Confidence, </span> <br/>
                                     Engineered for the   <br/>
                                      <span className='c-suite'> C-Suite  </span>
{/* <GradientText
  colors={["#010a26", " #f03099", "#93e2e6", "#f03099", "#f03099"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
</GradientText> */}
    </h1>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                            <div className='hero-btn-div'>
                                <div className="xb-item--holder wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
                                   
  
    
                                    <div className="hero-btn">
                                        <Link onClick={ClickHandler} to="" className="blc-btn">
                                        
                                            <span>Explore solutions </span>
                                           
                                          
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
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

export default Hero44;
