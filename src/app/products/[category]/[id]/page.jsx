import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Link from "next/link";
import AddToCartButton from "@/app/products/[category]/details/AddToCartButton/AddToCartButton";

export default async function DetailsPage({ params }) {
    const { id } = params;

    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
        return (
            <div className="details-wrapper">
                <p className="details-error">⚠ Producto no encontrado</p>
                <Link href="/products/all" className="details-back-link">
                    ⬅ Volver a la lista de productos
                </Link>
            </div>
        );
    }

    const product = productSnap.data();

    return (
        <div className="details-wrapper">
            <Link href="/products/all" className="details-back-link">
                ⬅ Volver a la lista de productos
            </Link>

            <h1 className="details-title">{product.name}</h1>
            <p className="details-description">{product.description}</p>

            <div className="details-content">
                <div className="details-image-box">
                    <img
                        src={product.imageURL}
                        alt={product.name}
                        className="details-image"
                    />
                </div>

                <div className="details-info">
                    <p className="details-price">💲 {product.price.toFixed(2)}</p>

                    <AddToCartButton product={{ id, ...product }} />
                </div>
            </div>
        </div>
    );
}