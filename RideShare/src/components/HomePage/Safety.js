// src/pages/Safety.js
import React from 'react';

const Safety = () => {
    return (
        <div className="bg-white text-gray-800">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">Your Safety is Our Priority</h1>
                <p className="mb-6">
                    At [Your Rideshare Company], we prioritize your safety above all else. Here are the measures we take to ensure a secure and comfortable ride for you:
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">1. Background Checks</h2>
                <p className="mb-4">
                    All our drivers undergo thorough background checks, including criminal history and driving record evaluations, to ensure they meet our safety standards.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">2. In-App Safety Features</h2>
                <p className="mb-4">
                    Our app includes features such as:
                    <ul className="list-disc list-inside ml-4">
                        <li>Real-time GPS tracking of your ride</li>
                        <li>Share your ride details with friends or family</li>
                        <li>Emergency contact button for immediate assistance</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">3. Driver Training</h2>
                <p className="mb-4">
                    Our drivers are trained to provide a safe and comfortable experience. They are educated on customer service, conflict resolution, and emergency procedures.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">4. Customer Support</h2>
                <p className="mb-4">
                    Our dedicated customer support team is available 24/7 to assist you with any concerns or issues you may encounter during your ride.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">5. Feedback and Ratings</h2>
                <p className="mb-4">
                    We encourage our riders to provide feedback and rate their drivers after each trip. This helps us maintain high standards and address any issues promptly.
                </p>
                <p>
                    Your safety is our top priority, and we are committed to providing you with a secure rideshare experience. If you have any questions or concerns, please feel free to contact our support team.
                </p>
            </div>
        </div>
    );
};

export default Safety;