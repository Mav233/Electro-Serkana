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
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-lg"
            onClick={handleAddToCart}
        >
            🛒 Agregar al carrito
        </button>
    );
}
