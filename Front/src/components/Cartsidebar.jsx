import React from "react";
import useCarrito from "../Hooks/useCarrito";
import ItemCarrito from "./ItemCarrito";
import CouponInput from "./Cupon";
import ResumenCarrito from "./ResumenCarrito";
import "../styles/Cartsidebar.css";
import Swal from 'sweetalert2';

const CartSidebar = ({ isOpen, onClose }) => {
    const { carrito, vaciarCarrito } = useCarrito();

    return (
        <div className={`cart--sidebar ${isOpen ? "open" : ""}`}>
            <h2 className="familia cart--title">Carrito de compras</h2>

            {carrito.length === 0 ? (
                <p className="familia cart--empty">Tu carrito está vacío.</p>
            ) : (
                <>
                    {carrito.map(item => (
                        <ItemCarrito key={item.id} item={item} />
                    ))}

                    <CouponInput />
                    <ResumenCarrito />
                    <button
                        onClick={() => {
                            Swal.fire({
                                title: '¿Confirmar pago?',
                                text: 'Estás a punto de proceder al pago.',
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonText: 'Sí, pagar',
                                cancelButtonText: 'Cancelar',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    const codigoSeguimiento = 'RP-' + Math.random().toString(36).substring(2, 10).toUpperCase();
                                    Swal.fire({
                                        title: '¡Felicidades!',
                                        html: `
                        <p>Tu compra ha sido realizada exitosamente.</p>
                        <p><strong>Código de seguimiento:</strong> ${codigoSeguimiento}</p>
                    `,
                                        icon: 'success',
                                        confirmButtonText: 'Aceptar',
                                    }).then(() => {
                                        vaciarCarrito();
                                        onClose();
                                    });
                                }
                            });
                        }}
                        className="boton boton--pago"
                    >
                        Proceder al pago
                    </button>

                </>
            )}

            <button onClick={onClose} className="close--button">&times;</button>
        </div>
    );
};

export default CartSidebar;
