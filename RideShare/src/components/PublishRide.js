// src/components/PublishRide.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PublishRide = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [pickupPoint, setPickupPoint] = useState(''); // New state for pickup point
    const [dropOffPoint, setDropOffPoint] = useState(''); // New state for drop-off point
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState(1);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log({
            source,
            destination,
            pickupPoint,
            dropOffPoint,
            date,
            time,
            passengers,
        });
        // Reset the form
        setSource('');
        setDestination('');
        setPickupPoint('');
        setDropOffPoint('');
        setDate('');
        setTime('');
        setPassengers(1);
        
        // Redirect to PointSelectionLandingPage
        navigate('/select-point'); // Change this to the correct path for your PointSelectionLandingPage
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Publish a Ride</h2>
                <form onSubmit={handleSubmit}>
                    {/* Source and Destination Fields Side by Side */}
                    <div className="flex mb-4">
                        <div className="w-1/2 pr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="source">
                                Source
                            </label>
                            <input
                                type="text"
                                id="source"
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                                Destination
                            </label>
                            <input
                                type="text"
                                id="destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>

                    {/* Pickup and Drop-Off Fields Side by Side */}
                    <div className="flex mb-4">
                        <div className="w-1/2 pr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup">
                                Pickup Point
                            </label>
                            <input
                                type="text"
                                id="pickup"
                                value={pickupPoint}
                                onChange={(e) => setPickupPoint(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropoff">
                                Drop-Off Point
                            </label>
                            <input
                                type="text"
                                id="dropoff"
                                value={dropOffPoint}
                                onChange={(e) => setDropOffPoint(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>

                    {/* Date and Time Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                            Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
                            Number of Passengers
                        </label>
                        <input
                            type="number"
                            id="passengers"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            min="1"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Publish Ride
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PublishRide;