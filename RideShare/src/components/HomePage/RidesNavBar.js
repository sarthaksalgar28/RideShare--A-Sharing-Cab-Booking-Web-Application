import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const RidesNavBar = () => {
    const navigate = useNavigate(); 
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const handleLogout = () => {
        alert("You have been logged out.");
        sessionStorage.clear(); 
        navigate('/');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close state
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
            <div className="container">
                <Link className="navbar-brand" to="/" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
                    RideShare
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu} 
                    aria-controls="navbarNav" 
                    aria-expanded={isOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/rides">Rides</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/your-rides">Your Rides</Link>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <button
                            className="btn btn-primary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default RidesNavBar;