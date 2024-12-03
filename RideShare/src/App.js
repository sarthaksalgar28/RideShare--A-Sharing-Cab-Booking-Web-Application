import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularRides from './components/PopularRides';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <SearchSection />
            <PopularRides />
            <Footer />
        </div>
    );
};

export default App;