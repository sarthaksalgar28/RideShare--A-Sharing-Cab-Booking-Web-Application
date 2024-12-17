
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupPageNavbar from './SignupNavbar';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate email and password
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return; // Stop further execution
        } else {
            setEmailError('');
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return; // Stop further execution
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return; // Stop further execution
        } else {
            setConfirmPasswordError('');
        }

        if (emailRegex.test(email) && password.length >= 8 && password === confirmPassword) {
            // Save user data in session storage
            const user = { name, role, email, password };
            sessionStorage.setItem('user', JSON.stringify(user)); // Store user data in session storage
            
            setModalMessage('Signup Successful!');
            setModalVisible(true); // Show modal on success
        }
    };

    const closeModal = () => {
        setModalVisible(false); // Hide modal
        navigate('/login'); // Redirect to login page when the modal is closed
    };

    return (
        <>
  
            {/* Modal for Success Message */}
            {modalVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
    <div className="flex justify-center mb-4"> {/* Flexbox to center the image */}
        <img
            width="50px"
            src="https://w7.pngwing.com/pngs/709/448/png-transparent-green-check-business-internet-service-organization-computer-software-web-page-green-registration-success-button-web-design-company-text-thumbnail.png"
            alt="Success"
        />
    </div>
    <h1 className="text-xl font-bold text-green-600">{modalMessage}</h1>
    <button
        onClick={closeModal}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    >
        Done
    </button>
</div>

                </div>
            )}

            {/* Main Signup Form */}
            <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#007BFF', color: 'white' }}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="text-black">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select a role</option>
                                <option value="user">User </option>
                                <option value="driver">Driver</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-2"
                            >
                                Sign Up
                            </button>
                            <p className="text-center mt-4">
                                Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
