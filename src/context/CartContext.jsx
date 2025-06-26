'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) return removeFromCart(id);
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        cartTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}