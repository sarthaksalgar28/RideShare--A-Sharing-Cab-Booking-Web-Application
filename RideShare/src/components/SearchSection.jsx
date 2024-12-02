import React from 'react';

const SearchSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Search for a ride</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <div className="flex-1">
                                <label className="block text-gray-700" htmlFor="from">From</label>
                                <input className="w-full border border-gray-300 rounded px-4 py-2" id="from" placeholder="City or address" type="text"/>
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700" htmlFor="to">To</label>
                            <input className="w-full border border-gray-300 rounded px-4 py-2" id="to" placeholder="City or address" type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700" htmlFor="date">Date</label>
                            <input className="w-full border border-gray-300 rounded px-4 py-2" id="date" type="date"/>
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700" htmlFor="seats">Seats</label>
                            <input className="w-full border border-gray-300 rounded px-4 py-2" id="seats" placeholder="Number of seats" type="number"/>
                        </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold" type="submit">Search</button>
                </form>
            </div>
        </div>
    </section>
)}

export default SearchSection;