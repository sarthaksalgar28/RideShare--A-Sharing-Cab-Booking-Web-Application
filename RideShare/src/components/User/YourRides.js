import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";

const YourRides = () => {
    const [paymentDetails, setPaymentDetails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserPaymentDetails = async () => {
            try {
                const userId = localStorage.getItem("id"); // Get userId from localStorage
                if (!userId) {
                    console.error("User is not logged in");
                    setError("User is not logged in");
                    return;
                }

                // Fetch payment details for the user
                const response = await axios.get(
                    `https://localhost:44345/${userId}`  // Correct API endpoint
                );

                // Set payment details to the state
                setPaymentDetails(response.data); 
            } catch (error) {
                console.error("Error fetching payment details:", error);
                setError("Error fetching payment details");
            }
        };

        fetchUserPaymentDetails();
    }, []);

    // Function to determine the text color based on payment status
    const getStatusStyle = (status) => {
        if (status.toLowerCase() === "success") {
            return { color: "#4CAF50" };  // Green text for success
        }
        return { color: "#1D4ED8" };  // Blue text for other statuses
    };

    return (
        <>
        <UserNavbar />
        <div className="payment-container">
            <h1>Your Payment Details</h1>
            {error && <p className="error-message">{error}</p>}
            {paymentDetails.length > 0 ? (
                <ul className="payment-list">
                    {paymentDetails.map((payment) => (
                        <li key={payment.paymentId} className="payment-item">
                            <p><strong>Payment ID:</strong> {payment.paymentId}</p>
                            <p style={getStatusStyle(payment.status)}><strong>Status:</strong> {payment.status}</p>
                            <p><strong>Amount:</strong> ₹{payment.amount}</p>
                            <p><strong>Route:</strong> {payment.route}</p>
                            <p><strong>Driver ID:</strong> {payment.driverId}</p>
                            <p><strong>Date:</strong> {payment.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-payments">No payment details found for your rides.</p>
            )}
        </div>
        </>
    );
};

export default YourRides;

// Styling directly in the same file using template literals
const styles = `
.payment-container {
    width: 80%;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
}

.payment-list {
    list-style-type: none;
    padding: 0;
}

.payment-item {
    border: 2px solid #1D4ED8;  /* Blue outline */
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.payment-item p {
    margin: 0.5rem 0;
    color: #555;
}

.payment-item strong {
    color: #333;
}

.no-payments {
    font-size: 1.1rem;
    color: #777;
    text-align: center;
}

.error-message {
    font-size: 1.1rem;
    color: red;
    text-align: center;
}
`;

// Adding styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
