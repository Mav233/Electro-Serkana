'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navlink({ name, href }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li className="w-full">
            <Link
                href={href}
                className={`block py-2 px-3 rounded-sm md:p-0 ${isActive
                        ? 'text-white bg-blue-800 md:bg-blue-950 md:hover:bg-blue-800'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                    }`}
            >
                {name}
            </Link>
        </li>
    );
}