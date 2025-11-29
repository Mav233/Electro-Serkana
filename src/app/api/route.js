import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category")?.toLowerCase().trim() || "all";

    const productsRef = collection(db, "products");

    const q =
        category === "all"
            ? productsRef
            : query(productsRef, where("category", "==", category));

    const snapshot = await getDocs(q);
    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return NextResponse.json({ products });
}
