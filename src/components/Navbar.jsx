import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">ShopEasy</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Home</Link>
              <Link to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              <Link to="/products" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Products</Link>
              <Link to="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/cart" className="py-2 px-2 flex items-center">
              {/* <ShoppingCartIcon className="h-6 w-6 text-gray-500" /> */}
              <span className="ml-1">Cart (0)</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
        <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
        <Link to="/products" className="block py-2 px-4 text-sm hover:bg-gray-200">Products</Link>
        <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</Link>
        <Link to="/cart" className="block py-2 px-4 text-sm hover:bg-gray-200">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
