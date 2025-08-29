import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollStack from './scrollstack'



const AwardSection = () => {
 

  return (
    <section className="award" style={{ backgroundColor: "black" }}>
      <div className="container">
        <p className="sub-title-sec heighlight-text">
          Our approach is built around four strategic pillars—Analyse, Govern, Insure, and Defend—designed to give you full-spectrum protection, tailored to the realities of today’s threat landscape.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 index-scroll-card col-md-8">
   
            <ScrollStack/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
