import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [coupon, setCoupon] = useState(null);
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('carrito');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existing = prevItems.find((i) => i.id === item.id);
            if (existing) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const incrementItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementItem = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const applyCoupon = (code) => {

        if (code === "DESCUENTO10") {
            setCoupon({ code, discount: 0.1 }); // 10%
        } else {
            setCoupon(null);
        }
    };


    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                incrementItem,
                decrementItem,
                applyCoupon,
                clearCart,
                coupon,
                setCoupon,

            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
