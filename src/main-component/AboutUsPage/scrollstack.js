// components/ui/sticky-scroll-reveal.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import "./scrollstack.css";
import { Link } from 'react-router-dom'

 const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors =  "#010a26";

  const linearGradients = '#010a26';

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors,
      }}
      className={`sticky-scroll-container hi ${contentClassName || ''}`}
      ref={ref}
    >
      <div className="sticky-scroll-content-wrapper">
        
        <div className="sticky-scroll-text-content">
          {content.map((item, index) => (
            <div key={item.title + index} className="sticky-scroll-item">
              {/* <div class="colourab2"></div> */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="sticky-scroll-title"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="sticky-scroll-description"
              >
                {item.description}
              </motion.p>
               <a href={item.link} className="hero-btn">
                
                 <span>Discover more</span>
      </a>
            </div>
          ))}
          {/* <div className="sticky-scroll-spacer" /> */}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className="sticky-scroll-visual-content"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};


export default StickyScroll;