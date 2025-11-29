import Link from "next/link";
import { ProductsTable } from "./components/ProductsTable";

export default async function AdminPage() {
    const products = await fetch("http://localhost:3000/api/products/all").then(
        (res) => res.json()
    );

    return (
        <div className="admin-wrapper">
            <h1 className="admin-title">Admin Section</h1>

            <div className="admin-actions">
                <Link className="admin-button" href="/admin/create">
                    Crear nuevo producto
                </Link>

                <button className="admin-logout-btn">
                    Logout
                </button>
            </div>
            

            <div className="admin-table-box">
                <ProductsTable products={products} />
            </div>
        </div>
    );
}
