import React, { Fragment } from 'react';
import Bg from '../../images/gallery/consultbanner.jpg'
import icon from '../../images/icon/cap.svg'
import Image1 from '../../images/hero/cd-img02.png'
import Image2 from '../../images/shape/brd_shape.png'
import Header from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';


const BlogPage = (props) => {

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <section className="page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className=" blog-bnr-head sub-title"> Blog</span>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
                <BlogList />
            </main>
            
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
