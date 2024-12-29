// src/components/AboutUs.js
import React from 'react';
import UserNavbar from './UserNavbar';

const AboutUser  = () => {
    return (
        <>
            <UserNavbar/>
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: '#007BFF' }}>Our Mission</h3>
                    <p className="mb-4">
                        At RideShare, we believe in making travel more affordable, sociable, and convenient. Our community-based travel network connects millions of members looking to share rides, making it easier for everyone to reach their destinations while reducing the environmental impact of travel. By leveraging technology, we aim to fill empty seats on the road, creating a more sustainable and connected world.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4" style={{ color: '#007BFF' }}>How It All Started</h3>
                    <p className="mb-4">
                        The idea for RideShare was born out of a shared experience among our group during the Diwali festival. Each year, we faced significant challenges trying to get home to our families amidst the heavy traffic and limited transportation options. Frustrated by the difficulties of travel during this busy time, we realized there had to be a better way to connect people who were traveling in the same direction.
                    </p>
                    <p className="mb-4">
                        This realization sparked our vision for a platform that would make travel easier and more accessible for everyone. We came together as a team to develop RideShare, a solution that not only addresses the challenges of holiday travel but also fosters a sense of community among travelers. Our goal is to ensure that no one has to face the journey alone, especially during times when family reunions are most important.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4" style={{ color: '#007BFF' }}>Meet Our Team</h3>
                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                        <TeamMember 
                            name="Nicolas Brusson" 
                            role="CEO" 
                            imageSrc="path_to_nicolas_image.jpg" 
                        />
                        <TeamMember 
                            name="Francis Nappez" 
                            role="Technology Advisor to CEO" 
                            imageSrc="path_to_francis_image.jpg" 
                        />
                        <TeamMember 
                            name="Frédéric Mazzella" 
                            role="Founder and President" 
                            imageSrc="path_to_frederic_image.jpg" 
                        />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4" style={{ color: '#007BFF' }}>Join Us</h3>
                    <p>
                        Become a part of our growing community and experience the benefits of shared travel. Whether you're looking to save money, meet new people, or reduce your carbon footprint, RideShare is here to help you on your journey.
                    </p>
                </div>
            </section>
        </>
    );
};

// TeamMember Component for better reusability
const TeamMember = ({ name, role, imageSrc }) => (
    <div className="flex items-center mb-4 md:mb-0">
        <img alt={name} className="w-16 h-16 rounded-full mr-4" src={imageSrc} />
        <div>
            <h4 className="font-bold">{name}</h4>
            <p>{role}</p>
        </div>
    </div>
);

export default AboutUser ;