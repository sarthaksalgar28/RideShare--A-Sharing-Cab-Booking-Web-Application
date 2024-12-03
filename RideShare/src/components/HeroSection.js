import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Travel Together Save Together</h1>
                <p className="text-lg mb-8">Find a ride, make a friend</p>
                <a className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold" href="#">Search for a ride</a>
            </div>
        </section>
    );
};

export default HeroSection;