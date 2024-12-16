// src/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import the CSS file
import QuoteSection from './QuoteSection';
import Search from './Search';
import Page1 from './Page1';
import OffersSection from '../User/OffersSection';

const Home = () => {
    return (
      <>
        <div className="home-container"> {/* Added class here */}
          
            <h1 className="home-title">Travel Together, Save Together</h1>
            <p className="home-paragraph">Find a Ride, Make a Friend</p>
           
            {/* Assuming you want to include this as well */}
        </div>
         <Search />
        <Page1/>
        <OffersSection/>
        <QuoteSection/>
         </>
    );
};

export default Home;