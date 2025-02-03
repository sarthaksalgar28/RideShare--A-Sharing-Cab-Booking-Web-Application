// UserProfile.js
import React, { useState } from 'react';
import UserNavbar from './UserNavbar'; // Import the UserNavbar component

const UserProfile = () => {
    // State to hold user details
    const [userDetails, setUser ] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        mobileNumber: '',
    });

    const [isEditing, setIsEditing] = useState(false); // State to manage editing mode

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser ((prevDetails) => ({
            ...prevDetails,
            [name]: value, // Update the specific field based on input name
        }));
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev); // Toggle editing mode
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert(`User  Details Updated:\n${JSON.stringify(userDetails, null, 2)}`); // Placeholder for submission logic
        setIsEditing(false); // Exit editing mode
    };

    return (
        <div>
            <UserNavbar /> {/* Include the UserNavbar at the top */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">User  Profile</h1> {/* Centered Title */}
                    <form onSubmit={handleSubmit} className="text-left">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={userDetails.username}
                                onChange={handleInputChange}
                                placeholder="Enter Username"
                                className="border rounded px-3 py-2 w-full"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleInputChange}
                                placeholder="Enter Email"
                                className="border rounded px-3 py-2 w-full"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={userDetails.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Mobile Number"
                                className="border rounded px-3 py-2 w-full"
                                disabled={!isEditing} // Disable input if not in editing mode
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleEditToggle}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                {isEditing ? 'Cancel' : 'Edit'}
                            </button>
                            {isEditing && (
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                                >
                                    Update
                                </button>
                            )}
                        </div>
                    </form>
                    <div className="mt-6 text-left">
                        <h2 className="text-lg font-bold">Current Details:</h2>
                        <p><strong>Username:</strong> {userDetails.username}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                        <p><strong>Mobile Number:</strong> {userDetails.mobileNumber || 'Not provided'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;