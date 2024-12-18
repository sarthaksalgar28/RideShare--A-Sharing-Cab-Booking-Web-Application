// src/components/QuoteSection.js
import React from 'react';

const QuoteSection = () => {
    return (
        <section style={{ backgroundColor: '#007BFF', color: 'white', padding: '20px 0', marginTop: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'left', padding: '0 20px' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Safety First</h2>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>"Your safety is our priority. Ride with peace of mind."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>"Traveling together makes every journey safer."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>"Ride smart, ride safe, ride together."</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '1.25em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>"Safety is not just a feature; it's our commitment."</p>
                    </div>
                </div>
                <div style={{ flex: 1, textAlign: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img 
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj333rgVUZ-4_NXB4HQHQxPJBvWBtqo7RJtVSHxjd1St05g-zK0v1LCbFJXjJL9015THgmaUDo5YzS2NCIrNQc2nPg2ZN1i7JUTIVbT3vhzi8hVCl8a0iuxBDIX1QspzkK9M0WD-Cm-mvXR-PmXjul9E-wm2p2S9Apmt82rh7FCLDge84AEkI6AKZlo-Ow/s1472/car%20with%20name%20_RideShare_%20%20in%20it%20sector.jpg" 
                        alt="Safety" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginLeft: '160px' }} 
                    />
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;