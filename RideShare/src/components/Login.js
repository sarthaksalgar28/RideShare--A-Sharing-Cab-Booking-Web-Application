// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" required style={{ margin: '10px', padding: '10px' }} />
                <br />
                <input type="password" placeholder="Password" required style={{ margin: '10px', padding: '10px' }} />
                <br />
                <button type="submit" style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Login
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
};

export default Login;