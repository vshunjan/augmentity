// components/ui/sticky-scroll-reveal.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import "./scrollstack.css";

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

  const backgroundColors = [
    "rgb(15, 23, 42)", // slate-900
    "rgb(0, 0, 0)",    // black
    "rgb(23, 23, 23)", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={`sticky-scroll-container ${contentClassName || ''}`}
      ref={ref}
    >
      <div className="sticky-scroll-content-wrapper">
        <div className="sticky-scroll-text-content">
          {content.map((item, index) => (
            <div key={item.title + index} className="sticky-scroll-item">
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
            </div>
          ))}
          <div className="sticky-scroll-spacer" />
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