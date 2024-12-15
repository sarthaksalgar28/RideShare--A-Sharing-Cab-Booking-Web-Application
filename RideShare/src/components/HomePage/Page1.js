// src/components/Page1.js
import React from 'react';
import offerImage from '../../Photos/Blue and White Abstract Geometric Blank Page A4 Landscape.jpg'; // Update this path as necessary

const Page1 = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                    <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to Our RideShare Service</h1>
                    <p className="text-lg mb-4 font-bold">
                        Experience the convenience and affordability of ridesharing. Our platform connects you with reliable drivers in your area, ensuring a safe and enjoyable ride every time. Whether you're commuting to work, heading to the airport, or going out for a night on the town, we've got you covered.
                    </p>
                </div>
                <div className="flex-1 flex items-end justify-center">
                    <img 
                        src={offerImage} 
                        alt="Offer" 
                        style={{ width: '861px', height: '286px', objectFit: 'cover' }} // Set width and height
                        className="rounded-lg" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Page1;