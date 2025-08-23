import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import EvervaultCard from '../../../ui/evervault-card'
import icon from '../../../images/icon/magic02.svg';
import pimg1 from "../../../images/brand/cs-brd01.png";
import pimg2 from "../../../images/brand/cs-brd02.png";
import pimg3 from "../../../images/brand/cs-brd03.png";
import pimg4 from "../../../images/brand/cs-brd04.png";
import pimg5 from "../../../images/brand/cs-brd05.png";
import pimg6 from "../../../images/brand/cs-brd06.png";
import pimg7 from "../../../images/brand/cs-brd07.png";
import pimg8 from "../../../images/brand/cs-brd08.png";
import pimg9 from "../../../images/brand/cs-brd09.png";
import pimg10 from "../../../images/brand/cs-brd10.png";
import pimg11 from "../../../images/brand/cs-brd11.png";
import pimg12 from "../../../images/brand/cs-brd12.png";
import pimg13 from "../../../images/brand/cs-brd13.png";
import pimg14 from "../../../images/brand/cs-brd14.png";
import pimg15 from "../../../images/brand/cs-brd15.png";
import pimg16 from "../../../images/brand/cs-brd16.png";
import pimg17 from "../../../images/brand/cs-brd17.png";
import pimg18 from "../../../images/brand/cs-brd18.png";

const partnersLeft = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg8 },
  { pImg: pimg9 },
];

const partnersRight = [
  { pImg: pimg10 },
  { pImg: pimg11 },
  { pImg: pimg12 },
  { pImg: pimg13 },
  { pImg: pimg14 },
  { pImg: pimg15 },
  { pImg: pimg16 },
  { pImg: pimg17 },
  { pImg: pimg18 },
  { pImg: pimg10 },
  { pImg: pimg11 },
  { pImg: pimg12 },
  { pImg: pimg13 },
  { pImg: pimg14 },
  { pImg: pimg15 },
  { pImg: pimg16 },
  { pImg: pimg17 },
  { pImg: pimg18 },
];

const PartnerSection = () => {
  const marqueeLeftRef = useRef(null);
  const marqueeRightRef = useRef(null);

  useEffect(() => {
    const animateMarquee = (marqueeRef) => {
      const marquee = marqueeRef.current;
      const speed = 0.2; // Adjust speed as needed
      let offset = 0;

      if (!marquee) return;

      const marqueeContent = marquee.querySelector(".da-brand_marquee");
      const clone = marqueeContent.innerHTML;
      marqueeContent.insertAdjacentHTML("beforeend", clone);

      const moveMarquee = () => {
        offset -= speed;
        marqueeContent.style.transform = `translateX(${offset}px)`;

        const totalWidth = marqueeContent.scrollWidth / 2;
        if (Math.abs(offset) >= totalWidth) {
          offset = 0;
        }

        requestAnimationFrame(moveMarquee);
      };

      moveMarquee();
    };

    animateMarquee(marqueeLeftRef);
    animateMarquee(marqueeRightRef);
  }, []);

  return (
    <section className="brand mt-90 scecond">
      <div className='colour7'></div> 
      <div className="container">
        <div className="sec-title--two sec-title--three brand-title">

      <EvervaultCard />
          <div className="cs-service-item mt-30" >
                  <div className="xb-item--inner">
                    
                     <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                              <div className="btn-brand">
                                                  <span className="sub-title wow " data-wow-duration="600ms"><img src={icon} alt="" /><span>About us</span></span>
                                              </div>
                                              
                                          </Fade>
                                         
                                          <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                              <div className="brand-text">
                                                  <p className="content about-sec wow first" data-wow-delay="300ms" data-wow-duration="600ms">Secure your cyber and AI transformation by augmenting your team with our elite consultants to detect risks, architect resilience, and build a bulletproof strategy.</p>
                                                  <p className="content about-sec wow " data-wow-delay="300ms" data-wow-duration="600ms"> In today's world, cyber confidence is a true business advantage.</p>
                                              </div>
                                             
                                          </Fade>
                  </div>
                  <div className="border-bg1">
                    <svg  viewBox="0 0 330 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    
                      <rect opacity="0.5"   height="1" fill="url(#paint1_radial_1685_896345)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8961" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1685_896345" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="border-bg2">
                    <svg  viewBox="0 0 330 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                   
                      <defs>
                        <radialGradient id="paint0_radial_1685_8952" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_1685_895" x1="410" y1="369.333" x2="221.101" y2="288.747" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#6780D2" />
                          <stop offset="1" stopColor="#2F3B8D" />
                        </linearGradient>
                        <radialGradient id="paint2_radial_1685_8951" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                     <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint1_radial_1685_896345)" />
                    </svg>
                  </div>
                </div>
                            
  </div>

      <div className="cs-brand_wrap pt-60 pb-60 pos-rel"> 
        <h2 className="trusted-br"> Trusted By</h2>       
        {/* Marquee Left */}
        <div className="cs-brand-inner marquee-left" ref={marqueeLeftRef}>
          <div className="da-brand_marquee">
            {partnersLeft.map((partner, index) => (
              <div className="cs-brand-item" key={index}>
                <div className="xb-inner">
                  <div className="xb-img">
                    <img src={partner.pImg} alt={`Brand ${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
        {/* Marquee Right */}
      </div>
      </div>
    </section>
  );
};

export default PartnerSection;
