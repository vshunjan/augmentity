import { useRef, useEffect, useState } from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

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

    const handleRadioChange = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
            setActiveSlide(index);
        }
    }

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
    }

    // Inline styles for the radio navigation
    const radioNavStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        marginTop: '30px',
        padding: '20px 0'
    };

    const radioContainerStyles = {
        display: 'block',
        position: 'relative',
        cursor: 'pointer',
        fontSize: '22px',
        userSelect: 'none'
    };

    const radioInputStyles = {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer'
    };

    const getRadioCheckmarkStyles = (isActive) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '20px',
        width: '20px',
        backgroundColor: isActive ? '#2196F3' : '#eee',
        borderRadius: '50%',
        border: `2px solid ${isActive ? '#2196F3' : '#ddd'}`,
        transition: 'all 0.3s ease'
    });

    const radioCheckmarkAfterStyles = {
        content: '""',
        position: 'absolute',
        top: '4px',
        left: '4px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'white',
        display: 'block'
    };

    return (
        <>
            <style jsx>{`
                .blog-radio-navigation {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    margin-top: 30px;
                    padding: 20px 0;
                }

                .radio-btn-container {
                    display: block;
                    position: relative;
                    cursor: pointer;
                    font-size: 22px;
                    margin-left:12px;
                    user-select: none;
                }

                .radio-btn-container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                }

                .radio-checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 10px;
                    width: 10px;
                    background-color: #eee;
                    border-radius: 50%;
                    border: 1px solid #ddd;
                    transition: all 0.3s ease;
                }

                .radio-btn-container:hover input ~ .radio-checkmark {
                    background-color: #ccc;
                    border-color: #bbb;
                }

                .radio-btn-container input:checked ~ .radio-checkmark {
                    background-color: #2196F3;
                    border-color: #2196F3;
                }

                {/* .radio-checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                } */}

                .radio-btn-container input:checked ~ .radio-checkmark:after {
                    display: block;
                }

                .radio-btn-container .radio-checkmark:after {
                    top: 4px;
                    left: 4px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: white;
                }

                .radio-btn-container.dot-style .radio-checkmark {
                    height: 12px;
                    width: 12px;
                    background-color: rgba(255, 255, 255, 0.5);
                    border: none;
                }

                .radio-btn-container.dot-style input:checked ~ .radio-checkmark {
                    background-color: #fff;
                    transform: scale(1.2);
                }

                .radio-btn-container.dot-style:hover input ~ .radio-checkmark {
                    background-color: rgba(255, 255, 255, 0.8);
                }

                @media (max-width: 768px) {
                    .blog-radio-navigation {
                        gap: 10px;
                        margin-top: 20px;
                    }
                    
                    .radio-checkmark {
                        height: 16px;
                        width: 16px;
                    }
                    
                    .radio-btn-container .radio-checkmark:after {
                        top: 3px;
                        left: 3px;
                        width: 6px;
                        height: 6px;
                    }
                }
            `}</style>
            
            <div>
                <div className="blog pt-70">
                    <div className="container">
                        <div className="blog-slider swiper-container pos-rel">
                            <Swiper
                                modules={[Navigation, Autoplay, Pagination]}
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
                                onSlideChange={handleSlideChange}
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
                                                        <div className="xb-item--meta ul_li">
                                                            <span className="xb-item--meta_label1">{blog.thumb}</span>
                                                            <span className="xb-item--meta_label">By {blog.author}</span>
                                                        </div>
                                                        <h3 className="item_details_info_heading border-effect">
                                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                                        </h3>
                                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--det-btn">
                                                            Read more <i className="far fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            {/* Radio Button Navigation */}
                            <div className="blog-radio-navigation">
                                {blogs.map((_, index) => (
                                    <label key={index} className="radio-btn-container">
                                        <input 
                                            type="radio" 
                                            name="blog-slider" 
                                            checked={activeSlide === index}
                                            onChange={() => handleRadioChange(index)}
                                        />
                                        <span className="radio-checkmark"></span>
                                    </label>
                                ))}
                            </div>
                            
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogList;