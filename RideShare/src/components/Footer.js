import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-gray-700">© 2024 RideShare. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li><a className="text-gray-700 hover:text-blue-600" href="#">Privacy Policy</a></li>
                        <li><a className="text-gray-700 hover:text-blue-600" href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;