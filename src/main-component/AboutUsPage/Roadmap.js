import React from 'react';
import { Fade } from "react-awesome-reveal";
import pImg2 from '../../images/shape/pattern.png'
import sIcon1 from '../../images/video/1.gif'
import sIcon2 from '../../images/video/2.gif'
import sIcon3 from '../../images/video/3.gif'
import sIcon4 from '../../images/video/7.gif'


const Process = [
    {
        id:"01",
        title: ' Analyse',
        subTitle: 'A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.',
        icon: sIcon3,
        direction:'one',
        link:'/analyse',
        ttlclr:'rgb(220, 220, 70)',
    },
    {
        id:"02",
        title: 'Govern',
        subTitle: 'A mature, future-ready security posture that inspires trust—from boardroom to regulator.',
        icon: sIcon2,
        direction:'two',
        link:'/govern',
        ttlclr:'rgb(62, 156, 94)',
    },
    {
        id:"03",
        title: 'Insure',
        subTitle: 'Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.',
        icon: sIcon4,
        direction:'three',
        link:'/insure',
        ttlclr:'rgb(161, 40, 237)',
    },
    {
        id:"04",
        title: 'Defend',
        subTitle: 'Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.',
        icon: sIcon1,
        direction:'four',
        link:'/defend',
        ttlclr:'rgb(246, 97, 72)',
    },


]

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const WorkProcess = (props) => {

    return (
        <section className="process work-flow service pt-130 pb-100 pos-rel" >
            <div className="container">
               
                <div className="flex-row-reverse row">
                    <div className="col-lg-6">
                        <div className="sa-process_right">
                            <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                {/* <div>
                                    <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                                        <img className="updown" src={pImg} alt="" />
                                    </div>
                                </div> */}
                            </Fade>
                            {/* <div className="process_shape"><img src={pImg2} alt="" /></div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="sa-process_left">
                            {Process.map((process, pitem) => (
                                <div className={`process-item process-item--${process.direction}`} key={pitem}>
                                    <div class="folder-svg">
              <svg class="svg-folder-decor" viewBox="0 0 940 227" xmlns="http://www.w3.org/2000/svg"><path d="M1.3042e-06 20C1.37396e-06 8.95431 8.95431 0 20 0H303.176C314.41 0 325.419 3.15428 334.949 9.10375L388.306 42.4135C396.248 47.3714 405.422 50 414.784 50H768.23H920C931.046 50 940 58.9543 940 70V206.5C940 217.546 931.046 226.5 920 226.5H20C8.9543 226.5 5.65529e-08 217.546 1.26314e-07 206.5L1.3042e-06 20Z" fill="#0d286b"></path></svg></div>
                                    <h4 className="xb-item--title" style={{ color:process.ttlclr }}>{process.title}</h4>
                                    <p className="xb-item--contact">{process.subTitle}</p>
                                         <a onClick={ClickHandler} href={process.link} className="hero-btn">
                
                 <span>Discover more </span>
      </a>
                                    <div className="xb-item--icon">
                                        <img src={process.icon} alt="" />
                                    </div>
                                    {/* <span className="xb-item--number">{process.id}</span> */}
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