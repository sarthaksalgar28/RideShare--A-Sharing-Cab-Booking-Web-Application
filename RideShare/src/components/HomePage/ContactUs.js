// src/components/ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic (e.g., API call)
        console.log('Form submitted:', { name, email, message });
        setSuccess(true);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Centering div */}
            <section className="py-10 bg-white rounded shadow-md w-full max-w-md"> {/* Adjusted section styles */}
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                    {success && <p className="text-green-500 mb-4 text-center">Your message has been sent successfully!</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
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
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;