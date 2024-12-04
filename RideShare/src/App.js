// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularRides from './components/PopularRides';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent'; // Import the MapComponent

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <SearchSection />
            <MapComponent /> {/* Add the MapComponent here */}
            <PopularRides />
            <Footer />
        </div>
    );
};

export default App;