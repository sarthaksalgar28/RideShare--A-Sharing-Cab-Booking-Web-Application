
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';

// Import components
import NavbarWrapper from './components/NavbarWrapper';
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
import useRides from './ridesData'; // Import the custom hook for rides
import SignupNavbar from './components/SignupNavbar';
import ProtectedRoute from './components/NavigateAuth/ProtectedRoute'; // Import the ProtectedRoute component
import { useAuth } from './components/NavigateAuth/AuthContext'; // Import the useAuth hook

const App = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [distance, setDistance] = useState(null);
    
    // Use the custom hook to manage rides
    const { rides, addRide } = useRides();
    const { isAuthenticated } = useAuth(); // Get authentication status

    const handleSearch = (fromValue, toValue) => {
        setFrom(fromValue);
        setTo(toValue);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDrQeNVgH6Jws5AngUuXOwpBMX3bywLWZI" libraries={['places']}>
            <div>
                <NavbarWrapper />
              
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/rides" element={<PopularRides rides={rides} />} />
                    
                    <Route path="/search" element={
                        <ProtectedRoute>
                            <SearchSection onSearch={handleSearch} setDistance={setDistance} />
                            <PopularRides rides={rides} />
                        </ProtectedRoute>
                    } />
                    
                    {/* Protected Routes */}
                    <Route path="/publish-ride" element={
                        <ProtectedRoute>
                            <PublishRide addRide={addRide} />
                        </ProtectedRoute>
                    } />
                    <Route path="/upcoming-rides" element={
                        <ProtectedRoute>
                            <UpcomingRides />
                        </ProtectedRoute>
                    } />
                </Routes>
                
                <Footer />
            </div>
        </LoadScript>
    );
};

export default App;