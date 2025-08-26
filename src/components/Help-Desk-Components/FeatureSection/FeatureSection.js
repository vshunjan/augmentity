import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import icon from '../../../images/icon/magic-black.svg'
import icon1 from '../../../images/feature/img02.png'
import icon2 from '../../../images/feature/img01.png'
import bgimg2  from '../../../images/bg/scroll-lockimg.svg'

const FeatureSection = (props) => {

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
    ];

    return (
        <section className="feature pb-100 pt-100">
            <div className="container">
                <div className="feature-wrap">
                    <div className="row align-items-start mt-none-30">
                        <div className="col-lg-5">
                        <div className="cd-work-left">
                            <div className="sec-title--five">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow skewIn" data-wow-duration="600ms">How we get it done quick.</h2>
                                    </div>
                                </Fade>
                                       <div className="xb-img"><img src={bgimg2} alt="" /></div>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-6 mt-30">
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

export default FeatureSection;