import React from "react";
import useCarrito from "../Hooks/useCarrito";
import "../styles/VerCarrito.css";
import carritoIcon from "../../Assets/carrito.png";

const CartButton = ({ onClick }) => {
    const { carrito, cupon } = useCarrito();

    const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);

    const totalCost = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = cupon ? totalCost * cupon.discount : 0;
    const total = totalCost - discount;
    return (
        <button onClick={onClick} className="cart--button">
            <img src={carritoIcon} alt="Carrito" />
            Ver carrito
            <span className="cart-npm -badge">
                {totalItems} / ${total.toFixed(2)}
            </span>
        </button>
    );
};

export default CartButton;
