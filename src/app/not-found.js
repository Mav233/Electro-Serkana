'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link href="/" className="text-blue-600 underline">
                Volver al inicio
            </Link>
        </div>
    );
}