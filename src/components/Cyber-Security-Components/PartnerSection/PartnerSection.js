import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import EvervaultCard from '../../../ui/evervault-card'
import icon from '../../../images/icon/magic02.svg';
import Slider from "react-slick";
import pimg1 from "../../../images/logo/growth.png";
import pimg2 from "../../../images/gallery/fst.png";
import pimg3 from "../../../images/logo/plume.png";
import pimg4 from "../../../images/gallery/sgs.png";
import pimg5 from "../../../images/gallery/reptile.png";
import pimg6 from "../../../images/logo/ansio.png";
import pimg7 from "../../../images/logo/co-ideation.png";
import pimg8 from "../../../images/gallery/hil.png";


const partners = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg8 },

];

var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const PartnerSection = () => {


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
                                                  <p className="content about-sec wow first" data-wow-delay="300ms" data-wow-duration="600ms"> <span>Secure</span> your cyber and AI <span>transformation</span>  by augmenting your team with our elite consultants to <span>detect</span>  risks, <span>architect</span> resilience, and build a  <span>bulletproof </span>strategy.</p>
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
        <div className="cs-brand-inner marquee-left" >
         
          
               <div className="brand-wrap brand-marquee">
                        <Slider  {...settings}>
                            {partners.map((partner, pitem) => (
                                <div className="brand-logo xb-inner" key={pitem}>
                                    <img src={partner.pImg} alt="Client Logo" />
                                </div>
                            ))}
                        </Slider>
                    </div>
            
          </div>
        </div>  
        {/* Marquee Right */}
      </div>
      
    </section>
  );
};

export default PartnerSection;
