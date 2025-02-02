import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import UserProfile from './UserProfile';     

const UserNavbar = () => {
    const navigate = useNavigate(); 

    const handleSignup = () => {
        navigate('/login'); // Redirect to login page on logout
    };
    
    const handleLogin = () => {
        navigate('/user-profile'); // Redirect to user profile page
    };
    
    const brandStyle = {
        color: '#007bff', // Blue color
        fontWeight: 'bold', // Bold text
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
            <div className="container">
                <Link className="navbar-brand" to="/search" style={brandStyle}>RideShare</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#userNavbarNav" 
                    aria-controls="userNavbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="userNavbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/search">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/user-rides">Rides</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/user-about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/user-contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="ml-auto ">
                        <button
                            className="btn btn-primary mr-2"
                            onClick={handleLogin} // Redirect to user profile page
                        >
                            Profile
                        </button>
                        <button
                            className="btn btn-primary mr-2"
                            onClick={handleSignup} // Redirect to login page
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;