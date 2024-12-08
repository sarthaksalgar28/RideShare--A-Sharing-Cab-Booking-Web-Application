// src/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file if you are using external CSS

const Signup = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#007BFF', color: 'white' }}>
            <h2 id='Signup'>Sign Up</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="Name" 
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
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
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
                    Sign Up
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login" style={{ color: 'white' }}>Login</Link>
            </p>
        </div>
    );
};

export default Signup;