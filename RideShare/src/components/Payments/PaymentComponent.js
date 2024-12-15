// src/Payments/PaymentComponent.js
import React, { useState } from 'react';

const PaymentComponent = ({ amount }) => {
    const [error, setError] = useState(null);

    const handlePayment = async (event) => {
        event.preventDefault();
        setError(null);

        // Check if Razorpay is loaded
        if (!window.Razorpay) {
            console.error("Razorpay SDK not loaded");
            setError("Payment gateway not available. Please try again later.");
            return;
        }

        const options = {
            key: 'rzp_test_LMZHnNT5VlTSU1', // Replace with your Razorpay Key ID
            amount: {amount} * 100, // Amount in paise
            currency: 'INR',
            name: 'RideShare',
            description: 'Payment For Ride',
            handler: function (response) {
                // Handle successful payment here
                console.log('Payment successful:', response);
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#F37254',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div>
            <h2>Payment</h2>
            <form onSubmit={handlePayment}>
                <p>Amount: ₹{amount}</p>
                <button 
                    type="submit" 
                    style={{
                        backgroundColor: '#2563eb', // Blue 600
                        color: 'white',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        display: 'inline-block',
                        marginTop: '10px',
                        fontSize: '16px',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'} // Darker blue on hover
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'} // Reset to original color
                >
                    Pay Now
                </button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default PaymentComponent;