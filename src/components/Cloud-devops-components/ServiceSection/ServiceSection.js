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
        <div className="row">
       
        <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
          
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
</Fade>
        </div>
       
      </div>
     
    </section>
  );
};

export default ServiceSection;
