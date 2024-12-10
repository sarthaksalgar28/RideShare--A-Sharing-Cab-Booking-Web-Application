// src/ridesData.js
import { useState } from 'react';

const useRides = () => {
  const [rides, setRides] = useState([
    { driver: "Shanu", rating: 4.8, route: "IET TO SWARGATE", date: "25th Dec, 2023", price: "2500rs" },
    { driver: "Hrishi Bhai", rating: 4.9, route: "IET TO PIMPRI", date: "30th Dec, 2023", price: "3000rs" },
    { driver: "Sunny Bhai", rating: 4.7, route: "IET TO CHINCHWAD", date: "1st Jan, 2024", price: "2000rs" },
    { driver: "Ashish", rating: 4.6, route: "Gokhale Nagar To IET", date: "5th Jan, 2024", price: "50RS" },
    { driver: "Pathya", rating: 4.5, route: "IET TO GOA", date: "10th Jan, 2024", price: "18000" },
    { driver: "Pratya", rating: 4.8, route: "IET TO SILENCE", date: "15th Jan, 2024", price: "Cant describe in MONEY" },
  ]);

  const addRide = (newRide) => {
    setRides((prevRides) => [...prevRides, newRide]);
  };

  return { rides, addRide };
};

export default useRides;