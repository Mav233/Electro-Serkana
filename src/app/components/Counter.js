'use client';

import { useState } from 'react';

export default function Counter({ initial = 1, min = 1, max = 99, onChange }) {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < max) {
            const newCount = count + 1;
            setCount(newCount);
            onChange?.(newCount);
        }
    };

    const decrease = () => {
        if (count > min) {
            const newCount = count - 1;
            setCount(newCount);
            onChange?.(newCount);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={decrease}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                disabled={count <= min}
            >
                -
            </button>
            <span className="w-8 text-center">{count}</span>
            <button
                onClick={increase}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                disabled={count >= max}
            >
                +
            </button>
        </div>
    );
}
