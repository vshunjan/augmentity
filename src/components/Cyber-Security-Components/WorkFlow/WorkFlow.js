import React from "react";
import FaultyTerminal from './FaultyTerminal';



const WorkFlow = (props) => {
  return (
    <section className="work">
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
    tint="#0d2b29"
    mouseReact={true}
    mouseStrength={0.5}
    pageLoadAnimation={false}
    brightness={1}
  />


        <div className="work-content">
          <h1
            className="work-content-title"
            data-wow-delay="000ms"
            data-wow-duration="900ms"
          >
            Under Attack?
          </h1>
          {/* <p className="work-content-p">
           
            Transform with Confidence in the AI Era
          </p> */}

          <div className="hero-btn">
            <span>
              Explore solutions 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
