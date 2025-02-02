import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import ProtectedRoute from './components/ProtectedRoute';
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
// import PopularRidesUser  from './components/User/PopularRidesUser ';
// import AboutUser  from './components/User/AboutUser ';
// import ContactUser  from './components/User/ContactUser ';
import PopularRidesDriver from './components/Driver/PopularRidesDriver';
import ContactDriver from './components/Driver/ContactDriver';
import AboutDriver from './components/Driver/AboutDriver';
import Refer from './components/HomePage/Refer';
import Safety from './components/HomePage/Safety';
import Login1 from './components/Login/login1';
import AboutUser from './components/User/AboutUser';
import ContactUser from './components/User/ContactUser';

const App = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [distance, setDistance] = useState(null);
    const [user, setUser ] = useState(null); // State to hold user information
    const navigate = useNavigate();

    // Use the custom hook to manage rides
    const { rides, addRide } = useRides();

    const handleSearch = (fromValue, toValue) => {
        setFrom(fromValue);
        setTo(toValue);
    };

    // Check for user authentication on app load
    useEffect(() => {
        const storedUser  = localStorage.getItem('user');
        if (storedUser ) {
            setUser (JSON.parse(storedUser )); // Set user state from local storage
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data from local storage
        setUser (null); // Clear user state
        navigate('/login'); // Redirect to login page
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDrQeNVgH6Jws5AngUuXOwpBMX3bywLWZI" libraries={['places']}>
            <div>
            {/* {user && user.role === 'driver' ? (
                    <NavbarDriver onLogout={handleLogout} />
                ) : (
                    <NavbarWrapper onLogout={handleLogout} />
                )} */}
                {/* Render Navbar based on user role */}
                {/* {user ? (user.role === 'driver' ? <NavbarDriver onLogout={handleLogout} /> : <NavbarWrapper onLogout={handleLogout} />) : <NavbarWrapper />} */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setUser ={setUser } />} />

                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/rides" element={<PopularRides rides={rides} />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/search" element={<ProtectedRoute element={
                        <>
                            <SearchSection onSearch={handleSearch} setDistance={setDistance} />
                            <PopRides rides={rides} />
                        </>
                    } />}></Route>
                    <Route path="/rides" element={<ProtectedRoute element={<PopularRides rides={rides} />} user={user} />} />
                    <Route path="/your-rides" element={<ProtectedRoute element={<YourRides />} user={user} />} />
                    <Route path="/rides-driver" element={<ProtectedRoute element={<PopularRidesDriver />} user={user} />} />
                    <Route path="/contact-driver" element={<ProtectedRoute element={<ContactDriver />} user={user} />} />
                    <Route path="/about-driver" element={<ProtectedRoute element={<AboutDriver />} user={user} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/publish-ride" element={< ProtectedRoute element={<PublishRide addRide={addRide} />} user={user} />} />
                    <Route path="/upcoming-rides" element={<ProtectedRoute element={<UpcomingRides />} user={user} />} />
                    <Route path="/book-now" element={<ProtectedRoute element={<PaymentComponent />} user={user} />} />
                    <Route path="/safety" element={<ProtectedRoute element={<Safety />} user={user} />} />
                    <Route path="/refer" element={<ProtectedRoute element={<Refer />} user={user} />} />
                    <Route path="/user-rides" element={<ProtectedRoute element={<YourRides />} user={user} />} />
                    <Route path="/user-about" element={<ProtectedRoute element={<AboutUser  />} user={user} />} />
                    <Route path="/user-contact" element={<ProtectedRoute element={<ContactUser  />} user={user} />} />
                </Routes>

                <Footer />
            </div>
        </LoadScript>
    );
};

export default App;