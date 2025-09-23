import { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'


const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
           
            <section className="blog_details_section mt-120">
                <div className="container">
                    <div className="row mt-none-30 g-0 align-items-start">
                         <div className="related-blog pb-130">
                    {/* <h2 className="related-blog-title">Browse  blog</h2> */}
                    <div className="row mt-none-30">
                        {blogs.slice(0, 2).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                                <div className="blog-details_wrap">
                                    <div className="blog-details_item">
                                        <div className="xb-item--img">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.screens} alt="" /></Link>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--meta ul_li">
                                                <span className="xb-item--meta_label1">{blog.thumb}</span>
                                                <span className="xb-item--meta_label">By {blog.author}</span>
                                            </div>
                                            <h3 className="item_details_info_heading border-effect">
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--det-btn">Read more <i className="far fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                  
                    </div>
                </div>
            </section>
        </div>

    )

}

export default BlogList;
