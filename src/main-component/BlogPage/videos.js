import React,{useState} from 'react'
import blogs from '../../api/videio'
import { Link } from 'react-router-dom'
import Bg from '../../images/bg/da-blog_bg.png'

const DataSolutioBlogSection = (props) => {

     const [play, setPlay] = useState(false);
     
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
                                  
                                   <div className="xb-item--img" style={{ position: "relative" }}>
      {!play ? (
        <div
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => setPlay(true)}
        >
          {/* Custom thumbnail */}
          <img
            src={blog.img}
            alt="Video thumbnail"
            style={{ width: "100%", height: "auto" }}
          />
          {/* Play button overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "48px",
              color: "#fff",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              padding: "0px",
            }}
            className="xb-item--arrow"
          >
             <i className="fal fa-play" ></i>
          </div>
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xEdZwLRJttQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: "100%", height: "315px" }}
        />
      )}
    </div>
    
    
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title border-effect">
                                           <a href={''}> {blog.title} </a> 
                                        </h2>
                                        {/* <a onClick={ClickHandler} target="_blank" rel="noopener noreferrer" href={`${blog.slug}`} className="xb-item--arrow">
                                           
                                           <i className="fal fa-play" ></i>
                                        </a> */}
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