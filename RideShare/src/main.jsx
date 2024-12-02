import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularRides from './components/PopularRides';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <SearchSection />
            <PopularRides />
            <Footer />
        </>
    );
};

export default App;