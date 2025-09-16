import React from 'react';
import blogs from '../../api/blogs';
import { Link, useParams } from "react-router-dom";
import bImg from '../../images/blog/blog_details-img01.jpg';

const BlogSingle = () => {
    const { slug } = useParams();
    const BlogDetails = blogs.find(item => item.slug === slug);

    if (!BlogDetails) {
        return (
            <section className="blog_details_section pt-70">
                <div className="container">
                    <h2>Blog not found</h2>
                    <Link to="/blog">Back to Blog</Link>
                </div>
            </section>
        );
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="blog_details_section pt-70">
            <div className="container">
                <div className="item_details_content pb-80">
                    <ul className="post_meta ul_li list-unstyled">
                        <li>
                            <Link onClick={ClickHandler} to="/blog">
                                <span className="meta_label1">{BlogDetails.thumb}</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="/blog">
                                <span className="meta_label">Last Update: {BlogDetails.create_at}</span>
                            </Link>
                        </li>
                    </ul>
                    <h2 className="item_details_heading">{BlogDetails.title}</h2>
                    <p className="mb-40">{BlogDetails.description}</p>
                </div>

                <div className="row mt-none-30 g-0 blog-detail-content align-items-start">
                    <div className="col-lg-8 mt-30">
                        <div className="blog_details_content">
                            <div className="mb-4 row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="image_block">
                                        <img src={BlogDetails.screens || bImg} alt={BlogDetails.title} />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="row mb-90 align-items-center mt-none-30 blog-content-html"
                                dangerouslySetInnerHTML={{ __html: BlogDetails.content }}
                            />

                            <hr className="mb-50" />
                        </div>
                    </div>
                </div>

                <div className="related-blog pt-130 pb-130">
                    <h2 className="related-blog-title">Browse related blog</h2>
                    <div className="row mt-none-30">
                        {blogs.slice(1, 3).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                                <div className="blog-details_wrap">
                                    <div className="blog-details_item">
                                        <div className="xb-item--img">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                <img src={blog.screens || bImg} alt={blog.title} />
                                            </Link>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--meta ul_li">
                                                <span className="xb-item--meta_label1">{blog.thumb}</span>
                                                <span className="xb-item--meta_label">By {blog.author}</span>
                                            </div>
                                            <h3 className="item_details_info_heading border-effect">
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <Link 
                                                onClick={ClickHandler} 
                                                to={`/blog-single/${blog.slug}`} 
                                                className="xb-item--det-btn"
                                            >
                                                Read more <i className="far fa-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSingle;
