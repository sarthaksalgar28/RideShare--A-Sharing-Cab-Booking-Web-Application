// src/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2 id='Signup'>Sign Up</h2>
            <form>
                <input type="text" placeholder="Name" required style={{ margin: '10px', padding: '10px' }} />
                <br />
                <input type="email" placeholder="Email" required style={{ margin: '10px', padding: '10px' }} />
                <br />
                <input type="password" placeholder="Password" required style={{ margin: '10px', padding: '10px' }} />
                <br />
                <input type="password" placeholder="Confirm Password" required style={{ margin: '10px', padding: '10px' }} />
                <br />
                <button type="submit" style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Sign Up
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;