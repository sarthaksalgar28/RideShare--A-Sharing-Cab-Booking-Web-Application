// DriverProfile.js
import React, { useState } from 'react';
import NavbarDriver from './NavBarDriver';  // Import the UserNavbar component

const DriverProfile = () => {
    const [showInput, setShowInput] = useState(false);
    const [carNumber, setCarNumber] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('DL123456789'); // Dummy license number
    const [aadharNumber, setAadharNumber] = useState('1234 5678 9012'); // Dummy Aadhar number

    const handleAddDetails = () => {
        setShowInput(true); // Show the input fields and submit button
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'carNumber') setCarNumber(value);
        if (name === 'licenseNumber') setLicenseNumber(value);
        if (name === 'aadharNumber') setAadharNumber(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert(`Details Submitted:\nCar Number: ${carNumber}\nLicense Number: ${licenseNumber}\nAadhar Number: ${aadharNumber}`); // Placeholder for submission logic
        setCarNumber(''); // Clear the input after submission
        setLicenseNumber('DL123456789'); // Reset to dummy value
        setAadharNumber('1234 5678 9012'); // Reset to dummy value
        setShowInput(false); // Hide the input fields and submit button
    };

    return (
        <div>
            <NavbarDriver /> {/* Include the UserNavbar at the top */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Driver Profile</h1> {/* Centered Title */}
                    <div className="text-left">
                        <p className="text-lg"><strong>Driver Name:</strong> John Doe</p>
                        <p className="text-lg"><strong>Email:</strong> john.doe@example.com</p>
                        <p className="text-lg"><strong>Role:</strong> Driver</p>
                        <p className="text-lg"><strong>Car Number:</strong> {carNumber || 'Not provided'}</p>
                        <p className="text-lg"><strong>Driver License Number:</strong> {licenseNumber}</p>
                        <p className="text-lg"><strong>Aadhar Card Number:</strong> {aadharNumber}</p>
                    </div>
                    <div className="mt-4 text-left">
                        <button
                            onClick={handleAddDetails}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Add Vehicle Details
                        </button>
                    </div>
                    {showInput && (
                        <form onSubmit={handleSubmit} className="mt-4">
                            <input
                                type="text"
                                name="carNumber"
                                value={carNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Car Number"
                                className="border rounded px-3 py-2 w-full mb-2"
                                required
                            />
                            <input
                                type="text"
                                name="licenseNumber"
                                value={licenseNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Driver License Number"
                                className="border rounded px-3 py-2 w-full mb-2"
                                required
                            />
                            <input
                                type="text"
                                name="aadharNumber"
                                value={aadharNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Aadhar Card Number"
                                className="border rounded px-3 py-2 w-full mb-2"
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

export default DriverProfile;