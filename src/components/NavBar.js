import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a className="text-2xl font-bold text-blue-600" href="#">RideShare</a>
                <ul className="flex space-x-4">
                    <li><a className="text-gray-700 hover:text-blue-600" href="#">Home</a></li>
                    <li><a className="text-gray-700 hover:text-blue-600" href="#">Rides</a></li>
                    <li><a className="text-gray-700 hover:text-blue-600" href="#">About</a></li>
                    <li><a className="text-gray-700 hover:text-blue-600" href="#">Contact</a></li>
                </ul>
                <div className="flex space-x-4">
                    <a className="text-gray-700 hover:text-blue-600" href="#">Login</a>
                    <a className="bg-blue-600 text-white px-4 py-2 rounded" href="#">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;