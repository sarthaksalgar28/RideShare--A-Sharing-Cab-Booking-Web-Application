
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarDriver from './NavBarDriver';

const PublishRide = ({ addRide }) => {
    const [driverName, setDriverName] = useState(''); // State for driver's name
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [pickupPoint, setPickupPoint] = useState('');
    const [dropOffPoint, setDropOffPoint] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [modalMessage, setModalMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    
    const navigate = useNavigate();
    const sourceInputRef = useRef(null);
    const destinationInputRef = useRef(null);

    useEffect(() => {
        const sourceAutocomplete = new window.google.maps.places.Autocomplete(sourceInputRef.current, {
            types: ['geocode'],
        });

        const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationInputRef.current, {
            types: ['geocode'],
        });

        sourceAutocomplete.addListener('place_changed', () => {
            const place = sourceAutocomplete.getPlace();
            if (place && place.geometry) {
                setSource(place.formatted_address);
            }
        });

        destinationAutocomplete.addListener('place_changed', () => {
            const place = destinationAutocomplete.getPlace();
            if (place && place.geometry) {
                setDestination(place.formatted_address);
            }
        });

        return () => {
            if (sourceInputRef.current) {
                window.google.maps.event.clearInstanceListeners(sourceInputRef.current);
            }
            if (destinationInputRef.current) {
                window.google.maps.event.clearInstanceListeners(destinationInputRef.current);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRide = {
            driver: driverName || "Your Driver Name", // Use the driver's name from the input
            rating: 5.0,
            route: `${source} to ${destination}`,
            date: `${date} at ${time}`,
            price: `${passengers * 100}rs`,
        };

        addRide(newRide);

        // Reset form fields
        setDriverName('');
        setSource('');
        setDestination('');
        setPickupPoint('');
        setDropOffPoint('');
        setDate('');
        setTime('');
        setPassengers(1);

        // Show modal with success message
        setModalMessage('Published Ride successful!');
        setModalVisible(true);

        // Navigate after 2 seconds to allow the user to see the modal
        setTimeout(() => {
            navigate('/rides');
        }, 2000);
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
                            >
                                Publish Ride
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
