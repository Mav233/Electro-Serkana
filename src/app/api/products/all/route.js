import { db } from "@/firebase/config";
import { DATABASES } from "@/firebase/databases";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = [];
        const snapshot = await getDocs(collection(db, DATABASES.PRODUCTS));

        snapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error("API ERROR PRODUCTS/ALL:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}