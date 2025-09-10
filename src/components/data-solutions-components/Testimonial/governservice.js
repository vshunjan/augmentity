import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bgimg2  from '../../../images/video/2.gif'
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
                                                                <AccordionHeader targetId="1" className='acc-btn'> Cybersecurity Strategy & Policy Design<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="1" className='acc_body'>
                                                                    <div className="content">
                                                                    <h3 className='acc-btn'>Overview</h3>
                                                                        <p>A collaborative engagement to develop a comprehensive, multi-year cybersecurity strategy. We help you define your security vision, establish key objectives, and create a clear hierarchy of policies, standards, and procedures that translate high-level strategy into day-to-day operations.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                        <h3 className='acc-btn'>Business Impact </h3>
                                                                        <p>A formal strategy aligns security efforts with business priorities, justifies investments, and provides a clear mandate for the security team. It moves your organisation from ad-hoc fixes to a mature, deliberate, and measurable security program.</p>
                                                                      
                                                                    </div>
                                                                       <div className="content">
                                                                          <h3 className='acc-btn'>Outcomes</h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> 	A 3-Year Cybersecurity Strategy & Roadmap</li>
                                                                            <li>  	A comprehensive Information Security Policy document.</li>
                                                                            <li>  	A suite of supporting policy documents (e.g., Acceptable Use, Data Classification).</li>
                                                                           
                                                                            
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
                                                                <AccordionHeader targetId="4" className='acc-btn'> Zero Trust Advisory<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="4" className='acc_body'>
                                                                    <div className="content">
                                                                     <h3 className='acc-btn'> Overview </h3>
                                                                <p>Expert guidance on designing and implementing a Zero Trust architecture. We help you move away from the traditional "trust but verify" model to a modern "never trust, always verify" approach, enforcing strict access controls across your network, applications, and data, regardless of user location.</p>     
                                                                    </div>
                                                                       <div className="content">
                                                                <h3 className='acc-btn'>Business Impact</h3>
                                                                        <p>Zero Trust is the gold standard for modern security architecture, drastically reducing the attack surface and limiting the blast radius of a potential breach. Adopting a Zero Trust mindset is a powerful signal to insurers and regulators that you are taking a proactive and advanced approach to security.</p> 
                                                                      
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 targetId="6" className='acc-btn'>Outcomes </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> Zero Trust Maturity Assessment and Gap Analysis.</li>
                                                                            <li> A customised Zero Trust Architecture Blueprint.</li>
                                                                            <li> Implementation roadmap for identity, endpoint, and network controls.</li>
                                                                           
                                                                            
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
                                                                <AccordionHeader targetId="7" className='acc-btn'> Regulatory Compliance Readiness <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="7" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> Overview</h3>
                                                                        <p>A targeted service to prepare your organisation for specific regulatory requirements. We conduct a thorough gap analysis of your current controls against the mandates of regulations like GDPR (data privacy), DORA (financial sector operational resilience), or others relevant to your industry and geography.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Business Impact</h3>
                                                                        <p> Non-compliance can result in severe financial penalties, reputational damage, and loss of business. Our readiness service provides the assurance that you meet your obligations and can produce the necessary evidence for auditors and regulators.</p>                                                                  
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 className='acc-btn'>Outcomes</h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> 	A detailed Compliance Gap Analysis Report.</li>
                                                                            <li> An Evidence Package with documented controls mapped to regulatory articles.</li>
                                                                            <li> 	Remediation plan to address identified gaps.</li>
                                                                          
                                                                            
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
                                                                <AccordionHeader targetId="10" className='acc-btn'> AI Risk Governance <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="10" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> Overview </h3>
                                                                        <p>A specialised governance service focused on the responsible and secure use of AI. We help you establish a framework for managing AI-specific risks, ensuring fairness, transparency, and accountability in your AI systems, and preparing for emerging regulations like the EU AI Act.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Business Impact</h3>
                                                                        <p> The pace of AI adoption is outstripping the development of internal controls at many organisations. Proactive AI governance is essential for mitigating novel risks, building stakeholder trust, and maintaining a competitive advantage in the AI-driven economy.</p>                                                                  
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Outcomes </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> An AI Risk Management Framework.</li>
                                                                            <li> An AI Ethics and Acceptable Use Policy.</li>
                                                                            <li> Compliance checklists for the EU AI Act and other relevant standards</li>
                                                                           
                                                                            
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
                                                                <AccordionHeader targetId="13" className='acc-btn'> Virtual CISO (vCISO) Engagements <span className="arrow"></span>
                                                                 </AccordionHeader>
                                                                <AccordionBody accordionId="13" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> Overview</h3>
                                                                        <p>Access to a dedicated, senior security strategist on a flexible, part-time basis. Our vCISO provides board-level guidance, oversees your security program, manages risk, and communicates your security posture to executives, auditors, and key stakeholders.</p> 
                                                                    </div>
                                                                       <div className="content">
                                                                <h3 className='acc-btn'>Business Impact </h3>
                                                                        <p> Many organisations need the strategic leadership of a CISO but may not have the budget or requirement for a full-time executive. Our vCISO service provides world-class expertise at a fraction of the cost, ensuring your security program has the strategic direction it needs to mature.</p>                                                                  
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 className='acc-btn'>Outcomes </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>	Monthly and quarterly security program reports.</li>
                                                                            <li> 	Board-level presentations and strategic advisory.</li>
                                                                            <li> 	Oversight of your security budget and technology roadmap.</li>
                                                                            
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
                                                                <AccordionHeader targetId="16" className='acc-btn'>Executive Threat Landscape Briefings<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="16" className='acc_body'>
                                                                    <div className="content">
                                                                         <h3 className='acc-btn'> Overview</h3>
                                                                        <p>Curated, high-impact threat intelligence briefings tailored for a non-technical executive audience. We distill the complex threat landscape into clear, business-relevant insights, focusing on the threats most likely to impact your industry and organisation.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Business Impact</h3>
                                                                        <p> An informed leadership team makes better risk management decisions. These briefings equip your executives to understand the "so what" of emerging threats, enabling them to champion and support necessary security initiatives.</p>                                                                  
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Outcomes </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>	Quarterly, tailored threat intelligence reports.</li>
                                                                            <li> 	In-person or virtual presentations to your leadership team or board.</li>
                                                                            <li> 	Strategic recommendations based on the current threat landscape.</li>
                                                                           
                                                                            
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