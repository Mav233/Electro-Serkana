"use client";
import { useRouter } from 'next/navigation';


export default function AdminPage() {

    const router = useRouter();

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard of Electrodomesticos Serkana.</p>
            <button onClick={() => router.back()}>VOLVER</button>
        </div>
    );
}