import React from 'react';
import { Fade } from "react-awesome-reveal";
import pImg from '../../../images/shape/process-shape01.png'
import pImg2 from '../../../images/shape/process-shape01.png'
import sIcon1 from '../../../images/gallery/Asset 28.svg'
import sIcon2 from '../../../images/gallery/Asset 29.svg'
import sIcon3 from '../../../images/gallery/Asset 30.svg'
import sIcon4 from '../../../images/gallery/Asset 28.svg'
import sIcon5 from '../../../images/gallery/Asset 29.svg'
import { Link } from 'react-router-dom';

const Process = [
    {
        id: "01",
        title: '',
        subTitle: 'We are not specialist product consultants. Our team may be certified in most network products and security technologies but we offer unbiased advise on those, with no motivations to recommend a specific product or vendor - prioritising your strategic goals first.',
        icon: sIcon1,
        direction: 'one',
    },
    {
        id: "02",
        title: 'Planning & strategy development',
        subTitle: 'We are not a cybersecurity MSP. Our consultants are your trusted advisors, both for immediate risk assessment and long-term strategy. We are always in your corner, sometimes even challenging your current service provider - to bring out the best defence.',
        icon: sIcon2,
        direction: 'two',
    },
    {
        id: "03",
        title: 'Design & development',
        subTitle: 'We are not penetration testers. Pen-testing is a thing of the past. We delve a lot, lot deeper, including multiple layers of social engineering and grey-team tabletop exercises.',
        icon: sIcon3,
        direction: 'three',
    },
    {
        id: "04",
        title: 'Testing & quality assurance',
        subTitle: 'We are not cyber insurance brokers. We help you get the best cyber premiums through strategic advisory and quantifiable reporting. Whilst we may be able to recommend some underwriters or brokers for you, we are not incentivised on these.',
        icon: sIcon4,
        direction: 'four',
    },
    {
        id: "05",
        title: 'Deployment & ongoing support',
        subTitle: '	We are not a SOC. How confident are you with your current Security Operations Centre? Whilst we are capable of offering a SOC service, we believe our real value lies fearlessly challenging every SOC to ensure they work to your expectations - increasing your cyber confidence.',
        icon: sIcon5,
        direction: 'four',
    },


]


const WorkProcess = (props) => {

    return (
        <section className="pb-40 process pt-140 pos-rel" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="process-left pt-70">
                            <div className="sec-title">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="mb-40 title wow fadeInUp scroll-card" data-wow-duration="600ms">
                                             Who We Are
                                      <span className='c-suite'> NOT   </span>
                                        </h2>
                                    </div>
                                </Fade>
                                {/* <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <span className="content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">Our innomax Efficient Workflow in 5 Steps ensures streamlined IT solutions. We start by understanding your needs, then plan the project, design intuitive interfaces, build robust systems, and thoroughly test.</span>
                                    </div>
                                </Fade> */}
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
                                        <span className="xb-item--content">{process.subTitle}</span>
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