import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import icon from '../../../images/icon/magic02.svg'
import about1 from '../../../images/about/img04.png'
import about2 from '../../../images/bg/abt-cnt_bg.png'
import about3 from '../../../images/bg/content_bg.png'
import abicon1 from '../../../images/icon/frature-icon01.png'
import abicon2 from '../../../images/icon/frature-icon02.png'
import abicon3 from '../../../images/icon/frature-icon03.png'
import abicon4 from '../../../images/icon/frature-icon04.png'
import BlurText from "./blurText";




const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="overflow-hidden about pt-60 pb-100">
            <div className="container">
                <div className="cs-about-wrap pos-rel">
                    <div className="row mt-none-60">
                        
                            <div className="cs-about_left">
                                <div className="sec-title--two sec-title--three double-text">
                                   
                                   <div className='aug-ment-sub-div'>
                                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                        <div>
                                            <BlurText
  text="Why Augmentity "
  delay={150}
  animateBy="words"
  direction="top"
  className="title wow skewIn"
/>
                                           
                                        </div>
                                    </Fade>
                                    <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <div>
                                            <BlurText
  text="Enhance cyber confidence through our zero-trust approach and independent advisory. "
  delay={150}
  animateBy="words"
  direction="top"
  className="content wow fadeInUp"
/>
                 
                                        </div>
                                    </Fade>
                                    </div>
                                    
                                    <div className='sub-para-main-text'>
                                           <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <div className='double-second-div'>
                                             <BlurText
  text="As the global threat landscape evolves rapidly, compliance becomes increasingly stringent, insurance premiums rise, and cyber confidence has become a top business priority. Having collaborated with CIOs and CISOs from globally recognised organisations, we understand the necessity of adopting a holistic security approach that encompasses cloud, on-premise, applications, networks and human factors. Our independent counsel is tailored to meet the unique needs of your business.
 
We believe that human intelligence is greater. Attacks are the norm, how you respond sets you apart."
  delay={150}
  animateBy="words"
  direction="top"
  className="content wow fadeInUp"
/>
                 
            
                                        </div>
                                    </Fade>
                                        </div>
                                        
                                </div>
                                
                            
                                
                            </div>
                        </div>
                      
                    </div>
                </div>
               
       
       
        </section>
    )
}

export default About;