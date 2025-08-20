import React from 'react';
import { Fade } from "react-awesome-reveal";
import Services from '../../../api/service';
import { Link } from 'react-router-dom';
import simg from '../../../images/shape/ser-shape01.png'
import simg2 from '../../../images/shape/ser-shape02.png'
import MagicBento from './magicBento'

const ServiceSection = () => {

  const ClickHandler = () => {
    window.scrollTo(6, 0);
  };

  return (
    <section className="service pos-rel z-1 pb-150">
      <div className="container">
        <div className="row justify-content-center">
             <div className="service-head">
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

                  <h1 className="service-card-title"> <span>Some</span> Stats</h1>
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
                     <rect opacity="0.5" x="63" width="50" height="1" fill="url(#paint1_radial_1685_896345)" />
                    </svg>
                  </div>
  </div>
        </div>
        <div className="row">
          {/* {Services.slice(19, 28).map((service, srv) => (
            <div className="col-lg-4 col-md-6" key={srv}>
              <div className="cd-service-item">
                <div className="xb-item--icon"><img src={service.sIcon} alt="" /></div>
                <h2 className="xb-item--title">{service.title}</h2>
                <div className={`xb-item--dot ${service.bgClass}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
               
              </div>
            </div>
          ))} */}
          
          <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
        </div>
       
      </div>
     
    </section>
  );
};

export default ServiceSection;
