import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import caseStudies from "../../api/case";

const CaseStudySection = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  const filters = [
    { key: "cat1", label: "Threat Research" },
    { key: "cat2", label: "Blogs" },
  ];

  const ClickHandler = () => {
    window.scrollTo(10, 0);
}

  return (
    <section className="casestudy pb-130" >
      <div className="container">
      

        {/* Case Studies Grid */}
        <div className="casestudy-content mt-70">
          <div className="grid row mt-none-30">
            <AnimatePresence>
              {caseStudies
                .filter((item) => activeFilter === "*" || item.category === activeFilter)
                .map((study) => (
                  <motion.div
                    key={study.id}
                    className={`col-lg-${
                      study.id === 2 || study.id === 7 ? "8" : study.category === "cat3" ? "8" : "4"
                    } col-md-6 grid-item ${study.category} mt-30`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="casestudy-item">
                      <div className="casestudy-img">
                        <Link onClick={ClickHandler} >
                          <img src={study.img} alt={study.title} />
                        </Link>
                        
                        <div className="content_wrap">
                          <h3 className="item_title">{study.title}</h3>
                          <span className="item_tag">Read More</span>
                        </div>
                      </div>
                      {/* <Link onClick={ClickHandler} to={`/blog-single/${study.slug}`} className="xb-overlay"></Link> */}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;





