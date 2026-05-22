import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomePage2 from '../aboutpage/About';
import Analyse from '../services/analyse';
import Govern from '../services/govern';
import Insure from '../services/insure';
import Defend from '../services/defend';
import HotLine from '../Hotline/Hotline';
import HomePage from '../HomePage/HomePage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import TermsPage from '../PrivacyPage/Terms';
import BlogPage from '../BlogPage/BlogPage'
import BlogDetail from '../BlogDetails/BlogDetails'
import ContactPage from '../ContactPage/ContactPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="hotline" element={<HotLine/>} />
          <Route path="about" element={<HomePage2 />} />          
          <Route path="analyse" element={<Analyse />} />
          <Route path="govern" element={<Govern />} /> 
          <Route path="defend" element={<Defend />} /> 
          <Route path="insure" element={<Insure />} /> 
          <Route path="contact" element={<ContactPage />} />  
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="threat" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetail />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
