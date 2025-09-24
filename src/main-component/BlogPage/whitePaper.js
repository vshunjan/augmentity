import { useRef, useEffect } from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import blogs from '../../api/whitepapper'

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
            <div className="blog pt-70">
                <div className="container">
                    <div className="blog-slider swiper-container pos-rel">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {blogs.map((blog, Bitem) => (
                                <SwiperSlide key={Bitem}>
                                    <div className="col-lg-4 blog-single col-md-6 mt-30" key={Bitem}>
                                        <div className="blog-details_wrap">
                                            <div className="blog-details_item">
                                                <div className="xb-item--img">
                                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                        <img src={blog.screens} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="xb-item--holder">
                                                    
                                                    <h3 className="item_details_info_heading border-effect">
                                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                                    </h3>
                                                    <p className="item_details_info_heading border-effect">
                                                        {blog.description}
                                                    </p>
                                                    <Link onClick={ClickHandler} to={blog.slug} className="xb-item--det-btn">
                                                        Read more <i className="far fa-long-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            
          
        </div>
    )
}

export default BlogList;