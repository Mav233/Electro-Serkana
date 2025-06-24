'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

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

                <ul className="navbar-links">
                    {links.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                href={href}
                                className={pathname === href ? 'active' : ''}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/cart" className="navbar-cart">
                    <Image src="/cart.svg" alt="Carrito" width={32} height={32} />
                    <span className="cart-badge">2</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;