import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../../api/service'
import { Fade } from "react-awesome-reveal";
// import Bg from '../../../images/bg/footer_overly.png'
import icon1 from '../../../images/footer/social-link01.png'
import icon2 from '../../../images/footer/social-link02.png'
import icon3 from '../../../images/footer/social-link03.png'
import icon4 from '../../../images/footer/social-link04.png'
import icon5 from '../../../images/footer/social-link05.png'
import logo from '../../../images/gallery/Asset 6.svg'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
  e.preventDefault()
}

const Footer = (props) => {

  return (
    <footer className="footer bg_img footer-style-two footer-style-three pt-120 pos-rel" >
      <div className="container">
          <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
        <div className="xb-footer">
            <div className="footer-inner ul_li_between align-items-start">
                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <div className="footer-widget">
             <Link onClick={ClickHandler} to="/" className="xb-logo"><img src={logo} alt="" /></Link>
            </div>
            </Fade>
            </div>
            
            <div className="col-lg-4 footer col-md-6">
                                   <div className="footer-widget">
                                       <span className="xb-item--sub-title">Discover
                                        <hr className='footer-hrline'/>
                                       </span>
                                       <ul className="xb-item--holder list-unstyled">
                                           <li className="xb-item--list"><Link onClick={ClickHandler} to="/about">Who we are Not</Link></li>
                                           <li className="xb-item--list"><Link onClick={ClickHandler} to="/Contact">Consult Us</Link></li>
                                       </ul>
                                   </div>
                               </div>
            <div className="footer col-lg-4 col-md-6">
                                   <div className="footer-widget">
                                       <span className="xb-item--sub-title">Services
                                        <hr className='footer-hrline'/>
                                       </span>
                                       <ul className="xb-item--holder list-unstyled">
                                           <li className="xb-item--list"><Link  to="/analyse">Analyse</Link></li>
                                           <li className="xb-item--list"><Link  to="/govern">Govern</Link></li>
                                           <li className="xb-item--list"><Link  to="/insure">Insure</Link></li>
                                           <li className="xb-item--list"><Link  to="/defend">Defend</Link></li>
                                          
                                       </ul>
                                   </div>
                               </div>
            <div className="footer col-lg-4 col-md-6">
                                   <div className="footer-widget">
                                       <span className="xb-item--sub-title">Social
                                        <hr className='footer-hrline'/>
                                       </span>
                                       <ul className="xb-item--holder list-unstyled">
                                           <li className="xb-item--list social-item"><Link onClick={ClickHandler} to="https://x.com/augmentitynet" className="xb-icon"><img src={icon2} alt="" /></Link></li>
                                           <li className="xb-item--list social-item"><Link onClick={ClickHandler} to="https://www.linkedin.com/company/augmentity-network/" className="xb-icon"><img src={icon4} alt="" /></Link></li>
                                           
                                          
                                       </ul>
                                   </div>
                               </div>
          {/* <div className="social-link ">
            <span className="xb-item--sub-title">Social </span>
             <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <div className="social-item">
              <Link onClick={ClickHandler} to="/" className="xb-icon"><img src={icon2} alt="" /></Link>
            </div>
          </Fade>
            <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <div className="social-item">
              <Link onClick={ClickHandler} to="/" className="xb-icon"><img src={icon4} alt="" /></Link>
            </div>
           </Fade>
          </div> */}
        
          </div>
          
   
          <div className="footer-copyright ul_li_between"> 
              <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <p className="copyright">Copyright © 2025 AUGMENTITY. All rights reserved.</p>
            </Fade>
           
              <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <p className="privacy"><Link onClick={ClickHandler} to="/privacy">Privacy</Link> <Link onClick={ClickHandler} to="/terms"><span>Terms Of Use</span></Link> </p>
            </Fade>
          </div>
          
       </Fade>
      </div>
    </footer>
  )
}

export default Footer;