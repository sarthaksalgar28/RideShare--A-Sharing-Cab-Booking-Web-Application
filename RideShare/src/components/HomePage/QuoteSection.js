// src/components/QuoteSection.js
import React from 'react';

const QuoteSection = () => {
    return (
        <section style={{ backgroundColor: '#007BFF', color: 'white', padding: '20px 0', marginTop: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'left', padding: '0 20px' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Safety First</h2>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold' }}>"Your safety is our priority. Ride with peace of mind."</p>
                    </div>
                    <div style={{ marginBottom: '16px', marginLeft:'10px'}}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold' }}>"Traveling together makes every journey safer."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold' }}>"Ride smart, ride safe, ride together."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold' }}>"Safety is not just a feature; it's our commitment."</p>
                    </div>
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>

                    {/* <img src="https://th.bing.com/th/id/OIP.M3qi8Yga5IxKo4orWrlzQwHaE8?rs=1&pid=ImgDetMain" alt="Safety" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} /> */}

                    <img 
                        src="https://www.uberapps.tech/blog/images/top-leading-ride-sharing-apps.jpg" 
                        alt="Safety" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginLeft: '20px' }} // Added marginLeft
                    />

                </div>
            </div>
        </section>
    );
};

export default QuoteSection;