import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarDriver from './NavBarDriver';
import axios from 'axios';

const PublishRide = ({ addRide }) => {
    const [driverName, setDriverName] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [pickupPoint, setPickupPoint] = useState('');
    const [dropOffPoint, setDropOffPoint] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [remainingPassengers, setRemainingPassengers] = useState(1);  // Add remaining passengers state
    const [modalMessage, setModalMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();
    const sourceInputRef = useRef(null);
    const destinationInputRef = useRef(null);

    // On passenger count change, update remaining passengers as well
    const handlePassengerChange = (e) => {
        const count = e.target.value;
        setPassengers(count);
        setRemainingPassengers(count); // Set remaining passengers to the same initially
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const driverId = localStorage.getItem('id');  // Fetch driver ID from localStorage
    
        const newRide = {
            driverId: driverId,
            driver: driverName || "Your Driver Name",
            rating: 5.0,
            route: `${source} to ${destination}`,
            date: `${date} at ${time}`,
            price: `${passengers * 100}`,
            passengers: passengers,  // Number of passengers from the input
            remainingPassengers: remainingPassengers,  // Adding the remaining passengers
        };

        setIsLoading(true); 
        
        try {
            // POST the data to your backend API
            await axios.post('https://localhost:44345/api/Rides/publish', newRide);
            setModalMessage('Published Ride successful!');
            setModalVisible(true);

            // Reset form fields
            setDriverName('');
            setSource('');
            setDestination('');
            setPickupPoint('');
            setDropOffPoint('');
            setDate('');
            setTime('');
            setPassengers(1);
            setRemainingPassengers(1);  // Reset remaining passengers on submit

            // Redirect after 2 seconds
            setTimeout(() => {
                navigate('/rides-driver');
            }, 2000);
        } catch (error) {
            setModalMessage('Failed to publish ride. Please try again!');
            setModalVisible(true);
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <NavbarDriver />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Publish a Ride</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Driver's Name Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverName">
                                Driver's Name
                            </label>
                            <input
                                type="text"
                                id="driverName"
                                value={driverName}
                                onChange={(e) => setDriverName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="flex mb-4">
                            <div className="w-1/2 pr-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="source">
                                    Source
                                </label>
                                <input
                                    ref={sourceInputRef}
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
                                    ref={destinationInputRef}
                                    type="text"
                                    id="destination"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </div>

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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropOff">
                                    Drop-Off Point
                                </label>
                                <input
                                    type="text"
                                    id="dropOff"
                                    value={dropOffPoint}
                                    onChange={(e) => setDropOffPoint(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </div>

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
                                disabled={isLoading} // Disable button while loading
                            >
                                {isLoading ? "Publishing..." : "Publish Ride"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal Popup */}
            {modalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg text-center w-80">
                        <img
                            width="50px"
                            src="https://w7.pngwing.com/pngs/709/448/png-transparent-green-check-business-internet-service-organization-computer-software-web-page-green-registration-success-button-web-design-company-text-thumbnail.png"
                            alt="Success"
                            className="mx-auto mb-4"
                        />
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
        </>
    );
};

export default PublishRide;
