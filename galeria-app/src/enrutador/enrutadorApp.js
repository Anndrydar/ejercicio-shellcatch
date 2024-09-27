import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulariogaleria from '../componentes/form/form';
import PapeleraReciclaje from '../componentes/papelera-reciclaje/papelera';
import Header from '../componentes/nav/nav';
import Login from '../componentes/login/login';
import ProtectedRoute from '../componentes/proteccion/proteccion';

const EnrutadorDeApp = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        {/* Usar ProtectedRoute para proteger las rutas */}
                        <Route
                            path="/inicio"
                            element={
                                <ProtectedRoute>
                                    <Formulariogaleria />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/papelera"
                            element={
                                <ProtectedRoute>
                                    <PapeleraReciclaje />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default EnrutadorDeApp;