import React, { useState } from 'react';
import Services from '../../../api/service'
import { Link } from "react-router-dom";
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



  return (
    <section className="bg-black service pb-150 bg_img" >
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-8">
            <div className="text-left da-sec-titlte mb-30">
              <p className="content">Turn your disparate data into a major asset – and realise the true potential of your business.</p>
            </div>
          </div>
        </div>
        <div className="da-service-wrapper">
          {Services.slice(11, 14).map((service, index) => (
            <div
              key={index}
              className={`da-service-item xb-mouseenter ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="xb-item--holder">
                <div className="xb-item--icon"><img src={service.sIcon} alt="" /></div>
                <h3 className="xb-item--title">{service.title}</h3>
                <span className="xb-item--arrow"><i className="fal fa-long-arrow-right"></i></span>
                <p className="xb-item--content">{service.description}</p>
              </div>
              <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
            </div>
          ))}

        </div>
       
      </div>
    </section>
  );
}

export default ServiceSection;