import React, { useState } from "react";
import LanguageSwitcherComponent from './LanguageSwitcherComponent/LanguageSwitcherComponent';
import CartSidebar from "./Cartsidebar";
import VerCarrito from "./VerCarrito";
import '../styles/Header.css';

export const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="header familia">
      <div className="header__title familia">
        <h1>
          RELATOS DE PAPEL
        </h1>
      </div>
      <LanguageSwitcherComponent className="header__languageSwitcher familia" />
      <VerCarrito onClick={() => setCartOpen(true)} className="header__verCarrito familia" />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} className="header__cartSidebar familia" />
    </header>
  );
};