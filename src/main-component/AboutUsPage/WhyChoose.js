// components/StickyScrollRevealDemo.jsx
"use client";
import React from "react";
import  StickyScroll  from "./scrollstack";
import "./scrollstack.css";
import bgImg1 from '../../images/video/1.gif'
import bgImg2 from '../../images/video/2.gif'
import bgImg3 from '../../images/video/3.gif'
import bgImg4 from '../../images/video/7.gif'

const content = [
  {
    title: "Analyse",
    description:
      "A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.",
    content: (
      <div className="content-card gradient-cyan-emerald">
        <img src={bgImg3} alt="" />
     {/* <video src={bgImg1} autoPlay muted loop playsInline /> */}
      </div>
    ),
    link:'/analyse'
  },
  {
    title: "Govern",
    description:
      "A mature, future-ready security posture that inspires trust—from boardroom to regulator.",
    content: (
      <div className="content-card-image">
<img src={bgImg2} alt="" />      </div>
    ),
    link:'/govern'
  },
  {
    title: "Insure",
    description:
      "Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.",
    content: (
      <div className="content-card gradient-orange-yellow">
                 <img src={bgImg4} alt="" />
      </div>
    ),
    link:'/insure'
  },
  {
    title: "Defend",
    description:
      "Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.",
    content: (
      <div className="content-card gradient-cyan-emerald">
                 <img src={bgImg1} alt="" />
      </div>
    ),
    link:'/defend'
  },
];

 function StickyScrollRevealDemo() {
  return (
    <div className="sticky-scroll-demo">
    
            <div class="folder-svg">
              <svg class="svg-folder-decor" viewBox="0 0 940 227" xmlns="http://www.w3.org/2000/svg"><path d="M1.3042e-06 20C1.37396e-06 8.95431 8.95431 0 20 0H303.176C314.41 0 325.419 3.15428 334.949 9.10375L388.306 42.4135C396.248 47.3714 405.422 50 414.784 50H768.23H920C931.046 50 940 58.9543 940 70V206.5C940 217.546 931.046 226.5 920 226.5H20C8.9543 226.5 5.65529e-08 217.546 1.26314e-07 206.5L1.3042e-06 20Z" fill="#010a26"></path></svg></div>
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;