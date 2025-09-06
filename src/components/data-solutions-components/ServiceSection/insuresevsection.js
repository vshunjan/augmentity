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
              <p className="content">In today's hard market, cyber insurance is no longer a simple transaction; it's a reflection of your security worthiness. With premiums rising and underwriters scrutinising every control, a strong security posture has a direct and material impact on your bottom line. The ‘Insure’ pillar is our unique value proposition: a dedicated practice designed to bridge the gap between your cyber controls and your insurance outcomes. We translate your security maturity into the language of underwriters, providing the empirical evidence needed to secure better coverage at a lower cost.</p>
            </div>
          </div>
        </div>
        <div className="da-service-wrapper">
          {Services.slice(5, 7).map((service, index) => (
            <div
              key={index}
              className={`da-service-item xb-mouseenter ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
              style={{backgroundColor:'#3B2447 '}}
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