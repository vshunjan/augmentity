import React from "react";
import Silk from "./silk";

const WorkFlow = (props) => {
  return (
    <section className="work">
      <div className="container">
        <Silk
          speed={4}
  scale={0.5}
  color="#21f5f5"
  noiseIntensity={3.4}
  rotation={0}
          className="silk-work"
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
