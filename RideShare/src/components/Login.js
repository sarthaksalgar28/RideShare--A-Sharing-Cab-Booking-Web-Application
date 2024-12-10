import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css'; // Import the CSS file if you are using external CSS

const Login = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Validate email and password
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
        }

        // Hardcoded login details for user interface
        const userInterface = {
            email: 'user@gmail.com',
            password: 'pass1234',
        };

        // Hardcoded login details for driver interface
        const driverInterface = {
            email: 'driver@gmail.com',
            password: 'driver123',
        };

        if (emailRegex.test(email) && password.length >= 8) {
            if (email === userInterface.email && password === userInterface.password) {
                // Redirect to SearchSection
                navigate('/search');
            } else if (email === driverInterface.email && password === driverInterface.password) {
                // Redirect to PublishRide
                navigate('/publish-ride');
            } else {
                alert('Invalid email or password');
            }
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#007BFF', color: 'white' }}>
            <h2 id="login">Login</h2>
            <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    style={{ 
                        margin: '10px', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid white', 
                        color: 'black' // Set font color to black
                    }} 
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    style={{ 
                        margin: '10px', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid white', 
                        color: 'black' // Set font color to black
                    }} 
                />
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
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