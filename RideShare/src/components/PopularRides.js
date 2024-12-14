// src/PopularRides.js
import React, { useState } from 'react';

const PopularRides = ({ rides = [], showUsername = false }) => {
    const user = JSON.parse(sessionStorage.getItem('user')); // Retrieve user data from session storage
    const username = user ? user.name : 'Driver'; // Default to 'Driver' if no user is logged in

    // State to manage available spots for each ride
    const initialSpots = rides.map(ride => ({ id: ride.id, spots: 4 })); // Assuming each ride starts with 4 spots
    const [availableSpots, setAvailableSpots] = useState(initialSpots);

    const handleBooking = (rideId) => {
        setAvailableSpots(prevSpots => 
            prevSpots.map(spot => 
                spot.id === rideId && spot.spots > 0 
                    ? { ...spot, spots: spot.spots - 1 } // Decrease spots for the specific ride
                    : spot // Keep the other rides unchanged
            )
        );
    };

    // Function to render circles based on available spots
    const renderSpotCircles = (spots) => {
        const circles = [];
        for (let i = 0; i < 4; i++) {
            circles.push(
                <div 
                    key={i} 
                    className={`w-4 h-4 rounded-full border-2 ${i < spots ? 'bg-gray-800' : 'bg-white border-gray-800'}`} 
                />
            );
        }
        return <div className="flex space-x-1">{circles}</div>;
    };

    return (
        <section id="Rides" className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Popular Rides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rides.length > 0 ? (
                        rides.map((ride, index) => {
                            // Find the available spots for the current ride
                            const rideSpots = availableSpots.find(spot => spot.id === ride.id)?.spots || 0;

                            return (
                                <div key={ride.id} className="bg-white shadow-md rounded-lg p-4">
                                    <div className="flex items-center mb-4">
                                        <img
                                            alt="Profile picture of the driver"
                                            className="w-12 h-12 rounded-full mr-4"
                                            src="https://storage.googleapis.com/a1aa/image/ImxifoeQiAuc9UQR8c7JdbMQ7tOWJ1Cc2rqVjgDHbH4EFG3TA.jpg"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">{showUsername ? username : 'Driver'}</h3>
                                            <p className="text-gray-600">{ride.rating} <i className="fas fa-star text-yellow-500"></i></p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-700"><i className="fas fa-map-marker-alt text-blue-600"></i> {ride.route}</p>
                                        <p className="text-gray-700"><i className="fas fa-calendar-alt text-blue-600"></i> {ride.date}</p>
                                        <div className="flex items-center">
                                            {renderSpotCircles(rideSpots)} {/* Render circles for available spots */}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold">{ride.price}</p>
                                        <button 
                                            className="bg-blue-600 text-white px-4 py-2 rounded" 
                                            onClick={() => handleBooking(ride.id)} 
                                            disabled={rideSpots === 0} // Disable button if no spots are available
                                        >
                                            {rideSpots > 0 ? 'Book Now' : 'Fully Booked'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No rides available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PopularRides;


