// src/components/MapComponent.js
import React, { useEffect, useRef } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 18.529574417998, // Default center latitude
  lng: 73.83384044884515 // Default center longitude
};

const MapComponent = ({ from, to, setDistance }) => {
  const mapRef = useRef(null);
  const directionsServiceRef = useRef(null);
  const directionsRendererRef = useRef(null);

  useEffect(() => {
    directionsServiceRef.current = new window.google.maps.DirectionsService();
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: '#00008B', // Dark blue color
        strokeOpacity: 1.0,
        strokeWeight: 5,
      }
    });

    if (mapRef.current) {
      directionsRendererRef.current.setMap(mapRef.current);
    }
  }, []);

  useEffect(() => {
    if (from && to) {
      const request = {
        origin: from,
        destination: to,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsServiceRef.current.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRendererRef.current.setDirections(result);
          
          // Calculate and set the distance
          const distanceInMeters = result.routes[0].legs[0].distance.value;
          if (typeof setDistance === 'function') {
            setDistance(distanceInMeters); // Call the setDistance function passed as a prop
          } else {
            console.error('setDistance is not a function');
          }
        } else {
          console.error('Error fetching directions', result);
        }
      });
    }
  }, [from, to, setDistance]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={(map) => {
        mapRef.current = map;
        directionsRendererRef.current.setMap(map);
      }}
    >
      {from && (
        <Marker 
          position={{ 
            lat: parseFloat(from.split(',')[0]), 
            lng: parseFloat(from.split(',')[1]) 
          }} 
        />
      )}
      {to && (
        <Marker 
          position={{ 
            lat: parseFloat(to.split(',')[0]), 
            lng: parseFloat(to.split(',')[1]) 
          }} 
        />
      )}
    </GoogleMap>
  );
};

export default MapComponent;