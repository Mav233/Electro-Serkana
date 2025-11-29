import { ProductCard } from "./ProductCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function ProductList({ category }) {
    const productsRef = collection(db, "products");

    const q = category === "all"
        ? productsRef
        : query(productsRef, where("category", "==", category));

    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return (
        <>
            {products.length > 0 ? (
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="no-products">
                    <h3>No hay productos en esta categoría</h3>
                </div>
            )}
        </>
    );
}
