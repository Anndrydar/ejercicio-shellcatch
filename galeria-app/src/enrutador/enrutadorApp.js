import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulariogaleria from '../componentes/form/form';
import PapeleraReciclaje from '../componentes/papelera-reciclaje/papelera';
import Header  from '../componentes/nav/nav';

const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
      <div>
      <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Formulariogaleria />} />
            <Route path="/papelera" element={<PapeleraReciclaje />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;