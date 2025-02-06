// src/components/OffersSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OffersSection = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleButtonClick = (offer) => {
        if (offer.buttonText === "Get Started" || offer.buttonText === "Join Now") {
            navigate('/signup'); // Redirect to the signup page for these buttons
        } else if (offer.buttonText === "Book Now") {
            navigate('/search'); // Redirect to the Search page for the "Book Now" button
        } else if (offer.buttonText === "Learn More") {
            navigate('/safety'); // Redirect to the Safety page for "Learn More"
        } else if (offer.buttonText === "Refer Now") {
            navigate('/refer'); // Redirect to the Refer page for "Refer Now"
        }
        // You can add more conditions for other buttons if needed
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8 text-blue-600">Exclusive Offers Just for You!</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offersData.map((offer, index) => (
                        <div
                            key={index}
                            className="offer bg-white text-blue-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold mb-4">{offer.title}</h3>
                            <p className="mb-4">{offer.description}</p>
                            
                            <button
                                onClick={() => handleButtonClick(offer)} // Call the function on button click
                                className={`flex items-center justify-center ${offer.buttonColor} text-white px-6 py-2 rounded mt-4 hover:bg-opacity-80 transition duration-300`}
                            >
                                <i className={`fas ${offer.icon} mr-2`}></i> {/* Icon added here */}
                                {offer.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const offersData = [
    {
        title: "50% Off Your First Ride!",
        description: "Sign up today and enjoy 50% off your first ride with us. Experience the convenience of ridesharing at half the price!",
        buttonText: "Get Started",
        icon: "fa-sign-in-alt",  // FontAwesome icon for "Get Started"
        buttonColor: "bg-blue-600",  // Blue button color for "Get Started"
    },
    {
        title: "Your Safety is Our Priority",
        description: "We ensure a safe and secure ride every time. Our drivers are background checked and trained to provide you with a comfortable experience.",
        buttonText: "Learn More",
        icon: "fa-shield-alt",  // FontAwesome icon for "Learn More"
        buttonColor: "bg-green-600",  // Green button color for "Learn More"
    },
    {
        title: "Refer a Friend, Earn Rewards!",
        description: "Invite your friends to join our rideshare community and earn ride credits for every successful referral. Share the love!",
        buttonText: "Refer Now",
        icon: "fa-users",  // FontAwesome icon for "Refer Now"
        buttonColor: "bg-yellow-600",  // Yellow button color for "Refer Now"
    },
    {
        title: "Weekend Rides at 30% Off!",
        description: "Enjoy your weekends with discounted rides. Get 30% off on all rides every Saturday and Sunday!",
        buttonText: "Book Now",
        icon: "fa-calendar-check",  // FontAwesome icon for "Book Now"
        buttonColor: "bg-red-600",  // Red button color for "Book Now"
    },
    {
        title: "Join Our Loyalty Program",
        description: "Sign up for our loyalty program and earn points for every ride. Redeem points for discounts and exclusive offers!",
        buttonText: "Join Now",
        icon: "fa-gift",  // FontAwesome icon for "Join Now"
        buttonColor: "bg-purple-600",  // Purple button color for "Join Now"
    }
];

export default OffersSection;
