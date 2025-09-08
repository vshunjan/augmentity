import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bgimg2  from '../../../images/video/7.gif'
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
                                {/* <div className="mt-40 sec-title--two sec-title--four">
                                                              
                                                               <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                                   <div className="faq-title">
                                                                      
                                                                   </div>
                                                               </Fade>
                                                           </div> */}
                                                           <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                                        <Accordion open={open} toggle={toggle} className='clearfix accordion_box list-unstyled'>
                                                            <AccordionItem className='block'>
                                                                <AccordionHeader targetId="1" className='acc-btn'>Cybersecurity Ratings Analysis  <span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="1" className='acc_body'>
                                                                    <div className="content">
                                                                    <h3 className='acc-btn'>What it is</h3>
                                                                        <p>An in-depth analysis of your external security ratings from platforms like BitSight and SecurityScorecard, combined with an internal assessment against frameworks like the NIST CSF. We identify the specific factors driving your score and create a plan to address them.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                        <h3 className='acc-btn'>Why it matters </h3>
                                                                        <p>Underwriters increasingly rely on these external ratings as a primary data point in their risk calculations. Actively managing and improving your score is a direct way to demonstrate your security commitment and positively influence your premium.</p>
                                                                      
                                                                    </div>
                                                                       <div className="content">
                                                                          <h3 className='acc-btn'>Key deliverables</h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>  	A detailed analysis of your current security ratings.</li>
                                                                            <li> A Ratings Improvement Plan with prioritised actions.</li>
                                                                            <li>  		Guidance on disputing inaccurate findings with rating agencies</li>
                                                                          
                                                                            
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
                                                                <AccordionHeader targetId="4" className='acc-btn'> Due Diligence Reports for Brokers & Underwriters<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="4" className='acc_body'>
                                                                    <div className="content">
                                                                     <h3 className='acc-btn'> What it is </h3>
                                                                <p> The creation of your "Underwriter-Ready Dossier." This is a comprehensive package of documentation that proactively answers the questions underwriters will ask. It includes evidence of your controls, findings from our assessments, policy documents, and a clear narrative of your security journey.</p>     
                                                                    </div>
                                                                       <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p>Handing an underwriter a complete, professional dossier instead of just a renewal application fundamentally changes the dynamic. It demonstrates maturity, reduces their workload, and builds the confidence needed to offer more favourable terms.</p> 
                                                                      
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 targetId="6" className='acc-btn'>Key deliverables </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> The complete Underwriter-Ready Dossier.</li>
                                                                            <li> Executive summaries tailored for brokers and insurance carriers.</li>
                                                                            <li> A presentation deck to support renewal negotiations.</li>
                                                                           
                                                                            
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
                                                                <AccordionHeader targetId="7" className='acc-btn'> Annualised Loss Expectancy (ALE) Reports<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="7" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> What it is:</h3>
                                                                        <p>A quantitative risk analysis that translates abstract cyber risks into concrete financial terms. Using methodologies like Factor Analysis of Information Risk (FAIR), we calculate the probable financial impact of key risk scenarios (e.g., a ransomware attack, a major data breach) in pounds and pence.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p>  Speaking in financial terms is the language of the C-suite and the insurance industry. An ALE report allows you to have a data-driven conversation about risk, justify security investments based on ROI, and make informed decisions about how much risk to accept, mitigate, or transfer via insurance.</p>                                                                  
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables</h3>
                                                                        <ul className="list-unstyled">
                                                                            <li> 	A detailed ALE Report for 3-5 critical risk scenarios.</li>
                                                                            <li> A presentation explaining the methodology and findings to leadership.</li>
                                                                            <li> Data to support risk transfer (insurance) decisions.</li>
                                                                          
                                                                            
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
                                                                <AccordionHeader targetId="10" className='acc-btn'> Policy Coverage Advisory<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="10" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> What it is: </h3>
                                                                        <p>A thorough review of your existing or proposed cyber insurance policy documents. We analyse the terms, conditions, exclusions, and sub-limits to identify potential gaps between your coverage and your actual risk profile as determined by our assessments.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p> Many policies contain subtle exclusions that can leave you dangerously exposed during a real incident. Our advisory ensures you understand what you are really buying and helps you negotiate for coverage that truly meets your needs.</p>                                                                  
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>	A Policy Gap Analysis Report.</li>
                                                                            <li> 	A list of recommended changes or endorsements to your policy.</li>
                                                                            <li> 	Questions to ask your broker to clarify coverage ambiguities.</li>
                                                                           
                                                                            
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
                                                                <AccordionHeader targetId="13" className='acc-btn'> Risk Mitigation Roadmaps to Reduce Premiums <span className="arrow"></span>
                                                                 </AccordionHeader>
                                                                <AccordionBody accordionId="13" className='acc_body'>
                                                                    <div className="content">
                                                                        <h3 className='acc-btn'> What it is:</h3>
                                                                        <p>The culmination of our work, this service directly links the findings from the 'Analyse' pillar to the outcomes of the 'Insure' pillar. We create a strategic roadmap of security improvements, prioritised by their likely impact on reducing your insurance premiums.</p> 
                                                                    </div>
                                                                       <div className="content">
                                                                <h3 className='acc-btn'>Why it matters </h3>
                                                                        <p> This provides your organisation with a clear, financially motivated plan for security investment. You can confidently allocate resources knowing that each step not only improves your security but also contributes to a tangible reduction in your fixed insurance costs.</p>                                                                  
                                                                    </div>
                                                                      <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables </h3>
                                                                        <ul className="list-unstyled">
                                                                            <li>A prioritised, multi-year Risk Mitigation Roadmap.</li>
                                                                            <li> Projected premium impact analysis for key initiatives.</li>
                                                                            <li> 	A business case to support security investments.</li>
                                                                            
                                                                            
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
                                                                <AccordionHeader targetId="16" className='acc-btn'>Breach & Incident Readiness Assessments<span className="arrow"></span>
                                                                </AccordionHeader>
                                                                <AccordionBody accordionId="16" className='acc_body'>
                                                                    <div className="content">
                                                                         <h3 className='acc-btn'> What it is:</h3>
                                                                        <p>An evaluation of your organisation's ability to effectively respond to a security incident. We review your incident response (IR) plan, conduct tabletop exercises with key stakeholders, and assess the "people, process, and technology" triad of your response capabilities.</p> 
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Why it matters</h3>
                                                                        <p> In a breach, a swift and coordinated response is critical to minimising financial and reputational damage. This assessment ensures your team is prepared, your plan is viable, and your technology can provide the necessary visibility when it matters most.</p>                                                                  
                                                                    </div>
                                                                     <div className="content">
                                                                <h3 className='acc-btn'>Key deliverables </h3>
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