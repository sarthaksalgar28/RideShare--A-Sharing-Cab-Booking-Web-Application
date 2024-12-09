// src/components/PointSelectionLandingPage.js
import React, { useState } from 'react';

const PointSelectionLandingPage = () => {
    const [selectedPickupPoint, setSelectedPickupPoint] = useState('');
    const [selectedDropOffPoint, setSelectedDropOffPoint] = useState('');

    const pickupPoints = [
        "IET Main Gate",
        "IET Parking Lot",
        "IET Bus Stop",
        "Gokhale Nagar Square",
        "SWARGATE",
        "PIMPRI",
        "CHINCHWAD",
        "GOA",
        "SILENCE"
    ];

    const dropOffPoints = [
        "SWARGATE",
        "PIMPRI",
        "CHINCHWAD",
        "GOA",
        "SILENCE",
        "IET",
        "Gokhale Nagar",
        "IET Main Gate",
        "IET Parking Lot"
    ];

    const handlePickupChange = (event) => {
        setSelectedPickupPoint(event.target.value);
    };

    const handleDropOffChange = (event) => {
        setSelectedDropOffPoint(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected Pickup Point: ${selectedPickupPoint}\nSelected Drop-Off Point: ${selectedDropOffPoint}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Select Your Points</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {/* Pickup Point Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup">
                            Select Your Pickup Point
                        </label>
                        <select
                            id="pickup"
                            value={selectedPickupPoint}
                            onChange={handlePickupChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            required
                        >
                            <option value="" disabled>Select a pickup point</option>
                            {pickupPoints.map((point, index) => (
                                <option key={index} value={point}>{point}</option>
                            ))}
                        </select>
                    </div>

                    {/* Drop-Off Point Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropoff">
                            Select Your Drop-Off Point
                        </label>
                        <select
                            id="dropoff"
                            value={selectedDropOffPoint}
                            onChange={handleDropOffChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            required
                        >
                            <option value="" disabled>Select a drop-off point</option>
                            {dropOffPoints.map((point, index) => (
                                <option key={index} value={point}>{point}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PointSelectionLandingPage;