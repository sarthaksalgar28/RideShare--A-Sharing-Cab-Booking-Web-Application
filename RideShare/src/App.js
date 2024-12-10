import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';

import NavbarWrapper from './components/NavbarWrapper.js';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularRides from './components/PopularRides';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OffersSection from './components/OffersSection';
import NavbarDriver from './components/Driver/NavBarDriver';
import PublishRide from './components/Driver/PublishRide';
import UpcomingRides from './components/Driver/UpcomingRides';

const App = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [distance, setDistance] = useState(null);

    const handleSearch = (fromValue, toValue) => {
        setFrom(fromValue);
        setTo(toValue);
    };

    return (
        <LoadScript googleMapsApiKey=" AIzaSyDrQeNVgH6Jws5AngUuXOwpBMX3bywLWZI" libraries={['places']}>
            <div>
                <NavbarWrapper />
              
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/rides" element={<PopularRides />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/search" element={<><SearchSection onSearch={handleSearch} setDistance={setDistance} /><PopularRides /></>} />
                    <Route path="/contact" element={<ContactUs />} />
                    {/* <Route path="/publish-ride" element={<NavbarDriver />} />  */}
                    <Route path="/publish-ride" element={<PublishRide />} />
                    <Route path="/upcoming-rides" element={<UpcomingRides />} />
                </Routes>
                {/* <OffersSection/> */}
                
                <Footer />
            </div>
        </LoadScript>
    );
};

export default App;