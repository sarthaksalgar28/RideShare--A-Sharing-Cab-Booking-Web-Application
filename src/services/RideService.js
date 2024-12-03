import axios from 'axios';

const API_URL = 'http://localhost:8080/api/rides';

const RideService = {
    getRides: () => {
        return axios.get(API_URL);
    },
    offerRide: (ride) => {
        return axios.post(API_URL, ride);
    }
};

export default RideService;