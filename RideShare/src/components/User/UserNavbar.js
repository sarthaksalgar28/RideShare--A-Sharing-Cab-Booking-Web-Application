
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

const UserNavbar = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {

        showModal("You have been logged out.");
    };

    const showModal = (message) => {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center';

        const modalContent = document.createElement('div');
        modalContent.className = 'bg-white p-6 rounded shadow-lg text-center w-80';

        const messageElement = document.createElement('h1');
        messageElement.className = 'text-xl font-bold text-green-600';
        messageElement.innerText = message;

        const doneButton = document.createElement('button');
        doneButton.className = 'mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline';
        doneButton.innerText = 'Done';
        doneButton.addEventListener('click', function() {
            modal.remove();
            sessionStorage.clear();
            navigate('/'); 
        });

        modalContent.appendChild(messageElement);
        modalContent.appendChild(doneButton);

        modal.appendChild(modalContent);

        document.body.appendChild(modal);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link className="text-2xl font-bold text-blue-600" to="/">RideShare</Link> {/* Use Link for navigation */}
                <ul className="flex space-x-4">
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link></li> {/* Link to Home */}
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/rides">Rides</Link></li>
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/about">About</Link></li> {/* Updated About link */}
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/contact">Contact Us</Link></li>
                </ul>
                <div className="flex space-x-4">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;

