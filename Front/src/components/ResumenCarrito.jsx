import React from "react";
import useCarrito from "../Hooks/useCarrito";
import "../styles/ResumenCarrito.css";

const ResumenCarrito = () => {
    const { carrito, cupon } = useCarrito();

    const subtotal = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = cupon ? subtotal * cupon.discount : 0;
    const total = subtotal - discount;

    return (
        <div className="familiare cart--summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="familiare cart--discount">Descuento: -${discount.toFixed(2)}</p>
            <p className="familiare cart--total">Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default ResumenCarrito;
