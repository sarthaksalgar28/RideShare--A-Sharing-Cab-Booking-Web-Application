// src/BookNow.js
import React from 'react';

const BookNow = () => {
    return (
        <div className="container">
            <style>
                {`
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }

                    h2 {
                        color: #007bff;
                        margin-bottom: 20px;
                    }

                    .form-group {
                        margin-bottom: 15px;
                    }

                    .label {
                        display: block;
                        margin-bottom: 5px;
                        font-weight: bold;
                    }

                    .input {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ced4da;
                        border-radius: 4px;
                    }

                    .button {
                        background-color: #2563eb; /* Blue 600 */
                        color: white;
                        padding: 10px 15px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                    }

                    .button:hover {
                        background-color: #1d4ed8; /* Darker blue on hover */
                    }
                `}
            </style>
            <h2 className="text-2xl font-bold">Book Your Ride</h2>
            <form>
                <div className="form-group">
                    <label className="label" htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="input" required />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="contact">Contact Number</label>
                    <input type="tel" id="contact" className="input" required />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="pickup">Pickup Location</label>
                    <input type="text" id="pickup" className="input" required />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="dropoff">Drop-Off Location</label>
                    <input type="text" id="dropoff" className="input" required />
                </div>
                <button type="submit" className="button">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookNow;