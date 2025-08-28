import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process = [
  {
    id: "01",
    subTitle: 'We are not specialist product consultants. Our team may be certified in most network products and security technologies but we offer unbiased advice prioritising your strategic goals first.',
  },
  {
    id: "02",
    subTitle: 'We are not a cybersecurity MSP. Our consultants are your trusted advisors, both for immediate risk assessment and long-term strategy.',
  },
  {
    id: "03",
    subTitle: 'We are not penetration testers. We go deeper, including multiple layers of social engineering and grey-team tabletop exercises.',
  },
  {
    id: "04",
    subTitle: 'We are not cyber insurance brokers. We help you get the best premiums through strategic advisory and quantifiable reporting.',
  },
  {
    id: "05",
    subTitle: 'We are not a SOC. Our real value lies in challenging every SOC to ensure they perform to your expectations.',
  },
];

const AwardSection = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  // Generate transforms for all cards dynamically
//   const cardHeight = window.innerHeight;
//   const transforms = Process.map((_, i) => {
//     const start = i * cardHeight;
//     const end = (i + 1) * cardHeight;
//     return {
//       scale: useTransform(scrollY, [start, end], [1, 0.8]),
//       opacity: useTransform(scrollY, [start, end], [1, 0]),
//       y: useTransform(scrollY, [start, end], [0, -100]),
//     };
//   });

  return (
    <section className="award" style={{ backgroundColor: "black" }}>
      <div className="container">
        <p className="sub-title-sec heighlight-text">
          Our approach is built around four strategic pillars—Analyse, Govern, Insure, and Defend—designed to give you full-spectrum protection, tailored to the realities of today’s threat landscape.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 index-scroll-card col-md-8">
            {/* <div ref={targetRef} className="process-right f-right">
              {Process.map((process, i) => (
                <motion.div
                  key={i}
                  style={{
                    scale: transforms[i].scale,
                    opacity: transforms[i].opacity,
                    y: transforms[i].y,
                    zIndex: Process.length - i,
                  }}
                  className="process-item"
                >
                  <span className="xb-item--number">{process.id}</span>
                  <div className="xb-item--holder">
                    <span className="xb-item--content">{process.subTitle}</span>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
