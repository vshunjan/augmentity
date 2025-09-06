import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import EvervaultCard from '../../../ui/evervault-card'
import icon from '../../../images/icon/magic02.svg';
import pimg1 from "../../../images/gallery/bilf.png";
import pimg2 from "../../../images/gallery/fst.png";
import pimg3 from "../../../images/gallery/hil.png";
import pimg4 from "../../../images/gallery/sgs.png";
import pimg5 from "../../../images/gallery/reptile.png";
import pimg6 from "../../../images/gallery/fst.png";
import pimg7 from "../../../images/gallery/hil.png";
import pimg8 from "../../../images/gallery/sgs.png";
import pimg10 from "../../../images/gallery/bilf.png";
import pimg11 from "../../../images/gallery/reptile.png";
import pimg12 from "../../../images/gallery/fst.png";
import pimg13 from "../../../images/gallery/hil.png";
import pimg14 from "../../../images/gallery/sgs.png";
import pimg15 from "../../../images/gallery/bilf.png";
import pimg16 from "../../../images/gallery/fst.png";
import pimg17 from "../../../images/gallery/hil.png";
import pimg18 from "../../../images/gallery/sgs.png";

const partnersLeft = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg8 },
  { pImg: pimg11 },

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
  { pImg: pimg10 },
  { pImg: pimg11 },
  { pImg: pimg12 },
  { pImg: pimg13 },
  { pImg: pimg14 },
  { pImg: pimg15 },
  { pImg: pimg16 },
  { pImg: pimg17 },

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
                   
                                         
                                          <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                              <div className="brand-text">
                                                  <p className="content about-sec wow first" data-wow-delay="300ms" data-wow-duration="600ms"> <span>Secure</span> your cyber and AI <span>transformation</span>  by augmenting your team with our elite consultants to <span>detect</span>  risks, <span>architect</span> resilience, and build a bulletproof <span>strategy.</span></p>
                                                  <p className="content about-sec wow " data-wow-delay="300ms" data-wow-duration="600ms"> In today's world, cyber confidence is a true business advantage.</p>
                                              </div>
                                             
                                          </Fade>
                  </div>
               
                </div>
                            
  </div>

      <div className="cs-brand_wrap pt-60 pb-60 pos-rel"> 
                                                 <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
        <h2 className="trusted-br"> Trusted By</h2>      
        </Fade> 
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
