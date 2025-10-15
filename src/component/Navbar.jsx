import { useState } from "react";
import logo from "../assets/images/logo.png";
import close from "../assets/images/close.png";
import menu from "../assets/images/menu.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false); // Mobile pages dropdown

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 w-full z-[1000] border-b border-dotted border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-11 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium relative">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/" className="block py-1">Home</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/men" className="block py-1">Men's</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/women" className="block py-1">Women's</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/kids" className="block py-1">Kid's</Link>
          </li>

          {/* Desktop Pages Dropdown */}
          <li className="relative group cursor-pointer">
            <p className="flex items-center gap-1 hover:text-gray-400 py-1">
              Pages <span>&#9662;</span>
            </p>
            <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 space-y-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 min-w-[180px] z-[2000] border border-gray-200">
              <li className="hover:bg-gray-50 rounded">
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-400">About Us</Link>
              </li>
              <li className="hover:bg-gray-50 rounded">
                <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-400">Contact Us</Link>
              </li>
              
            </ul>
          </li>

          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/features" className="block py-1">Features</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/explore" className="block py-1">Explore</Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? close : menu} alt="menu-toggle" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-8 text-gray-700 font-medium">
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/men" onClick={() => setIsOpen(false)}>Men's</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/women" onClick={() => setIsOpen(false)}>Women's</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/kids" onClick={() => setIsOpen(false)}>Kid's</Link>
            </li>

            {/* Mobile Pages Dropdown */}
            <li className="relative text-lg cursor-pointer w-full">
              <p
                className="flex items-center gap-1 justify-center py-1 hover:text-gray-400"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
              >
                Pages <span>&#9662;</span>
              </p>
              {isPagesOpen && (
                <ul className="flex flex-col items-center mt-2 space-y-2 bg-white shadow-lg rounded-md p-4 w-3/4 border border-gray-200">
                  <li className="hover:bg-gray-50 rounded w-full text-center">
                    <Link to="/about" onClick={() => { setIsOpen(false); setIsPagesOpen(false); }}>About Us</Link>
                  </li>
                  <li className="hover:bg-gray-50 rounded w-full text-center">
                    <Link to="/contact" onClick={() => { setIsOpen(false); setIsPagesOpen(false); }}>Contact Us</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
