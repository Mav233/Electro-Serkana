import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        console.log("Mensaje recibido:", data);

        return NextResponse.json({
            message: "Mensaje recibido correctamente",
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Error al procesar el mensaje" },
            { status: 500 }
        );
    }
}