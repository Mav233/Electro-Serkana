import Link from "next/link";
import { ProductList } from "./components/ProductList";

export async function generateMetadata({ params }) {
    const { category } = params;
    return {
        title: `Productos de ${category}`,
        description: `Explora nuestra amplia gama de productos en la categoría ${category}. Encuentra lo mejor en electrodomésticos y más.`,
        keywords: `productos, ${category}, electrodomésticos, tecnología, hogar`,
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
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">Productos en: {category}</h1>
            <p className="mb-6 text-gray-600">
                Explorá nuestra selección de productos en la categoría <strong>{category}</strong>.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-800 transition ${cat.slug === category ? "font-bold ring-2 ring-white" : ""
                            }`}
                    >
                        {cat.label}
                    </Link>
                ))}
            </div>

            <ProductList category={category} />
        </div>
    );
}