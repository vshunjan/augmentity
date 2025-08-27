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
                title: "What it is:",
                content:
                    "A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.",
            },
            {
                title: "	Why it matters",
                content:
                    "A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.",
            },
            {
                title: "Key deliverables",
                content:
                   ["•	A detailed Risk Assessment Report with findings mapped to your chosen framework.","• A detailed Risk Assessment Report with findings mapped to your chosen framework.",'• A prioritised Remediation Roadmap with actionable recommendations.'], 
                
            },
        ];
        const accordionData1 = [
            {
                title: "What it is:",
                content:
                    "A highly focused audit that simulates the tactics, techniques, and procedures (TTPs) of modern ransomware groups. We scrutinise your defenses against key attack vectors, including phishing resilience, remote access security (RDP/VPN), identity and access management (IAM), data backup integrity, and the viability of your recovery processes.",
            },
            {
                title: "Why it matters",
                content:
                    "Ransomware is not just a data loss event; it's a catastrophic business interruption. This audit moves beyond prevention to stress-test your ability to survive an attack. Proving your resilience here is one of the most ",
            },
            {
                title: "Key deliverables",
                content:
                   ["• A Ransomware Readiness Scorecard. ","• A detailed report on vulnerabilities across the ransomware attack lifecycle.",'•	Backup and Recovery Strategy Validation Report.','• Backup and Recovery Strategy Validation Report.	'], 
                
            },
        ];
        const accordionData2 = [
            {
                title: "What it is:",
                content:
                    "A deep-dive review of your cloud environments. We analyse configurations, identity and access management (IAM) policies, network security groups, data storage permissions, and container security. Our assessment identifies misconfigurations and policy violations that could lead to data exposure or unauthorised access.",
            },
            {
                title: "Why it matters",
                content:
                    " The speed and complexity of the cloud make it a primary source of data breaches. Misconfigurations, not sophisticated hacks, are the most common cause. Our assessment provides the critical oversight needed to secure your cloud transformation and prevent costly incidents.",
            },
            {
                title: "Key deliverables",
                content:
                   ["• Cloud Security Posture Management (CSPM) Report. ","• A list of prioritised misconfigurations and remediation guidance.",'• IAM Policy and Permissions Audit.','• Recommendations for implementing least-privilege access.'], 
                
            },
        ];
        const accordionData3 = [
            {
                title: "What it is:",
                content:
                    " A forward-looking assessment of the unique risks introduced by artificial intelligence and machine learning systems. We review your AI development lifecycle, data integrity controls, and model security to protect against threats like data poisoning, model evasion, and intellectual property theft.",
            },
            {
                title: "Why it matters",
                content:
                    "As AI becomes central to business operations, it also becomes a new, complex attack surface. Securing your AI is critical not only for preventing direct financial loss but also for maintaining regulatory compliance (e.g., EU AI Act) and preserving customer trust.",
            },
            {
                title: "Key Deliverables",
                content:
                   ["• 	AI-Specific Threat Model and Risk Assessment. ","• Secure AI Development Lifecycle (SAIL) Recommendations.",'• Data Integrity and Provenance Audit Report.','• AI Governance and Compliance Gap Analysis.'], 
                
            },
        ];
        const accordionData4= [
            {
                title: "What it is:",
                content:
                    " A real-world test of your human and physical defenses. Our experts use Open-Source Intelligence (OSINT) to build threat profiles, then conduct simulated social engineering attacks (e.g., phishing, vishing) and physical breach attempts to test access controls, employee awareness, and on-site security protocols.",
            },
            {
                title: "Why it matters",
                content:
                    "The most advanced digital firewall is useless if an attacker can talk their way into your server room or trick an employee into revealing their credentials. This service uncovers the often-overlooked human element of risk, providing powerful, tangible evidence of your true security posture.",
            },
            {
                title: "Key deliverables",
                content:
                   ["• OSINT Threat Profile Report. ","• Detailed report on the outcomes of social engineering campaigns.",'• 	Findings from physical intrusion attempts (where applicable).','• Recommendations for targeted employee training and physical security enhancements.'], 
                
            },
        ];
        const accordionData5 = [
            {
                title: "What it is:",
                content:
                    "An evaluation of your organisation's ability to effectively respond to a security incident. We review your incident response (IR) plan, conduct tabletop exercises with key stakeholders, and assess the people, process, and technology triad of your response capabilities.",
            },
            {
                title: "	Why it matters",
                content:
                    "In a breach, a swift and coordinated response is critical to minimising financial and reputational damage. This assessment ensures your team is prepared, your plan is viable, and your technology can provide the necessary visibility when it matters most.",
            },
            {
                title: "Key deliverables",
                content:
                   ["• 	Incident Response Plan Gap Analysis. ","• Tabletop Exercise Report with key findings and recommendations.",'• Assessment of your security teams roles, responsibilities, and communication flows.'], 
                
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
                                                                   {accordionData1.map((item, index) => (
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
                                                                   {accordionData2.map((item, index) => (
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
                                                                   {accordionData3.map((item, index) => (
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
                                                                   {accordionData4.map((item, index) => (
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
                                                                   {accordionData5.map((item, index) => (
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