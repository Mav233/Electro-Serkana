import Link from "next/link";
export function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img
                src={product.imageURL}
                alt={product.name}
            />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <span className="product-category">Categoría: {product.category}</span>
            <Link
                href={`/products/details/${product.id}`}
                className="mt-4 px-4 py-2 bg-blue-500 rounded text-white"
            >
                Ver detalles
            </Link>

        </div>
    );
}