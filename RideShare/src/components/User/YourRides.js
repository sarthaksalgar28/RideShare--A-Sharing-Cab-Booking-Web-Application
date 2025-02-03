import React, { useEffect, useState } from "react";
import axios from "axios";

const YourRides = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const fetchUserRides = async () => {
            try {
                const response = await axios.get("https://localhost:44345/api/Rides/myrides", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`  // Fetch token from localStorage
                    }
                });
                setRides(response.data);
            } catch (error) {
                console.error("Error fetching rides:", error);
            }
        };

        fetchUserRides();
    }, []);

    return (
        <div>
            <h1>Your Rides</h1>
            {rides.length > 0 ? (
                <ul>
                    {rides.map(ride => (
                        <li key={ride.RideId}>
                            <p>Route: {ride.Route}</p>
                            <p>Date: {ride.Date}</p>
                            <p>Price: ₹{ride.Price}</p>
                            <p>Driver: {ride.DriverName}</p>
                            <p>Payment Status: {ride.PaymentStatus}</p>
                            <p>Amount Paid: ₹{ride.PaidAmount}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rides booked yet.</p>
            )}
        </div>
    );
};

export default YourRides;
