import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Electrodomésticos Serkana",
  description: "Tu tienda de electrodomésticos online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* PROVEEDORES GLOBALES */}
        <AuthProvider>
          <CartProvider>

            {/* NAVBAR GLOBAL (tiene acceso al carrito) */}
            <Navbar />

            {/* TODAS LAS PÁGINAS */}
            {children}

          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  );
}