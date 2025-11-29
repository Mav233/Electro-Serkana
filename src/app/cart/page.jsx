"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } =
        useCart();

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    const handleIncrease = (item) => {
        if (item.quantity < item.stock) {
            updateQuantity(item.id, item.quantity + 1);
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Tu Carrito</h1>

            {cartItems.length === 0 ? (
                <p className="cart-empty">El carrito está vacío.</p>
            ) : (
                <>
                    <div className="cart-grid">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-img" />

                                <div className="cart-info">
                                    <h2 className="item-name">{item.name}</h2>
                                    <p className="item-desc">{item.description}</p>
                                    <p className="item-price">${item.price}</p>
                                    <p className="item-stock">Stock disponible: {item.stock}</p>
                                </div>

                                <div className="cart-actions">
                                    <div className="cart-qty-controls">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="qty-btn"
                                        >
                                            -
                                        </button>

                                        <span className="cart-qty-number">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="qty-btn"
                                        >
                                            +
                                        </button>
                                    </div>


                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="remove-btn"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-footer">
                        <h2 className="cart-total">Total: ${cartTotal.toFixed(2)}</h2>

                        <button onClick={clearCart} className="clear-btn">
                            Vaciar Carrito
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}