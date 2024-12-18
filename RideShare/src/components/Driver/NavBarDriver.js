// src/components/NavbarDriver.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const NavbarDriver = () => {
    // Define a custom style for the brand text
    const brandStyle = {
        color: '#007bff', // Replace with your desired blue color
        fontWeight: 'bold', // Make the text bold
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
            <div className="container">
                <Link className="navbar-brand" to="/publish-ride" style={brandStyle}>RideShare</Link> {/* Apply inline style */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/publish-ride">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/rides-driver">Rides</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/about-driver">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/contact-driver">Contact Us</Link>
                        </li>
                    </ul>
                   
                    <div className="ml-auto">
    <Link className="btn btn-primary" to="/">Logout</Link>
    <Link className="btn btn-primary ml-2" to="/publish-ride">Publish a Ride</Link> {/* Added ml-2 for spacing */}
</div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDriver;