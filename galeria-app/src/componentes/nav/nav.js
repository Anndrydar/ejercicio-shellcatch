import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';


const Header = () => {
  return (
    <header>
      <h1>Galeria de momentos</h1>
      <hr />
      <div className="links">
      <NavLink to="/inicio" className="link" activeClassName="active">
          Inicio
        </NavLink>
        <NavLink to="/papelera" className="link" activeClassName="active">
          Papelera de reciclaje
        </NavLink>
      </div>
    </header>
  );
};

export default Header;