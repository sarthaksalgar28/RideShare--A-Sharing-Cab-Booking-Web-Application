// src/components/QuoteSection.js
import React from 'react';

const QuoteSection = () => {
    return (
        <section style={{ backgroundColor: '#007BFF', color: 'white', padding: '20px 0', marginTop: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Safety First</h2>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em' }}>"Your safety is our priority. Ride with peace of mind."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em' }}>"Traveling together makes every journey safer."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em' }}>"Ride smart, ride safe, ride together."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em' }}>"Safety is not just a feature; it's our commitment."</p>
                    </div>
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    <img src="" alt="Safety" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;