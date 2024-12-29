// src/components/PaymentComponent.js
import React from 'react';

const PaymentComponent = ({ amount, onPaymentSuccess, onPaymentFailure }) => {
    const handlePayment = (event) => {
        event.preventDefault();

        // Ensure Razorpay is loaded and initialized properly
        if (!window.Razorpay) {
            console.error('Razorpay is not loaded');
            return;
        }

        const options = {
            key: 'rzp_test_LMZHnNT5VlTSU1', // Replace with your Razorpay Key ID
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            name: 'RideShare',
            description: 'Payment For Ride',
            handler: function (response) {
                console.log('Payment successful:', response);
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                if (onPaymentSuccess && typeof onPaymentSuccess === 'function') {
                    onPaymentSuccess(response.razorpay_payment_id); // Notify parent of successful payment
                } else {
                    console.error('onPaymentSuccess is not a function');
                }
            },
            modal: {
                ondismiss: function () {
                    alert('Payment was not completed.'); // Notify user of unsuccessful payment
                    if (onPaymentFailure && typeof onPaymentFailure === 'function') {
                        onPaymentFailure(); // Notify parent of payment failure
                    } else {
                        console.error('onPaymentFailure is not a function');
                    }
                }
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
            <p>Amount: ₹{amount}</p>
            <button
                onClick={handlePayment}
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
        </div>
    );
};

export default PaymentComponent;
