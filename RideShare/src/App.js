// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import { LoadScript } from '@react-google-maps/api'; // Import LoadScript for Google Maps

import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularRides from './components/PopularRides';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent'; // Import the MapComponent
import Home from './components/Home'; // Ensure you import Home
import Login from './components/Login'; // Ensure you import Login
import Signup from './components/Signup'; // Ensure you import Signup
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OffersSection from './components/OffersSection';
import NavbarDriver from './components/NavBarDriver';
import PublishRide from './components/PublishRide';
import UpcomingRides from './components/UpcomingRides';
import PointSelectionLandingPage from './components/PointSelectionLandingPage';


const App = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [distance, setDistance] = useState(null);

    const handleSearch = (fromValue, toValue) => {
        setFrom(fromValue);
        setTo(toValue);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDrQeNVgH6Jws5AngUuXOwpBMX3bywLWZI" libraries={['places']}>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Home Page */}
                        <Route path="/login" element={<Login />} /> {/* Login Page */}
                        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
                        <Route path="/rides" element={<PopularRides />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/search" element={<><SearchSection onSearch={handleSearch} setDistance={setDistance} /><PopularRides /></>} />
                    </Routes>
                    <OffersSection />
                    <NavbarDriver /> {/* Moved NavbarDriver here to ensure it is always visible */}
                    <Routes>
                        <Route path="/publish-ride" element={<PublishRide />} /> {/* Route for PublishRide */}
                        <Route path="/select-point" element={<PointSelectionLandingPage />} /> {/* Route for Point Selection */}
                        </Routes>
                    <UpcomingRides />
                    <PointSelectionLandingPage />
                    
                    <Footer />
                </div>
            </Router>
        </LoadScript>
    );
};

export default App;