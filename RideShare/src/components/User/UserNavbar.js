import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for toggler functionality

const UserNavbar = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/login'); // Redirect to login page on logout
    };

    const handleLogin = () => {
        navigate('/userprofile'); // Redirect to user profile page
    };

    const handleLogout = () => {
        localStorage.removeItem('id');
        navigate('/login');
    };
    

    // Custom style for brand text
    const brandStyle = {
        color: '#007bff', // Blue color
        fontWeight: 'bold',
        fontSize: '1.5rem',
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/search" style={brandStyle}>RideShare</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"  // Updated for Bootstrap 5
                    data-bs-target="#userNavbarNav" // Updated for Bootstrap 5
                    aria-controls="userNavbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="userNavbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user-rides">Rides</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user-about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user-contact">Contact Us</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <button
                            className="btn btn-outline-primary me-2"
                            onClick={handleLogin}
                        >
                            Profile
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleLogout}
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
