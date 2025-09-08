import React from 'react';
import { Link } from 'react-router-dom';
import flower from '../../../images/icon/flower-icon.svg';
import brand1 from '../../../images/brand/logo01.png';
import brand2 from '../../../images/brand/logo02.png';
import brand3 from '../../../images/brand/logo03.png';
import brand4 from '../../../images/brand/logo04.png';
import brand5 from '../../../images/brand/logo05.png';
import brand6 from '../../../images/brand/logo06.png';
import brand7 from '../../../images/brand/logo07.png';
import brand8 from '../../../images/brand/logo08.png';
import bgimg  from '../../../images/gallery/Asset 29.svg'
import bgimg2  from '../../../images/gallery/Asset 28.svg'
import bgimg3  from '../../../images/gallery/Asset 30.svg'
import bgimg4  from '../../../images/bg/scroll-lockimg.svg'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const BrandSection = () => {

  return (
    <section className="brand pb-140" style={{ backgroundColor: "#000000" }}>
      <div className="container">
       
        <div className="xb-brand-wrap">
          <div className="xb-brand-item">
           
            <div className="xb-brand-single xb-brand-hover">
         <Link onClick={ClickHandler}  to="/analyse" >
                           
                <img  src={bgimg2} alt="Shopify" />
                        </Link>
          
            </div>
            <div className="xb-brand-single xb-brand-hover">
             <Link onClick={ClickHandler} to="/govern" >
                           
                <img src={bgimg} alt="Shopify" />
                        </Link>
              
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link onClick={ClickHandler}  to="/insure" >
                           
                <img src={bgimg3} alt="Shopify" />
                        </Link>
             
            </div>
            <div className="xb-brand-single xb-brand-hover">
             
               <Link onClick={ClickHandler} to="/defend" >
                           
                <img src={bgimg4} alt="Shopify" />
                        </Link>
           
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
