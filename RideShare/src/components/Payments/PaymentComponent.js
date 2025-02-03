import React from 'react';

const PaymentComponent = ({ amount, rideId, onPaymentSuccess, onPaymentFailure }) => {
    const handlePayment = (event) => {
        event.preventDefault();

        if (!window.Razorpay) {
            console.error('Razorpay is not loaded');
            return;
        }

        const options = {
            key: 'rzp_test_LMZHnNT5VlTSU1',
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            name: 'RideShare',
            description: 'Payment For Ride',
            handler: function (response) {
                console.log('Payment successful:', response);
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

                const paymentId = response.razorpay_payment_id;
                const paymentStatus = 'success'; // Assuming payment was successful
                const paymentAmount = amount;

                // Make sure the amount is a number (remove any non-numeric characters)
                const cleanedAmount = parseFloat(paymentAmount.replace(/[^\d.-]/g, ''));

                const paymentPayload = {
                    paymentId: paymentId,
                    status: paymentStatus,
                    amount: cleanedAmount, // Now amount is a number
                    rideId: rideId // Include the RideId here
                };

                console.log('Sending payment payload:', paymentPayload);

                // Send payment data to the backend
                fetch('https://localhost:44345/api/Payments/savePayment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentPayload)
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.success) {
                        console.log('Payment saved to the database');
                        if (onPaymentSuccess && typeof onPaymentSuccess === 'function') {
                            onPaymentSuccess(paymentId);
                        }
                    } else {
                        console.error('Failed to save payment ID:', data);
                        if (onPaymentFailure && typeof onPaymentFailure === 'function') {
                            onPaymentFailure();
                        }
                    }
                })
                .catch(error => {
                    console.error('Error while saving payment:', error);
                    if (onPaymentFailure && typeof onPaymentFailure === 'function') {
                        onPaymentFailure();
                    }
                });
            },
            modal: {
                ondismiss: function () {
                    alert('Payment was not completed.');
                    if (onPaymentFailure && typeof onPaymentFailure === 'function') {
                        onPaymentFailure();
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
                    backgroundColor: '#2563eb',
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
            >
                Pay Now
            </button>
        </div>
    );
};

export default PaymentComponent;
