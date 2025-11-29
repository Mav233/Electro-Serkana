import Link from "next/link";

export function ProductCard({ product }) {
    return (
        <div className="pcard">
            <img
                src={product.imageURL}
                alt={product.name}
                className="pcard-img"
            />

            <h4 className="pcard-title">{product.name}</h4>

            <p className="pcard-desc">{product.description}</p>

            <p className="pcard-price">${product.price.toFixed(2)}</p>

            <span className="pcard-category">
                Categoría: {product.category}
            </span>

            <Link
                href={`/products/details/${product.id}`}
                className="pcard-btn"
            >
                Ver detalles
            </Link>
        </div>
    );
}
