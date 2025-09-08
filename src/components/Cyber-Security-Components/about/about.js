import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import imgWhy from '../../../images/gallery/why-augmentity.svg'
import RippleGrid from "./RippleGrid";
import img1 from '../../../images/logo/Asset 234.png'

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="overflow-hidden about back-blue pt-60 pb-100">
      {/* <div className='colour8'></div>   */}
      <div className="container">
   


        <div className="cs-about-wrap pos-rel">
          <div className="row ">
            <div className="cs-about_left">
              <div className="sec-title--two sec-title--three double-text">
                <div className="aument-img">
                  <img src={imgWhy} />
                </div>
                <div className="aug-ment-sub-div">
                  <Fade
                    direction="up"
                    triggerOnce={"false"}
                    duration={1200}
                    delay={9}
                  >
                    <div>
                      <h1 className="service-card-title"> Why 
                        <img src={img1} />
                      </h1>
                    </div>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce={"false"}
                    duration={1400}
                    delay={9}
                  >
                    <div>
                      <p className="sub-title-sec">
                      
                        Enhance cyber confidence through our zero-trust approach
                        and independent advisory.
                      </p>
                    </div>
                  </Fade>
                

                <div className="sub-para-main-text">
                  <Fade
                    direction="up"
                    triggerOnce={"false"}
                    duration={1400}
                    delay={9}
                  >
                    <div className="double-second-div">
                      <p className="sub-title-sec heighlight-text">
                     
                        As the global threat landscape evolves rapidly,
                        compliance becomes increasingly stringent, insurance
                        premiums rise, and cyber confidence has become a top
                        business priority. Having collaborated with CIOs and
                        CISOs from globally recognised organisations, we
                        understand the necessity of adopting a holistic security
                        approach that encompasses cloud, on-premise,
                        applications, networks and human factors. Our
                        independent counsel is tailored to meet the unique needs
                        of your business.
                      </p>
                      <p className="sub-title-sec highlit-21 heighlight-text" >
                     
                       Attacks are inevitable - your response sets you apart.
                      </p>
                    </div>
                  </Fade>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
