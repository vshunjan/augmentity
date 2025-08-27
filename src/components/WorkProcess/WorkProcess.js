import React from "react";
import { Fade } from "react-awesome-reveal";
import hicon from "../../images/icon/process-icon.svg";
import pImg from "../../images/process/illistration.png";
import pImg2 from "../../images/shape/pattern.png";
import sIcon1 from "../../images/icon/search01.svg";
import sIcon2 from "../../images/icon/user-icon.png";
import sIcon3 from "../../images/icon/clipboar02.svg";
import sIcon4 from "../../images/icon/medal-star.svg";
import bgimg from "../../images/bg/scroll-lockimg.svg";
// import DarkVeil from './scrollstack';

const Process = [
  {
    id: "01",
    title: "Analyse",
    subTitle:
      "A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.",
    icon: sIcon1,
    direction: "one",
  },
  {
    id: "02",
    title: "Govern",
    subTitle:
      "A mature, future-ready security posture that inspires trust—from boardroom to regulator.",
    icon: sIcon2,
    direction: "two",
  },
  {
    id: "03",
    title: "Insure",
    subTitle:
      "Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.",
    icon: sIcon3,
    direction: "three",
  },
  {
    id: "04",
    title: "Defend",
    subTitle:
      "Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.",
    icon: sIcon4,
    direction: "four",
  },
];

const WorkProcess = (props) => {
  return (
    <section className="process pb-100 pos-rel">
      {/* <DarkVeil /> */}
      <div className="colour6"></div>
      <div className="container">
        <div className="text-left sec-title--two mb-90">
          <div className="service-head">
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1400}
              delay={9}
            >
              <h1 className="service-card-title">
                {" "}
                Transform with Confidence in the AI Era
              </h1>
            </Fade>
          </div>
          <div className="sub-title-div">
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1400}
              delay={9}
            >
              <p className="sub-title-sec">
                As digital transformation accelerates and AI reshapes the
                enterprise, cyber risk has become a top boardroom priority.
                Expert consultants at Augmentity empower forward-thinking
                organizations to move fast without compromising security,
                trust, or compliance.
              </p>
            </Fade>
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1400}
              delay={9}
            >
              <p className="sub-title-sec heighlight-text">
                We stand by you, as your trusted advisors - an extra layer of
                confidence. 
              </p>
            </Fade>
          </div>
        </div>

        {/* <div className="flex-row-reverse row ">
          <div className="col-lg-6 sa-scroll-lock-card">
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1400}
              delay={9}
            >
                
                
                
              <div className="sa-process_left">
                {Process.map((process, pitem) => (
                  <div
                    className={`process-item process-item--${process.direction}`}
                    key={pitem}
                  >
                  

                    <div className="bg-img">
                      <img src={bgimg} alt="" />
                    </div>
                    <div className="process-content">
                      
                      <h4 className="xb-item--title">{process.title}</h4>
                      <p className="xb-item--contact">{process.subTitle}</p>
                      <div className="hero-btn">
                        <span>Discover more</span>
                      </div>
                    </div>
                    <span className="xb-item--number">{process.id}</span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WorkProcess;
