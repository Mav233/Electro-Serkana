import { productsDB } from '@/app/products/[categories]/data/productsDB';


export async function generateMetadata({ params }) {
    const { categories } = params;
    return {
        title: `Productos de ${categories}`,
        description: `Explora nuestra amplia gama de productos en la categoría ${categories}. Encuentra lo mejor en electrodomésticos y más.`,
        keywords: `productos, ${categories}, electrodomésticos, tecnología, hogar`
    };
}
export default async function CategoryPage({ params }) {
    const { categories } = params;

    const products =
        categories === "all"
            ? productsDB
            : productsDB.filter((product) => product.category === categories);

    return (
        <>
            <div className="category-container">
                <h1 className="category-title">Productos en la categoría: {categories}</h1>
                <p className="category-description">
                    Explora nuestra selección de productos en la categoría {categories}.
                </p>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Precio: ${product.price.toFixed(2)}</p>
                            <button
                                className="add-to-cart-btn"
                                aria-label={`Agregar ${product.name} al carrito`}
                            >
                                🛒 Agregar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}