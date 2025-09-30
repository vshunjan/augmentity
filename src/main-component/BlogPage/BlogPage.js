import React, { Fragment, useState } from 'react';
import Bg from '../../images/gallery/threat-banner3.jpeg';
import Header from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import BlogList from '../../components/BlogList';
import CaseStudySection from './CaseSection';
import Whitepapers from './whitePaper';
import News from './News';
import Videos from './videos'
import Iridescence from './ripple'

const BlogPage = () => {
    const [activeFilter, setActiveFilter] = useState("blog");

    const handleFilter = (category) => {
        setActiveFilter(category);
        // ClickHandler();
    };

    const filters = [
        { key: "blog", label: "Insights" },
        { key: "caseStudy", label: "Reports" },
        { key: "Whitepapers", label: "Whitepapers" },
        { key: "News", label: "In the News" },
        { key: "Videos", label: "Videos" },
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <section 
                    className="page-title pt-200 pos-rel bg_img" 
                    style={{ backgroundImage: `url(${Bg})` }}
                >
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className="blog-bnr-head sub-title">Threat Intelligence</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ✅ Filter Buttons */}
                <div className='container'>
                <div className=" threat-filter row justify-content-center mt-50 mb-50">
                    <div className="col-lg-8">
                        <div className="team-menu casestudy-menu">
                            {filters.map((filter, index) => (
                                <button
                                    key={index}
                                    className={activeFilter === filter.key ? "active" : ""}
                                    onClick={() => handleFilter(filter.key)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                </div>

                {/* ✅ Conditional Rendering */}
                <div className="container threat-page-main">
            
  

                    <div class="colourab2blog-page">
             <Iridescence
  color={[0, 0, 0.5]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/>
                    </div>
                    
                    {activeFilter === "caseStudy" && <CaseStudySection/>}
                    {activeFilter === "blog" && <BlogList />}
                    {activeFilter === "Whitepapers" && <Whitepapers />}
                    {activeFilter === "News" && <News />}
                    {activeFilter === "Videos" && <Videos />}
                </div>
            </main>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogPage;
