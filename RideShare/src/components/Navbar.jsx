import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a className="text-2xl font-bold text-blue-600" href="#">
                    BlaBlaCar
                </a>
                <div className="space-x-4">
                    <a className="text-gray-700 hover:text-blue-600" href="#">Home</a>
                    <a className="text-gray-700 hover:text-blue-600" href="#">Rides</a>
                    <a className="text-gray-700 hover:text-blue-600" href="#">About</a>
                    <a className="text-gray-700 hover:text-blue-600" href="#">Contact</a>
                </div>
                <div className="space-x-4">
                    <a className="text-gray-700 hover:text-blue-600" href="#">Login</a>
                    <a className="bg-blue-600 text-white px-4 py-2 rounded" href="#">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;