'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="not-found-wrapper">
            <h1 className="not-found-title">404 - Página no encontrada</h1>
            <p className="not-found-text">
                Lo sentimos, la página que buscas no existe.
            </p>

            <Link href="/" className="not-found-link">
                ⬅ Volver al inicio
            </Link>
        </div>
    );
}