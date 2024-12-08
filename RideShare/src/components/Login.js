// src/Login.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css'; // Import the CSS file if you are using external CSS

const Login = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Here you can add your login logic (e.g., API call)
        navigate('/search'); // Redirect to the SearchSection
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#007BFF', color: 'white' }}>
            <h2 id="login">Login</h2>
            <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function */}
                <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    style={{ 
                        margin: '10px', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid white', 
                        color: 'black' // Set font color to black
                    }} 
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    style={{ 
                        margin: '10px', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid white', 
                        color: 'black' // Set font color to black
                    }} 
                />
                <br />
                <button 
                    type="submit" 
                    style={{ 
                        backgroundColor: 'white', 
                        color: '#007BFF', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px' 
                    }}
                >
                    Login
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/signup" style={{ color: 'white' }}>Sign up</Link>
            </p>
        </div>
    );
};

export default Login;