import React, { useState } from 'react';
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import CountUp, { useCountUp } from 'react-countup';
import sIcon from '../../../images/icon/flower-icon-blue.svg'
import Bg from '../../../images/bg/da-service_bg.jpg'

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

  return (
    <section className="bg-back pb-150 service bg_img" >
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-8 service-content-two">
            <div className="text-left da-sec-titlte mb-30">
              <p className="content">Every smart transformation begins with understanding. In an environment where the attack surface is constantly expanding through cloud adoption, AI integration, and remote work, achieving clear visibility is the first principle of effective security. The ‘Analyse’ pillar is our foundation—a comprehensive discovery process designed to give you an unflinching, 360-degree view of your organisation's risk posture. We move beyond theoretical vulnerabilities to map how threats could manifest across your unique digital, human, and physical landscapes. This data-driven clarity allows us to create a prioritised, business-aware roadmap for remediation and resilience.</p>
            </div>
          </div>
        </div>
        <div className="da-service-wrapper">
          {Services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className={`da-service-item xb-mouseenter ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="xb-item--holder">
                {/* <div className="xb-item--icon"><img src={service.sIcon} alt="" /></div> */}
                <h3 className="xb-item--title">
                  <span className="xbo" data-count="90"><CountUp end={service.Id} enableScrollSpy />{service.title}</span>
                 </h3>
                <span className="xb-item--arrow"><i className="fal fa-long-arrow-right"></i></span>
                <p className="xb-item--content">{service.description}</p>
              </div>
              
            </div>
          ))}

        </div>
       
      </div>
    </section>
  );
}

export default ServiceSection;