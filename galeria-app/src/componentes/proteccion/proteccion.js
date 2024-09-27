import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token-galeria');

    // Si el token no está presente, redirigir a la página de inicio de sesión
    return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

