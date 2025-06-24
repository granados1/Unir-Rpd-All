import { useCart } from '../context/CartContext';

export default function useCarrito() {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        clearCart,
        coupon,
        applyCoupon,
        setCoupon
    } = useCart();

    return {
        carrito: cartItems,
        agregarAlCarrito: addToCart,
        eliminarDelCarrito: removeFromCart,
        incrementar: incrementItem,
        decrementar: decrementItem,
        vaciarCarrito: clearCart,
        cupon: coupon,
        aplicarCupon: applyCoupon,
        setCupon: setCoupon
    };
}
