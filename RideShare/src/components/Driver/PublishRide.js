import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarDriver from './NavBarDriver';

const PublishRide = ({ addRide }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');
  const [dropOffPoint, setDropOffPoint] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  const sourceInputRef = useRef(null);
  const destinationInputRef = useRef(null);

  useEffect(() => {
    const sourceAutocomplete = new window.google.maps.places.Autocomplete(sourceInputRef.current, {
      types: ['geocode'],
    });

    const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationInputRef.current, {
      types: ['geocode'],
    });

    sourceAutocomplete.addListener('place_changed', () => {
      const place = sourceAutocomplete.getPlace();
      if (place && place.geometry) {
        setSource(place.formatted_address);
      }
    });

    destinationAutocomplete.addListener('place_changed', () => {
      const place = destinationAutocomplete.getPlace();
      if (place && place.geometry) {
        setDestination(place.formatted_address);
      }
    });

    return () => {
      if (sourceInputRef.current) {      window.google.maps.event.clearInstanceListeners(sourceInputRef.current);
      }
      if (destinationInputRef.current) {
        window.google.maps.event.clearInstanceListeners(destinationInputRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new ride object
    const newRide = {
      driver: "Your Driver Name", // Replace with actual driver name
      rating: 5.0, // You can set a default rating or calculate it based on your logic
      route: `${source} to ${destination}`,
      date: `${date} at ${time}`,
      price: `${passengers * 100}rs`, // Example price calculation
    };

    // Add the new ride to the rides list
    addRide(newRide);

    // Reset form fields
    setSource('');
    setDestination('');
    setPickupPoint('');
    setDropOffPoint('');
    setDate('');
    setTime('');
    setPassengers(1);
    
    // Navigate to the select point page
    navigate('/select-point');
  };

  return (
    <>
      <NavbarDriver />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Publish a Ride</h2>
          <form onSubmit={handleSubmit}>
            {/* Source and Destination Fields Side by Side */}
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="source">
                  Source
                </label>
                <input
                  ref={sourceInputRef}
                  type="text"
                  id="source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                  Destination
                </label>
                <input
                  ref={destinationInputRef}
                  type="text"
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>

            {/* Pickup and Drop-Off Fields Side by Side */}
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup">
                  Pickup Point
                </label>
                <input
                  type="text"
                  id="pickup"
                  value={pickupPoint}
                  onChange={(e) => setPickupPoint(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropOff">
                  Drop-Off Point
                </label>
                <input
                  type="text"
                  id="dropOff"
                  value={dropOffPoint}
                  onChange={(e) => setDropOffPoint(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>

            {/* Date and Time Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required               />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
                    Number of Passengers
                  </label>
                  <input
                    type="number"
                    id="passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    min="1"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  >
                    Publish Ride
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    };
    
    export default PublishRide;