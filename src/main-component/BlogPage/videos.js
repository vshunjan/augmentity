import React from 'react'
import blogs from '../../api/videio'
import { Link } from 'react-router-dom'
import Bg from '../../images/bg/da-blog_bg.png'

const DataSolutioBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog videos-post pos-rel pb-150 bg_img" >
            <div className="container">
                <div className="da-blog-wrapper">
                    <div className="row ">
                        {blogs.map((blog, Bitem) => (
                            <div className="mt-40 col-lg-4 col-md-6" key={Bitem}>
                                <div className="da-blog-item">
                                    <div className="xb-item--img">
                                        <img src={blog.img} alt=""/>
                                    </div>
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title border-effect">
                                           <a href={''}> {blog.title} </a> 
                                        </h2>
                                        <a onClick={ClickHandler} target="_blank" rel="noopener noreferrer" href={`${blog.slug}`} className="xb-item--arrow">
                                           
                                           <i className="fal fa-play" ></i>
                                        </a>
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