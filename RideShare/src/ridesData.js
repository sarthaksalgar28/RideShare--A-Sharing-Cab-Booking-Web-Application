// src/ridesData.js
import { useState } from 'react';

const useRides = () => {
  const [rides, setRides] = useState([
    { driver: "Shanu", rating: 4.8, route: "IET TO SWARGATE", date: "25th Dec, 2023", price: "2500rs" },
    { driver: "Hrishi Bhai", rating: 4.9, route: "IET TO PIMPRI", date: "30th Dec, 2023", price: "3000rs" },
    { driver: "Sunny Bhai", rating: 4.7, route: "IET TO CHINCHWAD", date: "1st Jan, 2024", price: "2000rs" },
  
  ]);

  const addRide = (newRide) => {
    setRides((prevRides) => [...prevRides, newRide]);
  };

  return { rides, addRide };
};

export default useRides;