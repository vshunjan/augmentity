import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import sIcon1 from '../../images/icon/ser-01.svg'
import brand1 from '../../images/award/ap-brand01.jpg'
import brand2 from '../../images/award/ap-brand02.jpg'
import brand3 from '../../images/award/ap-brand03.jpg'
import brand4 from '../../images/award/ap-brand04.jpg'
import brand5 from '../../images/award/ap-brand05.jpg'
import brand6 from '../../images/award/ap-brand06.jpg'
import ScrollStack, { ScrollStackItem } from './scrollstack'
import brand7 from '../../images/award/ap-brand07.jpg'
import brand8 from '../../images/award/ap-brand08.jpg'
import brand9 from '../../images/award/ap-brand09.jpg'
import brand10 from '../../images/award/ap-brand10.jpg'
import {CanvasRevealEffect} from './canvasEffect'
import bgimg from "../../images/bg/scroll-lockimg.svg";


const AwardSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    return (
        <section className="award" style={{ backgroundColor: "black" }}>
            <ScrollStack>
  <ScrollStackItem>
    {/* <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2} /> */}
       <div className="bg-img">
                          <img src={bgimg} alt="" />
                        </div>
                         <div className="process-content">
                       <h4 className="xb-item--title">Analyse</h4>
                     
                      <p className="xb-item--contact">A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.</p>
                      <div className="hero-btn">
                        <span>Discover more</span>
                      </div>
                    </div>
                    <span className="xb-item--number">1</span>
  </ScrollStackItem>
  <ScrollStackItem>
     <div className="bg-img">
                          <img src={bgimg} alt="" />
                        </div>
                         <div className="process-content">
                      
                     <h4 className="xb-item--title">Govern</h4>
                      <p className="xb-item--contact">A mature, future-ready security posture that inspires trust—from boardroom to regulator.</p>
                      <div className="hero-btn">
                        <span>Discover more</span>
                      </div>
                    </div>
                    <span className="xb-item--number">2</span>
  </ScrollStackItem>
  <ScrollStackItem>
     <div className="bg-img">
                          <img src={bgimg} alt="" />
                        </div>
                         <div className="process-content">
                      
                      <h4 className="xb-item--title">Insure</h4>
                      <p className="xb-item--contact">Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.</p>
                      <div className="hero-btn">
                        <span>Discover more</span>
                      </div>
                    </div>
                    <span className="xb-item--number">3</span>
  </ScrollStackItem>
  {/* <ScrollStackItem>
     <div className="bg-img">
                          <img src={bgimg} alt="" />
                        </div>
                         <div className="process-content">
                      
                      <h4 className="xb-item--title">Defend</h4>
                      <p className="xb-item--contact">Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.</p>
                      <div className="hero-btn">
                        <span>Discover more</span>
                      </div>
                    </div>
                    <span className="xb-item--number">4</span>
  </ScrollStackItem> */}
 
</ScrollStack>
        </section>
    );
}

export default AwardSection;