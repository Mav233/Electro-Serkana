import Counter from './components/Counter';
import Image from 'next/image';

export const metadata = {
  title: 'Electrodomésticos Serkana',
  description: 'Tu tienda de electrodomésticos online',
};

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen pt-24 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold neon-text">
        Tu tienda de electrodomésticos online
      </h1>
    </main>
  );
}