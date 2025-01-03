import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';

// Import components
import NavbarWrapper from './components/HomePage/NavbarWrapper';
import HeroSection from './components/HomePage/HeroSection';
import SearchSection from './components/User/SearchSection';
import PopularRides from './components/User/PopularRides';
import Footer from './components/HomePage/Footer';
import Home from './components/HomePage/Home';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import AboutUs from './components/HomePage/AboutUs';
import ContactUs from './components/HomePage/ContactUs';
import OffersSection from './components/User/OffersSection';
import NavbarDriver from './components/Driver/NavBarDriver';
import PublishRide from './components/Driver/PublishRide';
import UpcomingRides from './components/Driver/UpcomingRides';
import BookNow from './components/User/BookNow'; // Import the Book Now component
import useRides from './ridesData'; // Import the custom hook for rides
import SignupNavbar from './components/SignUp/SignupNavbar';
import ForgotPassword from './components/Login/ForgotPassword';
import Page1 from './components/HomePage/Page1';    
import QuoteSection from './components/HomePage/QuoteSection';
import TermsAndPolicy from './components/HomePage/TermsAndPolicy';


import Search from './components/HomePage/Search';

import YourRides from './components/User/YourRides';
import PaymentComponent from './components/Payments/PaymentComponent';
import PopRides from './components/User/PopRides';
import PopularRidesUser from './components/User/PopularRidesUser';
import AboutUser from './components/User/AboutUser';
import ContactUser from './components/User/ContactUser';
import PopularRidesDriver from './components/Driver/PopularRidesDriver';
import ContactDriver from './components/Driver/ContactDriver';
import AboutDriver from './components/Driver/AboutDriver';
import Refer from './components/HomePage/Refer';
import Safety from './components/HomePage/Safety';


const App = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [distance, setDistance] = useState(null);
    
    // Use the custom hook to manage rides
    const { rides, addRide } = useRides();

    const handleSearch = (fromValue, toValue) => {
        setFrom(fromValue);
        setTo(toValue);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDrQeNVgH6Jws5AngUuXOwpBMX3bywLWZI" libraries={['places']}>
            <div>
                {/* <NavbarWrapper /> */}
              
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/slider" element={<Slider />} /> */}
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/rides" element={<PopularRides rides={rides} />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/search" element={
                        <>
                            <SearchSection onSearch={handleSearch} setDistance={setDistance} />
                            <PopRides rides={rides} />
                        </>
                    } />
                    <Route path="/your-rides" element={<YourRides/>} />
                    <Route path="/rides-user" element={<PopularRidesUser/>} />
                    <Route path="/contact-user" element={<ContactUser/>} />
                    <Route path="/about-user" element={<AboutUser/>} />
                    <Route path="/rides-driver" element={<PopularRidesDriver/>} />
                    <Route path="/contact-driver" element={<ContactDriver/>} />
                    <Route path="/about-driver" element={<AboutDriver/>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/publish-ride" element={<PublishRide addRide={addRide} />} />
                    <Route path="/upcoming-rides" element={<UpcomingRides />} />
                    <Route path="/book-now" element={<PaymentComponent />} /> 
                    <Route path="/safety" element={<Safety />} />
                    <Route path="/refer" element={<Refer />} />
                    
                    {/* Add the Book Now route */}

                    <Route path="/book-now" element={<PaymentComponent />} /> {/* Add the Book Now route */}
                    <Route path="/TermsAndConditoins" element={<TermsAndPolicy/>} />
                    

                </Routes>
                
                <Footer />
            </div>
        </LoadScript>
    );
};

export default App;