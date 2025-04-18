'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className={`py-4 px-2 font-semibold transition duration-300 ${
                  pathname === '/'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className={`py-4 px-2 font-semibold transition duration-300 ${
                  pathname === '/contact'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}