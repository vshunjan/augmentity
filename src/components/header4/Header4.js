import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import icon2 from '../../images/icon/m_01.svg'
import icon3 from '../../images/icon/m_02.svg'
import icon4 from '../../images/icon/m_03.svg'
import icon5 from '../../images/icon/m_04.svg'
import icon6 from '../../images/icon/m_05.svg'
import icon7 from '../../images/icon/m_06.svg'
import icon8 from '../../images/icon/m_07.svg'
import icon9 from '../../images/icon/m_08.svg'
import icon10 from '../../images/icon/m_09.svg'
import icon11 from '../../images/icon/m_10.svg'
import icon12 from '../../images/icon/m_11.svg'
import logo from '../../images/logo/logo-white.svg'
import menuimg from '../../images/gallery/burger-icon.png'
import logo2 from '../../images/logo/logo-black.svg'
import clogo1 from '../../images/logo/client-logo.svg'
import clogo2 from '../../images/logo/client-logo2.svg'
import avatar from '../../images/bg/avatar.png'
import quote from '../../images/icon/quote.png'
import mImg from '../../images/casestudy/mm_img.png'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header4 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <div id="xb-header-area" className="header-area header-style-three header-transparent">
            <div className={`xb-header stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                 <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                <div className="container">
                    <div className="header__wrap ul_li_between">
                        <div className="header-logo">
                            <Link onClick={ClickHandler} to=""><img src={logo} alt="" /></Link>
                        </div>
                        <hr className='header-hr'/>
                        
                        <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                          
                            <div className="xb-header-wrap">
                                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                                    <div className="xb-header-menu-scroll lenis lenis-smooth">
                                        <div className="xb-menu-close xb-hide-xl xb-close icon menu-icon" onClick={() => setMobailState(!mobailActive)}>
                                                                
  <img src={menuimg} />

                                        </div>
                                        {/* <div className="xb-logo-mobile xb-hide-xl">
                                            <Link onClick={ClickHandler} to="/" rel="home"><img src={logo}
                                                alt="" /></Link>
                                        </div> */}
                                        <div className="xb-header-mobile-search xb-hide-xl">
                                          
                                        </div>
                                        <nav className="xb-header-nav">
                                            <MobileMenu />
                                        </nav>
                                    </div>
                                </div>
                                <div className="xb-header-menu-backdrop"></div>
                            </div>
                        </div>
                        <div className="header-bar-mobile side-menu ">
                            <button className="xb-nav-mobile" onClick={() => setMobailState(!mobailActive)}>
                                    <div class="icon" align="center"><div class="bar-1"></div><div class="bar-2"></div></div>
                            </button>
                        </div>
                       
                    </div>
                </div>
                </Fade>
            </div>
        </div>

    )
}

export default Header4;