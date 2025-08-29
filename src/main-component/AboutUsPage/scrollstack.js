// src/main-component/AboutUsPage/AwardSection.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImg  from '../../images/video/anlyse-2.mp4'
import bgImg2  from '../../images/video/govern-2.mp4'
import bgImg3  from '../../images/video/insure-2.mp4'
import bgImg4  from '../../images/video/defend-2.mp4'
import { Link } from "react-router-dom";
import './scrollstack.css'

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    list: ["Analyse", "Govern", "Insure", "Defend"],
    slides: [
      { title: "Analyse",bgImg:bgImg,link:'/analyse', className: "gradient-green" ,content: 'A clear picture of your risk profile and a prioritised roadmap for remediation—before attackers get there first.'},
      { title: "Govern",bgImg:bgImg2, link:'/govern' ,className: "gradient-blue", content:'A mature, future-ready security posture that inspires trust—from boardroom to regulator.'},
      { title: "Insure", bgImg:bgImg3,link:'/insure', className: "gradient-purple" , content:'Lower cyber insurance premiums, faster underwriting, and better alignment between finance and security.'},
      { title: "Defend",bgImg:bgImg4, link:'/defend', className: "gradient-orange" ,content:'Continuous verification, rapid recovery, minimal business disruption—powered by real-world threat engineering.'},
    ],
  }
];

const ScrollStack = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const pinSections = gsap.utils.toArray(".pin-section");
    const lists = gsap.utils.toArray(".list");

    pinSections.forEach((section, i) => {
      const list = lists[i];
      const fill = section.querySelector(".fill");
      const listItems = gsap.utils.toArray("li", list);
      const slides = gsap.utils.toArray(".slide", section);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=" + listItems.length * 50 + "%",
          pin: true,
          scrub: true,
          id: i + 1,
          // markers: { indent: 150 * i }, // enable for debugging
        },
      });

      fill && gsap.set(fill, { scaleY: 0 });

      listItems.forEach((item, j) => {
        if (listItems[j - 1]) {
          tl.set(item, { color: "#008080" }, 0.5 * j)
            .to(slides[j], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(listItems[j - 1], { color: "#ffffff"}, "<")
            .to(slides[j - 1], { autoAlpha: 0, duration: 0.2 }, "<");
        } else {
          tl.set(item, { color: "#008080" }, 0.01).to(
            slides[j],
            { autoAlpha: 1, duration: 0.2 },
            "<"
          );
        }
      });

      tl.to({}, {}).to(
        fill,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration() - 0.5,
        },
        0
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <section className="section gradient-green"></section>

      {sectionsData.map((section, i) => (
        <section key={i} className="section pin-section">
          <div className="content">
            <ul className="list">
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="fill"></div>
            <div className="right">
              {section.slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`slide center ${slide.className}`}
                  style={{ opacity: 0 }}
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.content}</p>
                  <div class="hero-btn"><span>Discover more
                    <Link className="active" to={slide.link}></Link>
                    </span></div>
                  
                  <div class="bg-img">
                      <video src={slide.bgImg} autoPlay muted loop playsInline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section gradient-green"></section>
    </div>
  );
};

export default ScrollStack;
