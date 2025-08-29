import React from 'react';
import { Fade } from "react-awesome-reveal";

import sIcon1 from '../../../images/gallery/1product.png'
import sIcon2 from '../../../images/gallery/2MSP2.png'
import sIcon3 from '../../../images/gallery/3test2.png'
import sIcon4 from '../../../images/gallery/4brokers.png'
import sIcon5 from '../../../images/gallery/5Soc.png'
import { Link } from 'react-router-dom';

const Process = [
    {
        id: "01",
        
        title:'We are not a cybersecurity MSP.',
        subTitle: 'We are not specialist product consultants. Our team may be certified in most network products and security technologies but we offer unbiased advise on those, with no motivations to recommend a specific product or vendor - prioritising your strategic goals first.',
        icon: sIcon1,
        direction: 'one',
    },
    {
        id: "02",
      
        title:'We are not a cybersecurity MSP.',
        subTitle: ' Our consultants are your trusted advisors, both for immediate risk assessment and long-term strategy. We are always in your corner, sometimes even challenging your current service provider - to bring out the best defence.',
        icon: sIcon2,
        direction: 'two',
    },
    {
        id: "03",
        
          title:'We are not penetration testers.',
        subTitle: ' Pen-testing is a thing of the past. We delve a lot, lot deeper, including multiple layers of social engineering and grey-team tabletop exercises.',
        icon: sIcon3,
        direction: 'three',
    },
    {
        id: "04",
        
         title:'We are not cyber insurance brokers.',
        subTitle: ' We help you get the best cyber premiums through strategic advisory and quantifiable reporting. Whilst we may be able to recommend some underwriters or brokers for you, we are not incentivised on these.',
        icon: sIcon4,
        direction: 'four',
    },
    {
        id: "05",
      
        title:'We are not a SOC.',
        subTitle: ' How confident are you with your current Security Operations Centre? Whilst we are capable of offering a SOC service, we believe our real value lies fearlessly challenging every SOC to ensure they work to your expectations - increasing your cyber confidence.',
        icon: sIcon5,
        direction: 'four',
    },


]


const WorkProcess = (props) => {

    return (
        <section className="pb-40 process pos-rel" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="process-left pt-70">
                            <div className="sec-title">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h1 className="mb-40 title wow fadeInUp scroll-card card-why-f" data-wow-delay="000ms" data-wow-duration="900ms">
                                     Who We Are
                               </h1>
                                        <h1 className="mb-40 title wow fadeInUp scroll-card card-why-s" data-wow-delay="000ms" data-wow-duration="900ms">
                                   <span className='about c-suite'> NOT   </span>
                               </h1>
                                    </div>
                                </Fade>
                               
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-8">
                        <div className="process-right f-right">
                            {Process.map((process, pitem) => (
                                <div className="process-item" key={pitem}>
                                    <span className="xb-item--number">{process.id}</span>
                                    <div className="xb-item--img">
                                        <img src={process.icon} alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        {/* <h3 className="xb-item--title">{process.title}</h3> */}
                                        <span className="xb-item--content"><span className='xb--item-bold-sub'>{process.title}</span>{process.subTitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          
        </section>
    );
}

export default WorkProcess;