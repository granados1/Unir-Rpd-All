import React from "react";
import '../styles/LandingPage.css';

const LandingPageComponent = () => {
  return (
    <div className="landingPage familia">
      <h2 className="landingPage__welcome familia">Bienvenido: Usuario@correo.com</h2>

      <div className="landingPage__searchContainer familia">
        <input
          type="text"
          placeholder="Título"
          className="landingPage__input familia"
        />
        <input
          type="text"
          placeholder="Autor"
          className="landingPage__input familia"
        />
        <input
          type="text"
          placeholder="Género"
          className="landingPage__input familia"
        />
        <input
          type="text"
          placeholder="Palabra Clave"
          className="landingPage__input familia"
        />
        <button className="landingPage__button">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default LandingPageComponent;