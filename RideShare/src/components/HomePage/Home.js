// src/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import QuoteSection from './QuoteSection';
import SafetyTravel from './SafetyTravel';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Travel Together, Save Together</h1>
            <p className="home-paragraph">Find a Ride, Make a Friend</p>
            {/* <QuoteSection /> */}
            

        </div>  
    );
};

export default Home;