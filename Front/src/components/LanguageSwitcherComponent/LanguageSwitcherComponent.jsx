import React from 'react';
import esFlag from './es.png';
import enFlag from './en.png';
import frFlag from './fr.png';
import itFlag from './it.png';

const LanguageSwitcherComponent = () => {

    const handleLanguageClick = (language) => {
        console.log(language);
    }

  return (
    <div className="flex items-center space-x-2">
      <div
        className="cursor-pointer" // Cambia el cursor al pasar el ratón
        onClick={() => handleLanguageClick('es')} // Llama a la función con el código del idioma
      >
        <img src={esFlag} alt="Español" className="h-4 w-6" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleLanguageClick('en')}
      >
        <img src={enFlag} alt="Inglés" className="h-4 w-6" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleLanguageClick('fr')}
      >
        <img src={frFlag} alt="Francés" className="h-4 w-6" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleLanguageClick('it')}
      >
        <img src={itFlag} alt="Italiano" className="h-4 w-6" />
      </div>
    </div>
  );
};

export default LanguageSwitcherComponent;