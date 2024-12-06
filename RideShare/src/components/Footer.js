import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    

    useEffect(() => {
        const updateTime = () => {
            const now = new Date().toLocaleTimeString();
            // Convert to IST (UTC+5:30)
            setCurrentTime(now)
            
        };

        updateTime(); // Initial call to set the time immediately
        const intervalId = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-gray-700">© 2024 RideShare. All rights reserved.</p>
                    <p className="text-gray-700">{currentTime}</p> {/* Display the current time */}
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