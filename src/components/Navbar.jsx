'use client';

import Link from 'next/link';
import { FaUser, FaSearch } from 'react-icons/fa'; 
import { useState } from 'react'; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-800 flex-shrink-0">
          <Link href="/">FreshMart</Link>
        </div>

        {/* Search Bar */}
        <form
          className="relative flex-grow max-w-xl mx-auto hidden md:block"
          onSubmit={handleSearch}
        >
          <FaSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-green-500 cursor-pointer"
            size={20}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 text-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </form>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg text-gray-700 ml-6">
          <li>
            <Link href="/about" className="hover:text-green-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-green-500 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-green-500 transition-colors">
              Shop
            </Link>
          </li>
        </ul>

        {/* Profile Icon */}
        <div className="flex items-center space-x-8 ml-6">
          <Link href="/profile">
            <FaUser className="text-2xl text-gray-800 hover:text-green-500 transition-colors" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMobileMenu}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-lg text-gray-700 px-8 py-4">
          <li>
            <Link href="/about" className="hover:text-green-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-green-500 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-green-500 transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-green-500 transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-8 py-4">
        <form onSubmit={handleSearch} className="relative">
          <FaSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-green-500 cursor-pointer"
            size={20}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 text-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:black"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
