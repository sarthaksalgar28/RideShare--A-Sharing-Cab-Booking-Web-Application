// src/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './forgotPassword.css'; // Optional: Create a CSS file for styling

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email address');
            return;
        } else {
            setError('');
        }

        // Send reset password request to the server
        try {
            const response = await fetch('/api/send-reset-link', { // Adjust the API endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Reset link sent to your email.');
                setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
            } else {
                setError('Failed to send reset link. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#007BFF', color: 'white' }}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="text-black">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-2"
                        >
                            Send Reset Link
                        </button>
                        {message && <p style={{ color: 'green' }}>{message}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;