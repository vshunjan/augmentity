import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImg1 from '../../images/video/1.gif'
import bgImg2 from '../../images/video/2.gif'
import bgImg3 from '../../images/video/3.gif'
import bgImg4 from '../../images/video/7.gif'

const RoadmapSlider = () => {
    

    const Process = [
       
        {
            icon: {bgImg1},
            link: "/analyse",
            title: "Analyse",
            subTitle:
                "A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.",
        },
        {
            icon: {bgImg2},
            link: "/govern",
            title: "Govern",
            content:
                "A mature, future-ready security posture that inspires trust—from boardroom to regulator.",
        },
        {
            icon: {bgImg3},
            link: "/insure",
            title: "Insure",
            subTitle:
                "Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.",
        },
        {
            icon: {bgImg4},
            link: "/defend",
            title: "Defend",
            subTitle:
                "Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.",
        },
    ];

    return (
        <section className="roadmap roadmap-pb pt-130 pb-200 pos-rel" style={{ backgroundColor: "#0F55DC" }}>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8">
                                        <div className="process-left pt-70">
                                            <div className="sec-title">
                
                                                
                                                    <div>
                                                                <div class="colourab1"></div>
                                                        <h1 className="mb-40 title wow fadeInUp scroll-card card-why-f" data-wow-delay="000ms" data-wow-duration="900ms">
                                                     Who We Are
                                               </h1>
                                                        <h1 className="mb-40 title wow fadeInUp scroll-card card-why-s" data-wow-delay="000ms" data-wow-duration="900ms">
                                                   <span className='about c-suite'> NOT   </span>
                                               </h1>
                                                    </div>
                                               
                                               
                                            </div>
                                        
                                        </div>
                                    </div>
                 <div className="col-lg-7 col-md-8">
                        <div className="process-right f-right">
                            {Process.map((process, pitem) => (
                                <div className="process-item" key={pitem}>
                                     {/* <div class="folder-svg">
              <svg class="svg-folder-decor" viewBox="0 0 940 227" xmlns="http://www.w3.org/2000/svg"><path d="M1.3042e-06 20C1.37396e-06 8.95431 8.95431 0 20 0H303.176C314.41 0 325.419 3.15428 334.949 9.10375L388.306 42.4135C396.248 47.3714 405.422 50 414.784 50H768.23H920C931.046 50 940 58.9543 940 70V206.5C940 217.546 931.046 226.5 920 226.5H20C8.9543 226.5 5.65529e-08 217.546 1.26314e-07 206.5L1.3042e-06 20Z" fill="#010a26"></path></svg></div>
                                     */}
                                    <div className="content-card gradient-cyan-emerald">
                 <img src={process.icon} alt="" />
      </div>
                                    <div className="xb-item--holder">
                                        <span className='xb--item-bold-sub'>{process.title}</span>
                                        <span className="xb-item--content">{process.subTitle}</span>
                                    </div>
                                       <a href={process.link} className="hero-btn">
                 <span>Discover more</span>
      </a>
                                </div>
                            ))}
                        </div>
                    </div>
            </div> 
            </div>
        </section>
    );
};

export default RoadmapSlider;
