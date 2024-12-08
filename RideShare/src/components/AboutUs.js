// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="mb-4">
                    At RideShare, we believe in making travel more affordable, sociable, and convenient. Our community-based travel network connects millions of members looking to share rides, making it easier for everyone to reach their destinations while reducing the environmental impact of travel. By leveraging technology, we aim to fill empty seats on the road, creating a more sustainable and connected world.
                </p>

                <h3 className="text-2xl font-semibold mb-4">How It All Started</h3>
                <p className="mb-4">
                    The idea for RideShare was born out of a simple yet powerful observation. In 2003, our founder, Fred, faced a challenge while trying to get home to his family in the countryside. With no car and fully booked trains, he realized the potential of the empty seats in cars around him. This moment sparked the vision for a new travel network that would connect people traveling in the same direction.
                </p>
                <p className="mb-4">
                    Over the next decade, Fred, along with co-founders Francis and Nicolas, transformed this vision into reality. Together, they built RideShare into a leading carpooling platform, connecting millions of travelers and creating a community that shares not just rides, but experiences.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Our Key Numbers</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>90 million members</strong>: A thriving community of travelers.</li>
                    <li><strong>22 countries</strong>: Expanding our reach to connect more people.</li>
                    <li><strong>25 million travelers per quarter</strong>: Helping millions of people find rides every season.</li>
                    <li><strong>More than €1.4 billion saved</strong>: Our members have saved this amount since our inception.</li>
                    <li><strong>263 kilometers</strong>: The average distance of a RideShare trip.</li>
                    <li><strong>30 billion kilometers shared</strong>: Our community has collectively traveled this distance since our creation.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img alt="Nicolas Brusson" className="w-16 h-16 rounded-full mr-4" src="path_to_nicolas_image.jpg" />
                        <div>
                            <h4 className="font-bold">Nicolas Brusson</h4>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <img alt="Francis Nappez" className="w-16 h-16 rounded-full mr-4" src="path_to_francis_image.jpg" />
                        <div>
                            <h4 className="font-bold">Francis Nappez</h4>
                            <p>Technology Advisor to CEO</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img alt="Frédéric Mazzella" className="w-16 h-16 rounded-full mr-4" src="path_to_frederic_image.jpg" />
                        <div>
                            <h4 className="font-bold">Frédéric Mazzella</h4>
                            <p>Founder and President</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
                <p>
                    Become a part of our growing community and experience the benefits of shared travel. Whether you're looking to save money, meet new people, or reduce your carbon footprint, RideShare is here to help you on your journey.
                </p>
            </div>
        </section>
    );
};

export default AboutUs