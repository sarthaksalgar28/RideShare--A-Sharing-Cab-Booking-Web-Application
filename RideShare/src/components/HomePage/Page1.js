// src/components/Page1.js
import React from 'react';

const Page1 = () => {
    const offerImage = "path/to/your/image.jpg"; // Replace with the actual path to your image

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                    <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to Our Rideshare Service</h1>
                    <p className="text-lg mb-4 font-bold">
                        Experience the convenience and affordability of ridesharing. Our platform connects you with reliable drivers in your area, ensuring a safe and enjoyable ride every time. Whether you're commuting to work, heading to the airport, or going out for a night on the town, we've got you covered.
                    </p>
                    {/* Removed the specified text */}
                </div>
                <div className="flex-1">
                    <div className="offer bg-white text-blue-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <img src={offerImage} alt="Offer" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        {/* Removed the Get Started button */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;