import { NextResponse } from 'next/server';
import { productsDB } from '../data/productsDB';

export async function GET(request) {
    for (let i = 0; i > 1000e6; i++) {

        return NextResponse.json({
            products: productsDB,
        })


    };

}
export async function POST(request) {}