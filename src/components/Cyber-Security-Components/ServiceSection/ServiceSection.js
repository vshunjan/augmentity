"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./canvasReveal";
import img1 from '../../../images/award/ap-brand04.jpg'

export const ServiceSection = () => {
  return (

<section className="service-sect">
  <div className="container">
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

                  <h1 className="service-card-title"> <span>Our</span> Services</h1>
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
    <div className="service-section">
      <Card >
         <h2 className="dot-grid-title">
          Analyse
        </h2>
        {/* Image */}
  <img src={img1} alt="Analyse" className="card-logo" />

  {/* Canvas Effect */}
  <div className="card-out-content"> 

  <p>  Gain Visibility </p>
  <p>Bunchmark your risk</p>
  <p>Bunchmark your risk</p>
  </div>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-black" />
      </Card>

      <Card >
        <h2 className="dot-grid-title">
          Analyse
        </h2>
        {/* Image */}
  <img src={img1} alt="Analyse" className="card-logo" />

  {/* Canvas Effect */}
  <div className="card-out-content"> 

  <p>  Gain Visibility </p>
  <p>Bunchmark your risk</p>
  <p>Bunchmark your risk</p>
  </div>
        <CanvasRevealEffect
           animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
        />
        {/* Radial gradient for the fade */}
        <div className="radial-mask" />
      </Card>

      <Card  >
         <h2 className="dot-grid-title">
          Analyse
        </h2>
        {/* Image */}
  <img src={img1} alt="Analyse" className="card-logo" />

  {/* Canvas Effect */}
  <div className="card-out-content"> 

  <p>  Gain Visibility </p>
  <p>Bunchmark your risk</p>
  <p>Bunchmark your risk</p>
  </div>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[[125, 211, 252]]}
        />
      </Card>
<Card>
  <h2 className="dot-grid-title">
    Analy
  </h2>

  {/* Image */}
  <img src={img1} alt="Analyse" className="card-logo" />

  {/* Canvas Effect */}
  <div className="card-out-content"> 

  <p>  Gain Visibility </p>
  <p>Bunchmark your risk</p>
  <p>Bunchmark your risk</p>
  </div>
  <CanvasRevealEffect
    animationSpeed={3}
    containerClassName="bg-black"
    colors={[
      [236, 72, 153],
      [232, 121, 249],
    ]}
    dotSize={2}
  />
</Card>

    </div>
    </div>
    </section>
  );
};

const Card = ({ title, icon, children }) => {
  return (
    <div className="card">
      {/* Decorative corner icons */}
      <Icon className="corner-icon top-left" />
      <Icon className="corner-icon bottom-left" />
      <Icon className="corner-icon top-right" />
      <Icon className="corner-icon bottom-right" />

      {/* Static animated background */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="card-overlay"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Always visible content */}
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="aceternity-icon"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default ServiceSection;


