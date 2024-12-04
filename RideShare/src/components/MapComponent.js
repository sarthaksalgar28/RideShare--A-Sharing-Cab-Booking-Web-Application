// src/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 18.529574417998, // Change to your desired latitude
  lng: 73.83384044884515 // Change to your desired longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDrQeNVgH6Jws5AngUuXOwpBMX3bywLWZI"> {/* Replace with your API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;