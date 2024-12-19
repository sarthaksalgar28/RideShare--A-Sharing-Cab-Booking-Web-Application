// src/components/ContactUs.js
import React, { useState } from 'react';
import UserNavbar from './NavBar';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }
        setError('');
        // Here you can add your form submission logic (e.g., API call)
        console.log('Form submitted:', { name, email, message });
        setSuccess(true);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
        <UserNavbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <section 
                style={{ 
                    padding: '2.5rem', 
                    backgroundColor: 'white', 
                    borderRadius: '0.5rem', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    width: '100%', 
                    maxWidth: '500px', 
                    border: '1px solid #d1d5db' // Light gray border added
                }}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
                {success && <p className="text-green-500 mb-4 text-center">Your message has been sent successfully!</p>}
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your Name"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ border: '1px solid #d1d5db' }} // Border added to input
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Your Email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ border: '1px solid #d1d5db' }} // Border added to input
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Your Message"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            style={{ border: '1px solid #d1d5db' }} // Border added to textarea
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </div>
        </>
    );
};

export default ContactUs;