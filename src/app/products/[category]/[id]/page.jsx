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
            <div className="details-container">
                <p className="text-red-500 font-semibold">⚠ Producto no encontrado</p>
                <Link href="/products/all" className="text-blue-400 underline mt-4 block">
                    ⬅ Volver a la lista de productos
                </Link>
            </div>
        );
    }

    const product = productSnap.data();

    return (
        <div className="details-container p-6 max-w-4xl mx-auto">
            <Link href="/products/all" className="text-blue-400 underline mb-4 inline-block">
                ⬅ Volver a la lista de productos
            </Link>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="mb-4 text-gray-700">{product.description}</p>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <img
                        src={product.imageURL}
                        alt={product.name}
                        className="w-full h-auto rounded shadow"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                    <p className="text-2xl font-bold text-green-600">
                        💲 ${product.price.toFixed(2)}
                    </p>

                    {/* Componente client-side */}
                    <AddToCartButton product={{ id, ...product }} />
                </div>
            </div>
        </div>
    );
}
