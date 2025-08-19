import React from "react";
import Silk from "./silk";

const WorkFlow = (props) => {
  return (
    <section className="work">
      <div className="container">
        <Silk
          speed={5}
          scale={1}
          color="#29F1FF"
          noiseIntensity={1.5}
          rotation={0}
          className="silk-work"
        />

        <div className="work-content">
          <h1
            className="work-content-title"
            data-wow-delay="000ms"
            data-wow-duration="900ms"
          >
            We would Love to hear from you
          </h1>
          <p className="work-content-p">
           
            We would Love to hear from you we would love to hear from you
          </p>

          <div className="hero-btn">
            <span>
              Explore solutions <i className="far fa-angle-right"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
