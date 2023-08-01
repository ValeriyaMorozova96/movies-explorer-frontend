import React from 'react';
import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({ element: Component, isTokenChecked, loggedIn, ...props }) {
    if (!isTokenChecked) return <Preloader />;
    return loggedIn ? <Component {...props} /> : <Navigate to="/" />;
}

export default ProtectedRoute;