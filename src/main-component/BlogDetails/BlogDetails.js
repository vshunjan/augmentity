import React, { Fragment } from 'react';
import blogs from '../../api/blogs'
import { useParams } from 'react-router-dom';
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Bg from '../../images/gallery/consultbanner.jpg'
import Header from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';


const BlogDetails = (props) => {
    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <section className="page-title pt-200 pos-rel single-blog bg_img" style={{ backgroundImage: `url(${BlogDetails.img})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        
                                        {/* <h2 className="title">{BlogDetails.title}</h2> */}
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
                <BlogSingle />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;