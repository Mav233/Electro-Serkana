import Link from "next/link";
import { ProductList } from "./components/ProductList";

export async function generateMetadata({ params }) {
    const { category } = params;
    return {
        title: `Productos de ${category}`,
        description: `Explora nuestra amplia gama de productos en la categoría ${category}.`,
        keywords: `productos, ${category}, electrodomésticos, tecnología`,
    };
}

export default function CategoryPage({ params }) {
    const { category } = params;

    const categories = [
        { label: "Todos", slug: "all" },
        { label: "Heladeras", slug: "heladeras" },
        { label: "Microondas", slug: "microondas" },
        { label: "Cocinas", slug: "cocinas" },
        { label: "Lavadoras", slug: "lavadoras" },
        { label: "Aires Acondicionados", slug: "aires-acondicionados" },
    ];

    return (
        <div className="category-wrapper">
            <h1 className="category-title">Productos en: {category}</h1>
            <p className="category-subtitle">
                Explorá nuestra selección de productos en <strong>{category}</strong>.
            </p>

            <div className="category-filters">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        className={`filter-btn ${cat.slug === category ? "filter-active" : ""}`}
                    >
                        {cat.label}
                    </Link>
                ))}
            </div>

            <ProductList category={category} />
        </div>
    );
}
