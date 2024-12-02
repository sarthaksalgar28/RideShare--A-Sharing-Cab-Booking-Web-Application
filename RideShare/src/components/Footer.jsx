import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-700">© 2023 BlaBlaCar Clone. All rights reserved.</p>
                    <div className="space-x-4">
                        <a className="text-gray-700 hover:text-blue-600" href="#">Privacy Policy</a>
                        <a className="text-gray-700 hover:text-blue-600" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;