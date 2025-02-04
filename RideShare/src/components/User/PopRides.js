import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentComponent from '../Payments/PaymentComponent';
import UserNavbar from './UserNavbar';

const PopularRidesUser = () => {
    const [selectedRide, setSelectedRide] = useState(null);
    const [upcomingRides, setUpcomingRides] = useState([]);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track if the user is logged in

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await axios.get('https://localhost:44345/api/Rides');
                console.log("Rides data from API:", response.data);  // Log raw API response data
                
                // Ensure that the 'date' is parsed correctly for comparison
                const currentDate = new Date();
                const filteredRides = response.data.filter(ride => {
                    const rideDate = new Date(ride.date.split(' at ')[0]); // Splitting and parsing only the date part
                    console.log("Ride Date:", rideDate); // Log each ride's date
                    return rideDate > currentDate; // Compare the date with the current date
                });
                console.log("Filtered Rides:", filteredRides);  // Log filtered rides after filtering by date
                setUpcomingRides(filteredRides);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };
        
        fetchRides();
    }, [isUserLoggedIn]);

    useEffect(() => {
        if (selectedRide) {
            console.log("Selected Ride:", selectedRide); // This will log after selecting a ride
        }
    }, [selectedRide]);

    const handleBookNow = (ride) => {
        setSelectedRide(ride);  // Set selected ride when user clicks "Book Now"
    };

    return (
        <>
            <div className="container">
                <h2 className="text-2xl font-bold">Upcoming Rides</h2>
                <div className="rides-grid">
                    {upcomingRides.length > 0 ? (
                        upcomingRides.map((ride, index) => (
                            <div key={index} className="card">
                                <h3 className="font-bold">{ride.route}</h3>
                                <p>Date: {ride.date}</p>
                                <p>Driver: {ride.driverName}</p>
                                <p>Price: ₹{ride.price.toFixed(2)}</p>
                                <p>Rating: {ride.rating}</p>
                                <p>Ride ID: {ride.id}</p>  {/* Display Ride ID */}
                                <button className="book-now-button" onClick={() => handleBookNow(ride)}>Book Now</button>
                            </div>
                        ))
                    ) : (
                        <p>No upcoming rides available.</p>
                    )}
                </div>
                {selectedRide && (
                    <PaymentComponent 
                        amount={selectedRide.price} 
                        rideId={selectedRide.id}  // Ensure rideId is passed correctly
                    />
                )}
            </div>

            <style>
                {`
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                    }

                    .rides-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 20px;
                        padding: 10px;
                    }

                    .card {
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        transition: transform 0.2s;
                    }

                    .card:hover {
                        transform: scale(1.02);
                    }

                    .book-now-button {
                        background-color: #2563eb; /* Blue 600 */
                        color: white;
                        padding: 10px 15px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        text-align: center;
                        display: inline-block;
                        margin-top: 10px;
                        text-decoration: none;
                    }

                    .book-now-button:hover {
                        background-color: #1d4ed8; /* Darker blue on hover */
                    }
                `}
            </style>
        </>
    );
};

export default PopularRidesUser;
