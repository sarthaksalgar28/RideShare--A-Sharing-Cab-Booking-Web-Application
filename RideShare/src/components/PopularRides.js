import React from 'react';

const rides = [
    { driver: "John Doe", rating: 4.8, route: "New York to Boston", date: "25th Dec, 2023", price: "$25" },
    { driver: "Jane Smith", rating: 4.9, route: "Los Angeles to San Francisco", date: "30th Dec, 2023", price: "$30" },
    { driver: "Michael Brown", rating: 4.7, route: "Chicago to Detroit", date: "1st Jan, 2024", price: "$20" },
    { driver: "Emily Davis", rating: 4.6, route: "Miami to Orlando", date: "5th Jan, 2024", price: "$15" },
    { driver: "David Wilson", rating: 4.5, route: "Seattle to Portland", date: "10th Jan, 2024", price: "$18" },
    { driver: "Sarah Johnson", rating: 4.8, route: "Houston to Dallas", date: "15th Jan, 2024", price: "$22" },
];

const PopularRides = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Popular Rides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rides.map((ride, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <div className="flex items-center mb-4">
                                <img alt="Profile picture of the driver" className="w-12 h-12 rounded-full mr-4" src="https://storage.googleapis.com/a1aa/image/ImxifoeQiAuc9UQR8c7JdbMQ7tOWJ1Cc2rqVjgDHbH4EFG3TA.jpg"/>
                                <div>
                                    <h3 className="text-lg font-semibold">{ride.driver}</h3>
                                    <p className="text-gray-600">{ride.rating} <i className="fas fa-star text-yellow-500"></i></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700"><i className="fas fa-map-marker-alt text-blue-600"></i> {ride.route}</p>
                                <p className="text-gray-700"><i className="fas fa-calendar-alt text-blue-600"></i> {ride.date}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold">{ride.price}</p>
                                <a className="bg-blue-600 text-white px-4 py-2 rounded" href="#">Book Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularRides;