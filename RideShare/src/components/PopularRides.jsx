
import React from 'react';

const PopularRides = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Popular Rides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Ride Item */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center mb-4">
                           <img alt="Profile picture of the driver" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/QVZn7brpLtbXDd7ftj3GZvpdhfr6A8Nl55PDOqeeGUHOlSbPB.jpg" width="50"/>
                            <div>
                                <h3 className="text-lg font-semibold">John Doe</h3>
                                <p className="text-gray-600">4.8 <i className="fas fa-star text-yellow-500"></i></p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700"><i className="fas fa-map-marker-alt text-blue-600"></i> New York to Boston</p>
                            <p className="text-gray-700"><i className="fas fa-calendar-alt text-blue-600"></i> 25th Dec, 2023</p>
                        </div>
                        <a className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold" href="#">View Details</a>
                    </div>
                    {/* Repeat for each ride item */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <img alt="Profile picture of the driver" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/QVZn7brpLtbXDd7ftj3GZvpdhfr6A8Nl55PDOqeeGUHOlSbPB.jpg" width="50"/>
                            <div>
                                <h3 className="text-lg font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">4.9 <i className="fas fa-star text-yellow-500"></i></p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700"><i className="fas fa-map-marker-alt text-blue-600"></i> Los Angeles to San Francisco</p>
                            <p className="text-gray-700"><i className="fas fa-calendar-alt text-blue-600"></i> 1st Jan, 2024</p>
                        </div>
                        <a className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold" href="#">View Details</a>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <img alt="Profile picture of the driver" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/QVZn7brpLtbXDd7ftj3GZvpdhfr6A8Nl55PDOqeeGUHOlSbPB.jpg" width="50"/>
                            <div>
                                <h3 className="text-lg font-semibold">Michael Brown</h3>
                                <p className="text-gray-600">4.7 <i className="fas fa-star text-yellow-500"></i></p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700"><i className="fas fa-map-marker-alt text-blue-600"></i> Chicago to Detroit</p>
                            <p className="text-gray-700"><i className="fas fa-calendar-alt text-blue-600"></i> 15th Jan, 2024</p>
                        </div>
                        <a className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold" href="#">View Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularRides;