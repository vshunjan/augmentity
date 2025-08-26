import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bgimg2  from '../../../images/bg/scroll-lockimg.svg'
import "./testimonial.css"

const Testimonial = (props) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    
      const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
    
        const accordionData = [
            {
                title: "Improve time to value",
                content:
                    "Self-service and automation deflect 15% of agent contacts. Agents resolve remaining tickets faster with rich customer insights for better efficiency and service.",
            },
            {
                title: "Reduce effort per ticket",
                content:
                    "Self-service and automation deflect 15% of agent contacts. Agents resolve remaining tickets faster with rich customer insights for better efficiency and service.",
            },
            {
                title: "Keep costs low",
                content:
                    "Self-service and automation deflect 15% of agent contacts. Agents resolve remaining tickets faster with rich customer insights for better efficiency and service.",
            },
            {
                title: "Boost Customer Satisfaction",
                content:
                    "Self-service and automation deflect 15% of agent contacts. Agents resolve remaining tickets faster with rich customer insights for better efficiency and service.",
            },
            {
                title: "Keep costs low",
                content:
                    "Self-service and automation deflect 15% of agent contacts. Agents resolve remaining tickets faster with rich customer insights for better efficiency and service.",
            },
            {
                title: "Boost Customer Satisfaction",
                content:
                    "Self-service and automation deflect 15% of agent contacts. Agents resolve remaining tickets faster with rich customer insights for better efficiency and service.",
            },
        ];

    return (
        <section className="bg-black work pos-rel z-1 pt-150 pb-165">
            <div className="container section-work">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cd-work-left">
                            <div className="sec-title--five">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow skewIn" data-wow-duration="600ms">Services</h2>
                                    </div>
                                </Fade>
                                
                            </div>
                                                                   <div className="xb-img"><img src={bgimg2} alt="" /></div>

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="cd-work-wrap">
                             <div className="feature-right-item mt-30">
                                                           <div className="mb-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div>
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                                                   </div>
                                                               </Fade>
                                                               <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                                           </div>
                                                           <div className="xb-faq xb-faq-two">
                                                               <ul className="clearfix accordion_box list-unstyled">
                                                                   {accordionData.map((item, index) => (
                                                                       <li
                                                                           className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                                               }`}
                                                                           key={index}
                                                                       >
                                                                           <div
                                                                               className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                                               onClick={() => toggleAccordion(index)}
                                                                           >
                                                                               {item.title}
                                                                               <span className="arrow"></span>
                                                                           </div>
                                                                           <div
                                                                               className={`acc_body ${activeIndex === index ? "current" : ""
                                                                                   }`}
                                                                               style={{
                                                                                   display: activeIndex === index ? "block" : "none",
                                                                               }}
                                                                           >
                                                                               <div className="content">
                                                                                   <p>{item.content}</p>
                                                                               </div>
                                                                           </div>
                                                                       </li>
                                                                   ))}
                                                               </ul>
                                                           </div>
                                                       </div>
                          <div className="feature-right-item mt-30">
                                                           <div className="mb-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div>
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                                                   </div>
                                                               </Fade>
                                                               <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                                           </div>
                                                           <div className="xb-faq xb-faq-two">
                                                               <ul className="clearfix accordion_box list-unstyled">
                                                                   {accordionData.map((item, index) => (
                                                                       <li
                                                                           className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                                               }`}
                                                                           key={index}
                                                                       >
                                                                           <div
                                                                               className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                                               onClick={() => toggleAccordion(index)}
                                                                           >
                                                                               {item.title}
                                                                               <span className="arrow"></span>
                                                                           </div>
                                                                           <div
                                                                               className={`acc_body ${activeIndex === index ? "current" : ""
                                                                                   }`}
                                                                               style={{
                                                                                   display: activeIndex === index ? "block" : "none",
                                                                               }}
                                                                           >
                                                                               <div className="content">
                                                                                   <p>{item.content}</p>
                                                                               </div>
                                                                           </div>
                                                                       </li>
                                                                   ))}
                                                               </ul>
                                                           </div>
                                                       </div>
                         <div className="feature-right-item mt-30">
                                                           <div className="mb-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div>
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                                                   </div>
                                                               </Fade>
                                                               <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                                           </div>
                                                           <div className="xb-faq xb-faq-two">
                                                               <ul className="clearfix accordion_box list-unstyled">
                                                                   {accordionData.map((item, index) => (
                                                                       <li
                                                                           className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                                               }`}
                                                                           key={index}
                                                                       >
                                                                           <div
                                                                               className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                                               onClick={() => toggleAccordion(index)}
                                                                           >
                                                                               {item.title}
                                                                               <span className="arrow"></span>
                                                                           </div>
                                                                           <div
                                                                               className={`acc_body ${activeIndex === index ? "current" : ""
                                                                                   }`}
                                                                               style={{
                                                                                   display: activeIndex === index ? "block" : "none",
                                                                               }}
                                                                           >
                                                                               <div className="content">
                                                                                   <p>{item.content}</p>
                                                                               </div>
                                                                           </div>
                                                                       </li>
                                                                   ))}
                                                               </ul>
                                                           </div>
                                                       </div>
                          <div className="feature-right-item mt-30">
                                                           <div className="mb-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div>
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                                                   </div>
                                                               </Fade>
                                                               <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                                           </div>
                                                           <div className="xb-faq xb-faq-two">
                                                               <ul className="clearfix accordion_box list-unstyled">
                                                                   {accordionData.map((item, index) => (
                                                                       <li
                                                                           className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                                               }`}
                                                                           key={index}
                                                                       >
                                                                           <div
                                                                               className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                                               onClick={() => toggleAccordion(index)}
                                                                           >
                                                                               {item.title}
                                                                               <span className="arrow"></span>
                                                                           </div>
                                                                           <div
                                                                               className={`acc_body ${activeIndex === index ? "current" : ""
                                                                                   }`}
                                                                               style={{
                                                                                   display: activeIndex === index ? "block" : "none",
                                                                               }}
                                                                           >
                                                                               <div className="content">
                                                                                   <p>{item.content}</p>
                                                                               </div>
                                                                           </div>
                                                                       </li>
                                                                   ))}
                                                               </ul>
                                                           </div>
                                                       </div>
                                                       <div className="feature-right-item mt-30">
                                                           <div className="mb-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div>
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                                                   </div>
                                                               </Fade>
                                                               <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                                           </div>
                                                           <div className="xb-faq xb-faq-two">
                                                               <ul className="clearfix accordion_box list-unstyled">
                                                                   {accordionData.map((item, index) => (
                                                                       <li
                                                                           className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                                               }`}
                                                                           key={index}
                                                                       >
                                                                           <div
                                                                               className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                                               onClick={() => toggleAccordion(index)}
                                                                           >
                                                                               {item.title}
                                                                               <span className="arrow"></span>
                                                                           </div>
                                                                           <div
                                                                               className={`acc_body ${activeIndex === index ? "current" : ""
                                                                                   }`}
                                                                               style={{
                                                                                   display: activeIndex === index ? "block" : "none",
                                                                               }}
                                                                           >
                                                                               <div className="content">
                                                                                   <p>{item.content}</p>
                                                                               </div>
                                                                           </div>
                                                                       </li>
                                                                   ))}
                                                               </ul>
                                                           </div>
                                                       </div>
                                                       <div className="feature-right-item mt-30">
                                                           <div className="mb-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div>
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                                                   </div>
                                                               </Fade>
                                                               <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                                           </div>
                                                           <div className="xb-faq xb-faq-two">
                                                               <ul className="clearfix accordion_box list-unstyled">
                                                                   {accordionData.map((item, index) => (
                                                                       <li
                                                                           className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                                               }`}
                                                                           key={index}
                                                                       >
                                                                           <div
                                                                               className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                                               onClick={() => toggleAccordion(index)}
                                                                           >
                                                                               {item.title}
                                                                               <span className="arrow"></span>
                                                                           </div>
                                                                           <div
                                                                               className={`acc_body ${activeIndex === index ? "current" : ""
                                                                                   }`}
                                                                               style={{
                                                                                   display: activeIndex === index ? "block" : "none",
                                                                               }}
                                                                           >
                                                                               <div className="content">
                                                                                   <p>{item.content}</p>
                                                                               </div>
                                                                           </div>
                                                                       </li>
                                                                   ))}
                                                               </ul>
                                                           </div>
                                                       </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Testimonial;