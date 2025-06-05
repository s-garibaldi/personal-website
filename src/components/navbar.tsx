'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className={`py-6 px-3 font-semibold text-lg transition-all duration-300 relative group ${
                  pathname === '/'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 ${
                  pathname === '/' ? 'scale-x-100' : 'group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                href="/about-us"
                className={`py-6 px-3 font-semibold text-lg transition-all duration-300 relative group ${
                  pathname === '/about-us'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                About Us
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 ${
                  pathname === '/about-us' ? 'scale-x-100' : 'group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                href="/contact"
                className={`py-6 px-3 font-semibold text-lg transition-all duration-300 relative group ${
                  pathname === '/contact'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 ${
                  pathname === '/contact' ? 'scale-x-100' : 'group-hover:scale-x-100'
                }`}></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}