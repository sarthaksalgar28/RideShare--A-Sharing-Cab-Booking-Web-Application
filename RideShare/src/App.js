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
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/search" element={<SearchSection onSearch={handleSearch} setDistance={setDistance} />} />
                    </Routes>
                    {distance && <p>Distance: {distance} meters</p>} {/* Display the distance */}
                    {/* <MapComponent /> Add the MapComponent here */}
                    <PopularRides />
                    <Footer />
                </div>
            </Router>
        </LoadScript>
    );
};

export default App;