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
              <p className="content">No defense is perfect, but your response can be. When a security incident occurs, every second counts. The speed, expertise, and clarity of your response will determine the ultimate impact on your business, your reputation, and your bottom line. The ‘Defend’ pillar represents our commitment to stand with you in these critical moments. Our world-class incident response experts are on call 24/7/365 to help you contain the threat, investigate the cause, and recover with confidence and minimal disruption.</p>
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