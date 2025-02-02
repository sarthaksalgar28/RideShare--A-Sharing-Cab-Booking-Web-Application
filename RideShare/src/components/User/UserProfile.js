// UserProfile.js
import React, { useState } from 'react';
import UserNavbar from './UserNavbar'; // Import the UserNavbar component

const UserProfile = () => {
    const [showInput, setShowInput] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');

    const handleAddMobileNumber = () => {
        setShowInput(true); // Show the textbox and submit button
    };

    const handleInputChange = (event) => {
        setMobileNumber(event.target.value); // Update the mobile number state
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert(`Mobile Number Submitted: ${mobileNumber}`); // Placeholder for submission logic
        setMobileNumber(''); // Clear the input after submission
        setShowInput(false); // Hide the textbox and submit button
    };

    return (
        <div>
            <UserNavbar /> {/* Include the UserNavbar at the top */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">User  Profile</h1> {/* Centered Title */}
                    <div className="text-left">
                        <p className="text-lg"><strong>Username:</strong> JohnDoe</p>
                        <p className="text-lg"><strong>Email:</strong> john.doe@example.com</p>
                        <p className="text-lg"><strong>Role:</strong> User</p>
                    </div>
                    <div className="mt-4 text-left">
                        <button
                            onClick={handleAddMobileNumber}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Add Mobile Number
                        </button>
                    </div>
                    {showInput && (
                        <form onSubmit={handleSubmit} className="mt-4">
                            <input
                                type="text"
                                value={mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Mobile Number"
                                className="border rounded px-3 py-2 w-full"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline mt-2"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;