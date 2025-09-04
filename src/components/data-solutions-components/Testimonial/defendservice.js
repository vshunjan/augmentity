import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bgimg2  from '../../../images/video/1.gif'
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
                                        <h2 className="text-center title wow skewIn" data-wow-duration="600ms">Services</h2>
                                    </div>
                                </Fade>
                                
                            </div>
                            <div className="xb-img"><img src={bgimg2} alt="" /></div>

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="cd-work-wrap">
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                              
                                                           <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="1" className='acc-btn'>On-Demand or Retainer-Based Incident Response <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="1" className='acc_body'>
                                                                    <div className="content">
                                                                    <h3 className='acc-btn'>What it is</h3>
                                                                        <p>Immediate access to our elite incident response team. We offer two models: on-demand emergency support for organisations facing an active crisis, and a proactive retainer service that guarantees response times (SLAs), pre-establishes terms, and allows our team to familiarise themselves with your environment before an incident.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                        <h3 className='acc-btn'>Why it matters </h3>
                                                                        <p>A retainer dramatically reduces the time from detection to effective response. By handling contractuals and onboarding in advance, we can begin active containment and investigation within hours, not days, saving you critical time and money.</p>
                                                                      
                                                                    </div>
                                                                       <div className="content">
                                                                          <h3 className='acc-btn'>Key deliverables</h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> 	An Incident Response Retainer agreement with a guaranteed SLA.</li>
                                                                            <li>  	24/7/365 access to our IR hotline.</li>
                                                                            <li>  	Annual retainer hours for proactive services or emergency response.	</li>
                                                                            
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                         
            
                                                        </Accordion>
                                                        </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                
                                                          <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="4" className='acc-btn'> Digital Forensics<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="4" className='acc_body'>
                                                                    <div className="content">
                                                                     <h3 className='acc-btn'> What it is </h3>
                                                                <p>A meticulous, court-admissible process of collecting, preserving, and analysing digital evidence to determine the scope and root cause of an incident. We investigate how attackers gained entry, what systems they accessed, what data they exfiltrated, and what tools they used.</p>     
                                                                    </div>
                                                                       <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p>A thorough forensic investigation is essential for ensuring complete threat eradication, meeting regulatory and legal obligations, and providing the necessary evidence for law enforcement and insurance claims.</p> 
                                                                      
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 targetId="6" className='acc-btn'>Key deliverables </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> 	A detailed Digital Forensics Report.</li>
                                                                            <li> 	A timeline of the attack (attack chain analysis).</li>
                                                                            <li> 	Indicators of Compromise (IOCs) for threat hunting.</li>
                                                                            <li> 	Chain of custody documentation for all evidence.</li>
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                         
                                                        </Accordion>
                                                        </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                               
                                                      <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="7" className='acc-btn'> Threat Containment & Eradication<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="7" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> What it is:</h3>
                                                                        <p>The active, hands-on process of stopping the attack and surgically removing the adversary from your network. Our responders work alongside your team to isolate affected systems, block malicious communications, revoke compromised credentials, and ensure the threat cannot return.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p> : Simply "pulling the plug" can often do more harm than good. Our methodical approach ensures the threat is fully contained without unnecessarily disrupting business operations, and that all backdoors are closed to prevent re-infection.</p>                                                                  
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables</h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> Real-time guidance and hands-on support for your technical teams.</li>
                                                                            <li> 	A Post-Incident Containment Report detailing actions taken.</li>
                                                                            <li> 	Recommendations for long-term security hardening.</li>
                                                                            
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                      
                                                         
                                                        </Accordion>
                                                        </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                            
                                                           <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="10" className='acc-btn'> Executive Incident Briefings & Reporting<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="10" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> What it is: </h3>
                                                                        <p>Clear, concise, and regular communication tailored for your leadership team, board, and other non-technical stakeholders throughout a crisis. We translate complex technical findings into business-impact statements, providing the clarity needed for effective decision-making.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p>During a crisis, controlling the narrative and ensuring leadership is informed is paramount. Our briefings eliminate confusion, build confidence, and enable your executive team to manage the broader business implications of the incident effectively.</p>                                                                  
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>	Regularly scheduled incident status briefings</li>
                                                                            <li> A final Executive Summary Report outlining the incident, business impact, and lessons learned.</li>
                                                                            <li> 	Presentation materials for board and stakeholder communications.</li>
                                                                          
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </AccordionBody>
                                                            </AccordionItem>
                                                         
                                            
                                                        </Accordion>
                                                         </Fade>
                                                    </div>
                             <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                             
                                                              <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>

                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="13" className='acc-btn'>Coordination with Legal, PR, and Insurance <span className="arrow"></span>
                                                                 </AccordionHeader>
                                                                <AccordionBody accordionId="13" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> What it is:</h3>
                                                                        <p>Acting as the primary technical liaison for the other functions of your crisis management team. We provide your legal counsel, public relations firm, and insurance carrier with accurate, vetted technical information, ensuring all external communications are consistent and precise.</p> 
                                                                    </div>
                                                                       <div className="content">
                                                                <h3 className='acc-btn'>Why it matters </h3>
                                                                        <p>  Misinformation during a crisis can have severe legal and reputational consequences. By serving as the single source of technical truth, we help you maintain a coordinated and defensible response posture across all fronts</p>                                                                  
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>Technical summaries for legal and insurance teams</li>
                                                                            <li> Expert witness statements and technical affidavits if required.</li>
                                                                            <li> 	Vetting of public statements for technical accuracy.</li>
                                                                            
                                                                            
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