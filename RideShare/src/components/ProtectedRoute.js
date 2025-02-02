import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('authToken');

    console.log('Is user authenticated:', isAuthenticated); // Debug line

    if (isAuthenticated === null) {
        return <Navigate to="/login" />;
    }

    return element;
};


export default ProtectedRoute;