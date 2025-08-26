import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bgimg2  from '../../../images/gallery/grid1 copy.png'
import "./testimonial.css"

const Testimonial = (props) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    
      const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
    
        const accordionData = [
            {
                title: "What It Is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why It Matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["o	A detailed Risk Assessment Report with findings mapped to your chosen framework.","o	A detailed Risk Assessment Report with findings mapped to your chosen framework.",'o	A prioritised Remediation Roadmap with actionable recommendations.'], 
                
            },
        ];
        const accordionData1 = [
            {
                title: "What It Is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why It Matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["o	A detailed Risk Assessment Report with findings mapped to your chosen framework.","o	A detailed Risk Assessment Report with findings mapped to your chosen framework.",'o	A prioritised Remediation Roadmap with actionable recommendations.'], 
                
            },
        ];
        const accordionData2 = [
            {
                title: "What It Is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why It Matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["o	A detailed Risk Assessment Report with findings mapped to your chosen framework.","o	A detailed Risk Assessment Report with findings mapped to your chosen framework.",'o	A prioritised Remediation Roadmap with actionable recommendations.'], 
                
            },
        ];
        const accordionData3 = [
            {
                title: "What It Is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why It Matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["o	A detailed Risk Assessment Report with findings mapped to your chosen framework.","o	A detailed Risk Assessment Report with findings mapped to your chosen framework.",'o	A prioritised Remediation Roadmap with actionable recommendations.'], 
                
            },
        ];
        const accordionData4= [
            {
                title: "What It Is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why It Matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["o	A detailed Risk Assessment Report with findings mapped to your chosen framework.","o	A detailed Risk Assessment Report with findings mapped to your chosen framework.",'o	A prioritised Remediation Roadmap with actionable recommendations.'], 
                
            },
        ];
        const accordionData5 = [
            {
                title: "What It Is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why It Matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["o	A detailed Risk Assessment Report with findings mapped to your chosen framework.","o	A detailed Risk Assessment Report with findings mapped to your chosen framework.",'o	A prioritised Remediation Roadmap with actionable recommendations.'], 
                
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
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Cyber Risk Assessments</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
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
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Ransomware Readiness Audits</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
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
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Cloud Security Assessments (AWS, Azure, GCP)</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
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
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">AI Security Posture ReviewsI</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
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
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Social Engineering & Physical Intrusion Testing</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
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
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Breach & Incident Readiness Assessments</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
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