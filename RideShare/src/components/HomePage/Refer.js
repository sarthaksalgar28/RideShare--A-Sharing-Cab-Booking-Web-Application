// src/pages/Refer.js
import React from 'react';

const Refer = () => {
    return (
        <div className="bg-white text-gray-800">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">Refer a Friend, Earn Rewards!</h1>
                <p className="mb-6">
                    At [Your Rideshare Company], we believe in sharing the love! Our referral program allows you to earn rewards by inviting your friends to join our rideshare community.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">How It Works</h2>
                <p className="mb-4">
                    It's simple! Just follow these steps:
                    <ol className="list-decimal list-inside ml-4">
                        <li>Share your unique referral link with friends and family.</li>
                        <li>When they sign up and take their first ride, you both earn rewards!</li>
                    </ol>
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">What You Earn</h2>
                <p className="mb-4">
                    For every friend you refer who completes their first ride, you will receive:
                    <ul className="list-disc list-inside ml-4">
                        <li>A $10 credit towards your next ride</li>
 <li>Your friend will also receive a $10 discount on their first ride!</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">Why Refer Us?</h2>
                <p className="mb-4">
                    By referring your friends, you are helping them discover a reliable and safe rideshare option. Plus, you get rewarded for sharing the experience! Here are some reasons to refer us:
                    <ul className="list-disc list-inside ml-4">
                        <li>High safety standards and background-checked drivers</li>
                        <li>User-friendly app with real-time tracking</li>
                        <li>24/7 customer support for any inquiries</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">Get Started!</h2>
                <p className="mb-4">
                    Ready to start earning rewards? Log in to your account and find your unique referral link in the "Refer a Friend" section. Share it via social media, email, or text, and watch the rewards roll in!
                </p>
                <p>
                    Thank you for being a part of our rideshare community. We appreciate your support and look forward to rewarding you for sharing the love!
                </p>
            </div>
        </div>
    );
};

export default Refer;