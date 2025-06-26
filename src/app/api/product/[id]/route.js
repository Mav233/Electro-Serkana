import { NextResponse } from "next/server";
import {
    getProductById,
    updateProductById,
    deleteProductById,
} from "@/firebase/products";

// GET - Obtener producto
export async function GET(_req, { params }) {
    const { id } = params;

    try {
        const product = await getProductById(id);
        if (!product) {
            return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
        }
        return NextResponse.json(product);
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

// PUT - Actualizar producto
export async function PUT(request, { params }) {
    const { id } = params;
    const data = await request.json();

    try {
        await updateProductById(id, data);
        return NextResponse.json({ message: "Producto actualizado correctamente", id, ...data });
    } catch (error) {
        console.error("Error actualizando producto:", error);
        return NextResponse.json({ error: "No se pudo actualizar el producto" }, { status: 500 });
    }
}

// DELETE - Eliminar producto
export async function DELETE(_req, { params }) {
    const { id } = params;

    try {
        await deleteProductById(id);
        return NextResponse.json({ message: "Producto eliminado correctamente", id });
    } catch (error) {
        console.error("Error eliminando producto:", error);
        return NextResponse.json({ error: "No se pudo eliminar el producto" }, { status: 500 });
    }
}
