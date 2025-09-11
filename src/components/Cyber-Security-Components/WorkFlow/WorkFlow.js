import React from "react";
import FaultyTerminal from './FaultyTerminal';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'



const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const WorkFlow = (props) => {
  return (
    <section className="work ">
       <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
      <div className="container">
     
  <FaultyTerminal
    scale={1.5}
    gridMul={[2, 1]}
    digitSize={1.2}
    timeScale={1}
    pause={false}
    scanlineIntensity={1}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0}
    tint="#0008FF"
    mouseReact={true}
    mouseStrength={1}
    pageLoadAnimation={false}
    brightness={1}
  />


        <div className="work-content">
           <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
          <h1
            className="work-content-title"
            data-wow-delay="000ms"
            data-wow-duration="900ms"
          >
            Under Attack?
          </h1>
          </Fade>
          {/* <p className="work-content-p">
           
            Transform with Confidence in the AI Era
          </p> */}
 <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
          <div className="hero-btn">
            <Link onClick={ClickHandler} to="/hotline"> 
            <span>
              Contact Us
            </span>
             </Link>
          </div>
          </Fade>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default WorkFlow;
