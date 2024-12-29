// src/components/YourRides.js
import React from 'react';
import PropTypes from 'prop-types';

const YourRides = ({ rides }) => {
    // Ensure rides is an array
    if (!rides || !Array.isArray(rides) || rides.length === 0) {
        return <p>No rides booked yet.</p>; // Display a message if no rides are available
    }

    return (
        <div className="container">
            <h2 className="text-2xl font-bold">Your Rides</h2>
            <div className="rides-grid">
                {rides.map((ride) => (
                    <div key={ride.paymentId} className="card">
                        <h3 className="font-bold">{ride.route}</h3>
                        <p>Date: {ride.date}</p>
                        <p>Driver: {ride.driver}</p>
                        <p>Price: ₹{ride.price}</p>
                        <p
                            className={
                                ride.status === 'successful'
                                    ? 'status-success'
                                    : 'status-unsuccessful'
                            }
                        >
                            {ride.status === 'successful'
                                ? 'Booking Successful'
                                : 'Unsuccessful Booking'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

YourRides.propTypes = {
    rides: PropTypes.array.isRequired, // Ensure rides is an array
};

export default YourRides;
