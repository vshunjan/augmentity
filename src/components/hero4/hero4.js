import React from 'react';
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/bg/hero-bg03.png';
import LetterGlitch from './letter-glitch';
import { Link } from 'react-router-dom';
import GradientText from './grediant-text'

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero4 = () => {
    return (
        <section className="hero hero-style-three pos-rel pt-120 bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="hero_wrap pt-90">
                    <div className="xb-hero text-center">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h1 className="xb-item--title wow skewIn" data-wow-delay="000ms" data-wow-duration="900ms">
                                    <span> Cyber Confidence, </span>

<GradientText
  colors={["#010a26", " #f03099", "#93e2e6", "#f03099", "#f03099"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
   Engineered for the <br/> C-Suite
</GradientText>
                                    
                                      
                                </h1>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                            <div>
                                <div className="xb-item--holder wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
                                   
  
    
                                    <div className="hero-btn">
                                        <Link onClick={ClickHandler} to="" className="blc-btn">
                                        
                                            <span>Explore solutions <i className="far fa-angle-right"></i></span>
                                           
                                          
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="xb-shape">
                {/* <div className="shape shape--one"><img src={hImg1} alt="" /></div> */}
                {/* <div className="shape shape--two"><img src={hImg2} alt="" /></div> */}
                {/* <div className="shape shape--three"><img src={hImg3} alt="" /></div> */}
                {/* <div className="shape shape--four"><img src={hImg4} alt="" /></div> */}
                {/* <div className="shape shape--five"><img src={hImg5} alt="" /></div> */}
            </div>
            <div className="sc_hero_video">
    <LetterGlitch
  glitchSpeed={10}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>
            </div>
        </section>
    );
};

export default Hero4;
