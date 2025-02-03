// src/PopularRides.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentComponent from '../Payments/PaymentComponent';
import UserNavbar from './UserNavbar';

const PopularRidesUser = () => {
    const [selectedRide, setSelectedRide] = useState(null);
    const [upcomingRides, setUpcomingRides] = useState([]);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await axios.get('https://localhost:44345/api/Rides');
                setUpcomingRides(response.data);
            } catch (error) {
                console.error('Error fetching upcoming rides:', error);
            }
        };

        fetchRides();
    }, []);

    const handleBookNow = (ride) => {
        setSelectedRide(ride);
    };

    return (
        <>
            
            <div className="container">
                <style>
                    {`
                        .container {
                            max-width: 1200px;
                            margin: 0 auto;
                            padding: 20px;
                        }

                        h2 {
                            color: #007bff;
                            margin-bottom: 20px;
                        }

                        .rides-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                            gap: 20px;
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

                        .font-bold {
                            font-weight: bold;
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

                        .route {
                            color: #2563eb; /* Blue 600 */
                        }
                    `}
                </style>
                <h2 className="text-2xl font-bold">Upcoming Rides</h2>
                <div className="rides-grid">
                    {upcomingRides && upcomingRides.length > 0 ? (
                        upcomingRides.map((ride, index) => (
                            <div key={index} className="card">
                            <h3 className="font-bold route">{ride.route}</h3>
                             <p>Date: {ride.date}</p>
                             <p>Driver: {ride.driverName}</p> {/* Driver name should be present here */}
                             <p>Price: {ride.price.toFixed(2)}</p>
                             
                             <button className="book-now-button" onClick={() => handleBookNow(ride)}>Book Now</button>
                            </div>

                        ))
                    ) : (
                        <p>No upcoming rides available.</p>
                    )}
                </div>
                {selectedRide && (
                    <PaymentComponent amount={selectedRide.price} />
                )}
            </div>
        </>
    );
};

export default PopularRidesUser;
