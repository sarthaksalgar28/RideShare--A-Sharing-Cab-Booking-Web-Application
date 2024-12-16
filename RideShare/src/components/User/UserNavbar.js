<<<<<<< HEAD
import React, { useState } from 'react';
=======



// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom'; 

// const UserNavbar = () => {
//     const navigate = useNavigate(); 

//     const handleLogout = () => {
//         alert("You have been logged out.");
        
//         sessionStorage.clear(); 
        
//         navigate('/');
//     };

//     return (
//         <nav className="bg-white shadow-md">
//             <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//                 <Link className="text-2xl font-bold text-blue-600" to="/">RideShare</Link> {/* Use Link for navigation */}
//                 <ul className="flex space-x-4">
//                     <li><Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link></li> {/* Link to Home */}
//                     <li><Link className="text-gray-700 hover:text-blue-600" to="/rides">Rides</Link></li>
//                     <li><Link className="text-gray-700 hover:text-blue-600" to="/about">About</Link></li> {/* Updated About link */}
//                     <li><Link className="text-gray-700 hover:text-blue-600" to="/contact">Contact Us</Link></li>
//                 </ul>
//                 <div className="flex space-x-4">
//                     {
                        
//                     }
//                     <button
//                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                         onClick={handleLogout}
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default UserNavbar;



import React from 'react';
>>>>>>> 663be9a31c987be94e837dd83279582cfc68174e
import { useNavigate, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const UserNavbar = () => {
    const navigate = useNavigate(); 
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const handleLogout = () => {
<<<<<<< HEAD
        alert("You have been logged out.");
        sessionStorage.clear(); 
        navigate('/');
=======

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
>>>>>>> 663be9a31c987be94e837dd83279582cfc68174e
    };

    // Define a custom style for the brand text
    const brandStyle = {
        color: '#007bff', // Blue color
        fontWeight: 'bold', // Bold text
        textDecoration: 'none', // Remove underline
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close state
    };

    return (
<<<<<<< HEAD
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
            <div className="container">
                <Link className="navbar-brand" to="/" style={brandStyle}>RideShare</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu} 
                    aria-controls="navbarNav" 
                    aria-expanded={isOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/rides">Rides</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-gray-700 hover:text-blue-600" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <button
                            className="btn btn-primary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
=======
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
>>>>>>> 663be9a31c987be94e837dd83279582cfc68174e
                </div>
            </div>
        </nav>
    );
};

<<<<<<< HEAD
export default UserNavbar;
=======
export default UserNavbar;

>>>>>>> 663be9a31c987be94e837dd83279582cfc68174e
