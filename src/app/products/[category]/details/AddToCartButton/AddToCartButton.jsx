"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} agregado al carrito 🛒`);
    };

    return (
        <button
            className="add-cart-btn"
            onClick={handleAddToCart}
        >
            🛒 Agregar al carrito
        </button>
    );
}
