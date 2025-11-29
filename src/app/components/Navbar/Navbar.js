'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Productos', href: '/products/all' },
        { name: 'Nosotros', href: '/about' },
        { name: 'Blog', href: '/posts' },
        { name: 'Contacto', href: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    <Image src="/logo-serkana.svg" width={48} height={48} alt="Logo Serkana" />
                    <span>Serkana</span>
                </Link>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Links principales */}
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    {links.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={pathname === href ? 'active' : ''}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Carrito */}
                <Link href="/cart" className="navbar-cart">
                    <Image src="/cart.svg" alt="Carrito" width={32} height={32} />
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
