// src/YourRides.js
import React from 'react';
import UserNavbar from './UserNavbar';

const YourRides = () => {
    // Simulated ride data
    const rides = [
        { id: 1, route: 'Airport', date: '2023-10-01', driver: 'John Doe', price: 25, status: 'successful' },
        { id: 2, route: 'Downtown', date: '2023-10-02', driver: 'Jane Smith', price: 15, status: 'unsuccessful' },
        { id: 3, route: 'Train Station', date: '2023-10-03', driver: 'Alice Johnson', price: 20, status: 'successful' },
    ];

    return (
        <>
            <UserNavbar />
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

                        .status-success {
                            color: #28a745; /* Green for successful */
                        }

                        .status-unsuccessful {
                            color: #dc3545; /* Red for unsuccessful */
                        }
                    `}
                </style>
                <h2 className="text-2xl font-bold">Your Rides</h2>
                <div className="rides-grid">
                    {rides.map((ride) => (
                        <div key={ride.id} className="card">
                            <h3 className="font-bold">{ride.route}</h3>
                            <p>Date: {ride.date}</p>
                            <p>Driver: {ride.driver}</p>
                            <p>Price: ₹{ride.price}</p>
                            <p className={ride.status === 'successful' ? 'status-success' : 'status-unsuccessful'}>
                                {ride.status === 'successful' ? 'Booking Successful' : 'Unsuccessful Booking'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default YourRides;