import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Find a ride, share a ride</h1>
                <p className="text-lg mb-8">Travel with trusted people in the largest carpooling community.</p>
                <a className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold" href="#">Search for a ride</a>
            </div>
        </section>
    );
};

export default HeroSection;