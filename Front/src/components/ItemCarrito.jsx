import React from "react";
import "../styles/ItemCarrito.css";
import useCarrito from "../Hooks/useCarrito";

const ItemCarrito = ({ item }) => {
    const { incrementar, decrementar, eliminarDelCarrito } = useCarrito();

    return (
        <div className="cart--item">
            <div className="cart--header">
                <span className="familia cart--title">{item.title}</span>
                <span className="familia cart--price">${item.price.toFixed(2)}</span>
            </div>
            <div className="cart--controls">
                <div className="quantity--controls">
                    <button onClick={() => decrementar(item.id)} className="familia botonc boton--adjust">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementar(item.id)} className="familia botonc boton--adjust">+</button>
                </div>
                <button onClick={() => eliminarDelCarrito(item.id)} className="btn--remove">Quitar</button>
            </div>
        </div>
    );
};

export default ItemCarrito;
