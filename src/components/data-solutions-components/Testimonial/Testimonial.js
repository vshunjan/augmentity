import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bgimg2  from '../../../images/gallery/service.png'
import "./testimonial.css"
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Testimonial = (props) => {
    

      const [open, setOpen] = useState('0');
        const toggle = (id) => {
            if (open === id) {
                setOpen();
            } else {
                setOpen(id);
            }
        };
    
    const [activeIndex, setActiveIndex] = useState(0);
    
      const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
    
      

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
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Cyber Risk Assessments</h2>
                                                                   </div>
                                                               </Fade>
                                                           </div>
                                                           <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="1" className='acc-btn'> What it is<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="1" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>A holistic evaluation of your organisation's cybersecurity posture against established industry frameworks like the NIST Cybersecurity Framework (CSF) or ISO 27001. We assess your technical controls, operational processes, and procedural documentation to identify gaps, measure maturity, and benchmark your defenses against best practices.</p>
                                                                      
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="2" className='acc-btn'>Why it matters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="2" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>A generic vulnerability scan tells you what's broken; a risk assessment tells you what matters. By contextualising vulnerabilities within a recognised framework, we help you prioritise efforts on the issues that pose the greatest business risk, ensuring that security investments are both efficient and effective.</p>
                                                                      
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="3" className='acc-btn'>Key deliverables <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="3" className='acc_body'>
                                                                    <div className="content">
                                                                        <ul className="list-unstyled">
                                                                            <li>  A detailed Risk Assessment Report with findings mapped to your chosen framework.</li>
                                                                            <li>  A Risk Register and Heat Map visualising critical vulnerabilities.</li>
                                                                            <li>  	A Maturity Scorecard benchmarking your capabilities.</li>
                                                                            <li>  A prioritised Remediation Roadmap with actionable recommendations.</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                        </Accordion>
                                                        </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Ransomware Readiness Audits</h2>
                                                                   </div>
                                                                </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
                                                           </div>
                                                          <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="4" className='acc-btn'> What it is:<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="4" className='acc_body'>
                                                                    <div className="content">
                                                                <p>A highly focused audit that simulates the tactics, techniques, and procedures (TTPs) of modern ransomware groups. We scrutinise your defenses against key attack vectors, including phishing resilience, remote access security (RDP/VPN), identity and access management (IAM), data backup integrity, and the viability of your recovery processes.</p>     
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="5" className='acc-btn'>Why it matters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="5" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>Ransomware is not just a data loss event; it's a catastrophic business interruption. This audit moves beyond prevention to stress-test your ability to survive an attack. Proving your resilience here is one of the most powerful levers for negotiating better cyber insurance terms.</p> 
                                                                      
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="6" className='acc-btn'>Key deliverables <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="6" className='acc_body'>
                                                                    <div className="content">
                                                                        <ul className="list-unstyled">
                                                                            <li> A Ransomware Readiness Scorecard.</li>
                                                                            <li> A detailed report on vulnerabilities across the ransomware attack lifecycle.</li>
                                                                            <li> Backup and Recovery Strategy Validation Report.</li>
                                                                            <li> An updated Ransomware Response Playbook.</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                        </Accordion>
                                                        </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Cloud Security Assessments (AWS, Azure, GCP)</h2>
                                                                   </div>
                                                               </Fade>
                                                               {/* <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p> */}
                                                           </div>
                                                      <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="7" className='acc-btn'> What it is:<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="7" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>A deep-dive review of your cloud environments. We analyse configurations, identity and access management (IAM) policies, network security groups, data storage permissions, and container security. Our assessment identifies misconfigurations and policy violations that could lead to data exposure or unauthorised access.</p> 
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="8" className='acc-btn'>Why it matters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="8" className='acc_body'>
                                                                    <div className="content">
                                                                        <p> The speed and complexity of the cloud make it a primary source of data breaches. Misconfigurations, not sophisticated hacks, are the most common cause. Our assessment provides the critical oversight needed to secure your cloud transformation and prevent costly incidents.</p>                                                                  
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="9" className='acc-btn'>Key deliverables <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="9" className='acc_body'>
                                                                    <div className="content">
                                                                        <ul className="list-unstyled">
                                                                            <li> Cloud Security Posture Management (CSPM) Report.</li>
                                                                            <li> A list of prioritised misconfigurations and remediation guidance.</li>
                                                                            <li> IAM Policy and Permissions Audit.</li>
                                                                            <li> Recommendations for implementing least-privilege access.</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                        </Accordion>
                                                        </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">AI Security Posture ReviewsI</h2>
                                                                   </div>
                                                               </Fade>
                                                           </div>
                                                           <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="10" className='acc-btn'> What it is:<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="10" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>A forward-looking assessment of the unique risks introduced by artificial intelligence and machine learning systems. We review your AI development lifecycle, data integrity controls, and model security to protect against threats like data poisoning, model evasion, and intellectual property theft.</p> 
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="11" className='acc-btn'>Why it matters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="11" className='acc_body'>
                                                                    <div className="content">
                                                                        <p> As AI becomes central to business operations, it also becomes a new, complex attack surface. Securing your AI is critical not only for preventing direct financial loss but also for maintaining regulatory compliance (e.g., EU AI Act) and preserving customer trust.</p>                                                                  
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="12" className='acc-btn'>Key deliverables <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="12" className='acc_body'>
                                                                    <div className="content">
                                                                        <ul className="list-unstyled">
                                                                            <li>AI-Specific Threat Model and Risk Assessment.</li>
                                                                            <li> Secure AI Development Lifecycle (SAIL) Recommendations.</li>
                                                                            <li> Data Integrity and Provenance Audit Report.</li>
                                                                            <li> AI Governance and Compliance Gap Analysis</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                        </Accordion>
                                                         </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Social Engineering & Physical Intrusion Testing</h2>
                                                                   </div>
                                                               </Fade>
                                                           </div>
                                                              <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="13" className='acc-btn'> What it is:<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="13" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>A real-world test of your human and physical defenses. Our experts use Open-Source Intelligence (OSINT) to build threat profiles, then conduct simulated social engineering attacks (e.g., phishing, vishing) and physical breach attempts to test access controls, employee awareness, and on-site security protocols.</p> 
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="14" className='acc-btn'>Why it matters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="14" className='acc_body'>
                                                                    <div className="content">
                                                                        <p> The most advanced digital firewall is useless if an attacker can talk their way into your server room or trick an employee into revealing their credentials. This service uncovers the often-overlooked human element of risk, providing powerful, tangible evidence of your true security posture.</p>                                                                  
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="15" className='acc-btn'>Key deliverables <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="15" className='acc_body'>
                                                                    <div className="content">
                                                                        <ul className="list-unstyled">
                                                                            <li>OSINT Threat Profile Report.</li>
                                                                            <li> 	Detailed report on the outcomes of social engineering campaigns.</li>
                                                                            <li> Findings from physical intrusion attempts (where applicable).</li>
                                                                            <li> 	Recommendations for targeted employee training and physical security enhancements.</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                        </Accordion>
                                                         </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                       <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Breach & Incident Readiness Assessments</h2>
                                                                   </div>
                                                               </Fade>
                                                           </div>
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="16" className='acc-btn'> What it is:<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="16" className='acc_body'>
                                                                    <div className="content">
                                                                        <p>An evaluation of your organisation's ability to effectively respond to a security incident. We review your incident response (IR) plan, conduct tabletop exercises with key stakeholders, and assess the "people, process, and technology" triad of your response capabilities.</p> 
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="17" className='acc-btn'>Why it matters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="17" className='acc_body'>
                                                                    <div className="content">
                                                                        <p> In a breach, a swift and coordinated response is critical to minimising financial and reputational damage. This assessment ensures your team is prepared, your plan is viable, and your technology can provide the necessary visibility when it matters most.</p>                                                                  
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="18" className='acc-btn'>Key deliverables <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="18" className='acc_body'>
                                                                    <div className="content">
                                                                        <ul className="list-unstyled">
                                                                            <li>Incident Response Plan Gap Analysis.</li>
                                                                            <li> Tabletop Exercise Report with key findings and recommendations.</li>
                                                                            <li> Assessment of your security team's roles, responsibilities, and communication flows.</li>
                                                                            <li> AI Governance and Compliance Gap Analysis</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                        </Accordion>
                                                        </Fade>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Testimonial;