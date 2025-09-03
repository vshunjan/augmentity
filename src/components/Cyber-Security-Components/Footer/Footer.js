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
import logo from '../../../images/footer/Asset 4.svg'

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
          <div className="social-link ul_li_between">
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
          </div>
        
          </div>
          
   
          <div className="footer-copyright ul_li_between"> 
              <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <p className="copyright">Copyright © 2025 <Link onClick={ClickHandler} to="/">AUGMENTITY</Link>. All rights reserved.</p>
            </Fade>
              <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <p className="copyright services">
              <Link onClick={ClickHandler} to="/analyse">Analyse</Link>
              <Link onClick={ClickHandler} to="/govern">Govern</Link>
              <Link onClick={ClickHandler} to="/insure">Insure</Link>
              <Link onClick={ClickHandler} to="/defend">Defend</Link>
            
            </p>
            </Fade>
              <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
            <p className="privacy"><Link onClick={ClickHandler} to="/privacy">Privacy</Link> <span>Terms Of Use</span></p>
            </Fade>
          </div>
          
       </Fade>
      </div>
    </footer>
  )
}

export default Footer;