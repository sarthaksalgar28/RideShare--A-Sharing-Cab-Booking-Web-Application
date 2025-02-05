import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentComponent from '../Payments/PaymentComponent';
import UserNavbar from './UserNavbar';

const PopularRidesUser = () => {
    const [selectedRide, setSelectedRide] = useState(null);
    const [upcomingRides, setUpcomingRides] = useState([]);
    const [userId, setUserId] = useState(null);  // State for userId
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [rideBookings, setRideBookings] = useState({});  // Track successful bookings

    useEffect(() => {
        const uid = localStorage.getItem("id");
        if (uid) {
            setUserId(uid);
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }

        const fetchRides = async () => {
            try {
                const response = await axios.get('https://localhost:44345/api/Rides');
                console.log(response.data);  // Add this to check the structure
                const currentDate = new Date();
                const filteredRides = response.data.filter(ride => {
                    const rideDate = new Date(ride.date.split(' at ')[0]);
                    return rideDate > currentDate;
                });
                setUpcomingRides(filteredRides);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };

        fetchRides();
    }, []);

    const handleBookNow = (ride) => {
        setSelectedRide(ride);
    };

    const handlePaymentSuccess = (rideId) => {
        setRideBookings((prevBookings) => ({
            ...prevBookings,
            [rideId]: (prevBookings[rideId] || 0) + 1
        }));

        // Refresh rides to get updated remaining passengers
        fetchRides();
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
                                <p>Remaining Seats: {ride.remainingPassengers}</p>

                                <button
                                    className="book-now-button"
                                    onClick={() => handleBookNow(ride)}
                                    disabled={ride.remainingPassengers <= 0}
                                >
                                    {ride.remainingPassengers > 0 ? 'Book Now' : 'No Seats Left'}
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No upcoming rides available.</p>
                    )}
                </div>

                {selectedRide && (
                    <PaymentComponent
                        amount={selectedRide.price}
                        rideId={selectedRide.id}
                        userId={userId}
                        onPaymentSuccess={() => handlePaymentSuccess(selectedRide.id)}  // Handle successful payment
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
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        gap: 30px;
                        padding: 40px;
                    }

                    .card {
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        transition: transform 0.2s;
                        display: flex;
                        flex-direction: column;  /* Flexbox for vertical alignment */
                        justify-content: space-between;  /* Space between content and button */
                        height: 100%;
                        width:350px;
                    }

                    .card:hover {
                        transform: scale(1.02);
                    }

                    .book-now-button {
                        background-color: #2563eb;
                        color: white;
                        padding: 12px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        text-align: center;
                        display: inline-block;
                        margin-top: auto;  /* Pushes the button to the bottom */
                    }

                    .book-now-button:hover {
                        background-color: #1d4ed8;
                    }

                    .book-now-button:disabled {
                        background-color: #d1d5db;
                        cursor: not-allowed;
                    }

                    /* Media queries for smaller screens */
                    @media (max-width: 768px) {
                        .container {
                            padding: 15px;
                        }

                        .rides-grid {
                            grid-template-columns: 1fr;
                            gap: 15px;
                        }

                        .book-now-button {
                            padding: 10px 15px;
                            font-size: 14px;
                        }

                        .card {
                            padding: 15px;
                        }
                    }

                    @media (max-width: 480px) {
                        .book-now-button {
                            padding: 8px 12px;
                            font-size: 12px;
                        }

                        .card {
                            padding: 10px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default PopularRidesUser;
