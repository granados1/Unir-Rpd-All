import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer familia"> {/* Aplicamos la clase 'familia' al bloque footer */}
      <p className="footer__address-line">Calle Falsa 123</p>
      <p className="footer__address-line">Bogotá</p>
      <p className="footer__address-line">Colombia</p>
    </footer>
  );
}