export default function AdminLayout({ children }) { 
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen">
                    <header className="bg-gray-800 text-white p-4">
                        <h1 className="text-2xl">Admin Dashboard</h1>
                    </header>
                    <main className="flex-grow p-4">
                        {children}
                    </main>
                    <footer className="bg-gray-800 text-white p-4 text-center">
                        &copy; {new Date().getFullYear()} Electrodomésticos Serkana
                    </footer>
                </div>
            </body>
        </html>
    );
}