import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomePage2 from '../aboutpage/About';
import Analyse from '../HomePage3/analyse';
import Govern from '../HomePage3/govern';
import Insure from '../HomePage3/insure';
import Defend from '../HomePage3/defend';
import HotLine from '../Hotline/Hotline';
import HomePage5 from '../HomePage5/HomePage5';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import TermsPage from '../PrivacyPage/Terms';

import ContactPage from '../ContactPage/ContactPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage5 />} />
          <Route path="hotline" element={<HotLine/>} />
          <Route path="about" element={<HomePage2 />} />          
          <Route path="analyse" element={<Analyse />} />
          <Route path="govern" element={<Govern />} /> 
          <Route path="defend" element={<Defend />} /> 
          <Route path="insure" element={<Insure />} /> 
          <Route path="contact" element={<ContactPage />} />  
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
