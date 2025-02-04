// PaymentComponent.js
import React from 'react';


    const PaymentComponent = ({ amount, rideId, userId, onPaymentSuccess, onPaymentFailure }) => {
        const handlePayment = (event) => {
            event.preventDefault();
        
            if (!window.Razorpay) {
                console.error('Razorpay is not loaded');
                return;
            }
        
            const options = {
                key: 'rzp_test_LMZHnNT5VlTSU1',
                amount: amount * 100, // Amount is multiplied by 100 to convert to paise
                currency: 'INR',
                name: 'RideShare',
                description: 'Payment For Ride',
                handler: function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        
                    // Creating payment payload inside the handler function
                    const paymentPayload = {
                        paymentId: response.razorpay_payment_id,
                        status: 'success',
                        amount: amount,
                        rideId: rideId,  // Passing the rideId
                        userId: userId   // Passing the userId
                    };
    
                    console.log(paymentPayload);  // Log the payload to check if userId is present
        
                    // Send the payment details to your API to save the payment
                    fetch('https://localhost:44345/api/Payment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(paymentPayload)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            onPaymentSuccess && onPaymentSuccess(response.razorpay_payment_id);
                        } else {
                            onPaymentFailure && onPaymentFailure();
                        }
                    })
                    .catch(() => onPaymentFailure && onPaymentFailure());
                },
                modal: {
                    ondismiss: function () {
                        alert('Payment was not completed.');
                        onPaymentFailure && onPaymentFailure();
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
            <div className="p-4 border rounded shadow-lg bg-white max-w-sm mx-auto mt-4">
                <h2 className="text-xl font-bold mb-2">Payment</h2>
                <p className="text-gray-700 mb-4">Amount: ₹{amount}</p>
                <button
                    onClick={handlePayment}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                    Pay Now
                </button>
            </div>
        );
    };
    

export default PaymentComponent;
