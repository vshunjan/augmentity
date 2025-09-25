import React from 'react'
import blogs from '../../api/news'
import { Link } from 'react-router-dom'
import Bg from '../../images/bg/da-blog_bg.png'

const DataSolutioBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pos-rel pb-150 bg_img" >
            <div className="container">
                <div className="da-blog-wrapper">
                    <div className="row ">
                        {blogs.map((blog, Bitem) => (
                            <div className="mt-40 col-lg-4 col-md-6" key={Bitem}>
                                <div className="da-blog-item">
                                    <div className="xb-item--img">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.img} alt=""/></Link>
                                    </div>
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title border-effect">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                        </h2>
                                        <Link onClick={ClickHandler} to={`${blog.slug}`} className="xb-item--arrow">
                                           
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataSolutioBlogSection;