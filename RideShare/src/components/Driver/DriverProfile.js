// DriverProfile.js
import React, { useState } from 'react';
import NavbarDriver from './NavBarDriver'; // Import the NavbarDriver component

const DriverProfile = () => {
    // State to hold driver details
    const [driverDetails, setDriverDetails] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        carNumber: '',
        licenseNumber: 'DL123456789', // Dummy license number
        aadharNumber: '1234 5678 9012', // Dummy Aadhar number
        mobileNumber: '', // Added mobile number field
    });

    const [isEditing, setIsEditing] = useState(false); // State to manage editing mode

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDriverDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value, // Update the specific field based on input name
        }));
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev); // Toggle editing mode
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert(`Driver Details Updated:\n${JSON.stringify(driverDetails, null, 2)}`); // Placeholder for submission logic
        setIsEditing(false); // Exit editing mode
    };

    return (
        <div>
            <NavbarDriver /> {/* Include the NavbarDriver at the top */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 mb-4 w-full max-w-lg border border-gray-300"> {/* Added border class */}
                    <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Driver Profile</h1> {/* Centered Title */}
                    <form onSubmit={handleSubmit} className="text-left">
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                Driver Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={driverDetails.name}
                                onChange={handleInputChange}
                                placeholder="Enter Driver Name"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={driverDetails.email}
                                onChange={handleInputChange}
                                placeholder="Enter Email"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="mobileNumber">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={driverDetails.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Mobile Number"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="carNumber">
                                Car Number
                            </label>
                            <input
                                type="text"
                                name="carNumber"
                                value={driverDetails.carNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Car Number"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!isEditing} // Disable input if not in editing mode
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="licenseNumber">
                                Driver License Number
                            </label>
                            <input
                                type="text"
                                name="licenseNumber"
                                value={driverDetails.licenseNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Driver License Number"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="aadharNumber">
                                Aadhar Card Number
                            </label>
                            <input
                                type="text"
                                name="aadharNumber"
                                value={driverDetails.aadharNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Aadhar Card Number"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!isEditing} // Disable input if not in editing mode
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleEditToggle}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-200"
                            >
                                {isEditing ? 'Cancel' : 'Edit'}
                            </button>
                            {isEditing && (
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline transition duration-200"
                                >
                                    Update
                                </button>
                            )}
                        </div>
                    </form>
                    <div className="mt-6 text-left">
                        <h2 className="text-lg font-bold">Current Details:</h2>
                        <p><strong>Driver Name:</strong> {driverDetails.name}</p>
                        <p><strong>Email:</strong> {driverDetails.email}</p>
                        <p><strong>Mobile Number:</strong> {driverDetails.mobileNumber || 'Not provided'}</p>
                        <p><strong>Car Number:</strong> {driverDetails.carNumber || 'Not provided'}</p>
                        <p><strong>Driver License Number:</strong> {driverDetails.licenseNumber}</p>
                        <p><strong>Aadhar Card Number:</strong> {driverDetails.aadharNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverProfile;