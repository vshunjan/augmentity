import React from 'react';
import { Fade } from "react-awesome-reveal";
import hicon from '../../images/icon/process-icon.svg'
import pImg from '../../images/process/illistration.png'
import pImg2 from '../../images/shape/pattern.png'
import sIcon1 from '../../images/icon/search01.svg'
import sIcon2 from '../../images/icon/user-icon.png'
import sIcon3 from '../../images/icon/clipboar02.svg'
import sIcon4 from '../../images/icon/medal-star.svg'
import bgimg  from '../../images/bg/scroll-lockimg.svg'
import DarkVeil from './Darkveil';

const Process = [
    {
        id:"01",
        title: 'Analyse',
        subTitle: 'A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.',
        icon: sIcon1,
        direction:'one',
    },
    {
        id:"02",
        title: 'Govern',
        subTitle: 'A mature, future-ready security posture that inspires trust—from boardroom to regulator.',
        icon: sIcon2,
        direction:'two',
    },
    {
        id:"03",
        title: 'Insure',
        subTitle: 'Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.',
        icon: sIcon3,
        direction:'three',
    },
    {
        id:"04",
        title: 'Defend',
        subTitle: 'Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.',
        icon: sIcon4,
        direction:'four',
    },


]


const WorkProcess = (props) => {

    return (
        <section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: "#000000" }}>
          {/* <DarkVeil /> */}
          <div className='colour6'></div>    
            <div className="container">
                <div className="text-center sec-title--two mb-90" >
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
                </div>
                <div className="flex-row-reverse row " >
                   
                    <div className="col-lg-6 sa-scroll-lock-card">
                                                    
                        
                        <div className="sa-process_left">
                        
                            {Process.map((process, pitem) => (
                                <div className={`process-item process-item--${process.direction}`} key={pitem}>  
                                                <div className='folder-svg'>
                             <svg
        className="svg-folder-decor"
        viewBox="0 0 940 227"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.3042e-06 20C1.37396e-06 8.95431 8.95431 0 20 0H303.176C314.41 0 325.419 3.15428 334.949 9.10375L388.306 42.4135C396.248 47.3714 405.422 50 414.784 50H768.23H920C931.046 50 940 58.9543 940 70V206.5C940 217.546 931.046 226.5 920 226.5H20C8.9543 226.5 5.65529e-08 217.546 1.26314e-07 206.5L1.3042e-06 20Z"
          fill="#020723"
        />
      </svg>
                          </div>   
                          
                          <div className='bg-img'>
                            <img src={bgimg} alt="" />
                            </div>    
                          <div className='process-content'>           
                                    <div className="xb-item--icon">
                                        <img src={process.icon} alt="" />
                                    </div>
                                    <h4 className="xb-item--title">{process.title}</h4>
                                    <p className="xb-item--contact">{process.subTitle}</p>
                                      <div className="hero-btn">
            <span>
             Discover more
            </span>
          </div>
                                    </div>
                                    <span className="xb-item--number">{process.id}</span>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkProcess;