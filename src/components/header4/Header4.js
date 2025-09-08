import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import logo from '../../images/logo/logo-png.png';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header4 = () => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="xb-header-area"
      className={`header-area header-style-three header-transparent ${
        isSticky ? "is-sticky" : ""
      }`}
    >
      <div className="xb-header">
        <div className="container">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="header-logo">
              <Link onClick={ClickHandler} to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            <hr className="header-hr" />

            {/* Desktop Menu */}
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className="header-bar-mobile side-menu">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobailState(!mobailActive)}
              >
                <svg
                  className={`ham hamRotate ham3 ${mobailActive ? "active" : ""}`}
                  viewBox="0 0 100 100"
                  width="80"
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 
                       0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 
                       -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                  />
                  <path className="line middle" d="m 30,50 h 40" />
                  <path
                    className="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 
                       15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 
                       -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 
                       -18.435284,17.125656 l 0.252538,40"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header4;
