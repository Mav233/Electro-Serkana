export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="flex min-h-screen bg-black-100">

                    <aside className="w-64 bg-white shadow-md">
                        <nav className="p-4">
                            <ul>
                                <li>
                                    <a href="/admin/dashboard" className="block py-2 px-4 hover:bg-black-200">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/admin/products" className="block py-2 px-4 hover:bg-black-200">Products</a>
                                </li>
                                <li>
                                    <a href="/admin/orders" className="block py-2 px-4 hover:bg-black-200">Orders</a>
                                </li>
                                <li>
                                    <a href="/admin/customers" className="block py-2 px-4 hover:bg-gray-200">Customers</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>


                    <main className="flex-grow p-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}