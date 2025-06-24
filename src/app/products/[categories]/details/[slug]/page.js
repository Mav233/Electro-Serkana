import Link from 'next/link';
import { productsDB } from '@/app/products/[categories]/data/productsDB';

export default function DetailsPage({ params }) {
    const { slug } = params;
    const product = productsDB.find((item) => item.slug === slug);

    if (!product) {
        return (
            <div className="details-container">
                <p className="text-red-500 font-semibold">⚠ Producto no encontrado</p>
                <Link href="/products/all" className="text-blue-400 underline mt-4 block">
                    ⬅ Volver a la lista de productos
                </Link>
            </div>
        );
    }

    return (
        <div className="details-container">
            <Link href="/products/all" className="text-blue-400 underline mb-4 inline-block">
                ⬅ Volver a la lista de productos
            </Link>

            <h1 className="details-title">{product.name}</h1>
            <p className="details-description">{product.description}</p>

            <div className="product-details">
                <div className="product-image-box">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                </div>
                <div className="product-info">
                    <p className="product-price-detail">💲 Precio: ${product.price.toFixed(2)}</p>
                    <button className="add-to-cart-btn">🛒 Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}