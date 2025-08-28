import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../aboutpage/About';
import Servicepage from '../HomePage3/Services';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
// import HomePage6 from '../HomePage6/HomePage6';
import ServicePage from '../ServicePage/ServicePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import CaseStudyPage from '../CaseStudyPage/CaseStudyPage';
import CaseStudySingle from '../CaseStudySingle/CaseStudySingle';
import PortfolioSingle from '../PortfolioSingle/PortfolioSingle';
import CareerPage from '../CareerPage/CareerPage';
import CareerSingle from '../CareerSingle/CareerSingle';
import TeamPage from '../TeamPage/TeamPage';
import TermsPage from '../TermsPage/TermsPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';
import HomePage from '../HomePage/HomePage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage5 />} />
          <Route path="home" element={<HomePage4/>} />
          <Route path="about" element={<HomePage2 />} />          
          <Route path="services" element={<Servicepage />} />
          <Route path="about12" element={<HomePage />} /> 
          <Route path="contact" element={<ContactPage />} /> 
          
          
          {/* <Route path="home-6" element={<HomePage6 />} /> */}
          {/* <Route path="home-4" element={<HomePage4 />} />
          <Route path="home-5" element={<HomePage5 />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="casestudy" element={<CaseStudyPage />} />
          <Route path="casestudy-details/:slug" element={<CaseStudySingle />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSingle />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="career-details" element={<CareerSingle />} />
          <Route path="terms-conditions" element={<TermsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />*/}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
