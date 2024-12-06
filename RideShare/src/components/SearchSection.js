// src/components/SearchSection.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this import
import MapComponent from './MapComponent';

const SearchSection = ({ setDistance }) => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const fromInputRef = useRef(null);
    const toInputRef = useRef(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const isLoggedIn = false; // Replace this with your actual authentication logic

    useEffect(() => {
        const fromAutocomplete = new window.google.maps.places.Autocomplete(fromInputRef.current, {
            types: ['geocode'],
        });

        const toAutocomplete = new window.google.maps.places.Autocomplete(toInputRef.current, {
            types: ['geocode'],
        });

        fromAutocomplete.addListener('place_changed', () => {
            const place = fromAutocomplete.getPlace();
            if (place.geometry) {
                setFrom(place.formatted_address);
            }
        });

        toAutocomplete.addListener('place_changed', () => {
            const place = toAutocomplete.getPlace();
            if (place.geometry) {
                setTo(place.formatted_address);
            }
        });

        return () => {
            if (fromInputRef.current) {
                window.google.maps.event.clearInstanceListeners(fromInputRef.current);
            }
            if (toInputRef.current) {
                window.google.maps.event.clearInstanceListeners(toInputRef.current);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
            navigate('/login'); // Use navigate instead of history.push
        } else {
            // Add your ride search logic here
        }
    };

    return (
        <section id="Search" className="py-10">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Search for a ride</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-gray-700" htmlFor="from">From</label>
                                <input
                                    ref={fromInputRef}
                                    className="w-full border-gray-300 rounded-lg p-2"
                                    id="from"
                                    placeholder="City or address"
                                    type="text"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-700" htmlFor="to">To</label>
                                <input
                                    ref={toInputRef}
                                    className="w-full border-gray-300 rounded-lg p-2"
                                    id="to"
                                    placeholder="City or address"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-gray-700" htmlFor="date">Date</label>
                                <input
                                    className="w-full border-gray-300 rounded-lg p-2"
                                    id="date"
                                    type="date"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-700" htmlFor="time">Time</label>
                                <input
                                    className="w-full border-gray-300 rounded-lg p-2"
                                    id="time"
                                    type="time"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
                        >
                            Search
                        </button>
                    </form>
                    {from && to && <MapComponent from={from} to={to} setDistance={setDistance} />}
                </div>
            </div>
 </section>
    );
};

export default SearchSection;