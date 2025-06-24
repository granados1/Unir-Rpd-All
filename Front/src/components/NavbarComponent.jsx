import React from 'react';
import '../styles/Navbar.css';

const NavBarComponent = () => {
  return (
    <nav className="navBar">
      <a href="/" className="navBar__link familia">
        Inicio
      </a>
      <a href="/productlist" className="navBar__link familia">
        Lista de productos
      </a>
      <a href="/support" className="navBar__link familia">
        Soporte
      </a>
      <a href="/myorders" className="navBar__link familia">
        Mis Pedidos
      </a>
    </nav>
  );
};

export default NavBarComponent;