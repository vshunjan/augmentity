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
              <p className="content"> Effective cybersecurity is not merely a technical function—it is a leadership discipline. Strong governance provides the strategic framework that transforms security from a reactive cost centre into a proactive business enabler. The ‘Govern’ pillar is designed to help you build and maintain this framework. We work with your leadership to design robust, future-ready security strategies and policies that align with your growth goals, inspire trust, and ensure you are prepared for the complex web of global regulations.</p>
            </div>
          </div>
        </div>
        <div className="da-service-wrapper">
          {Services.slice(3, 5).map((service, index) => (
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
                  <span className="xbo" data-count="90">{service.title1}<CountUp end={service.Id} enableScrollSpy />{service.title}</span>
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