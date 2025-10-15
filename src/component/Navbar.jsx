import { useState } from "react";
import logo from "../assets/images/logo.png";
import close from "../assets/images/close.png";
import menu from "../assets/images/menu.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white right-0 left-0 top-0 w-full z-50 border-b border-dotted border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-8">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-11" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
            Home
          </li>
          <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
            Men's
          </li>
          <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
            Women's
          </li>
          <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
            Kid's
          </li>
          <li className="relative group cursor-pointer">
            <p className="active:text-gray-400">
              Pages
              <span className="ml-1">&#9662;</span>
            </p>

            <ul className="absolute left-0 top-full bg-gray-100 shadow-lg rounded-md p-4 space-y-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 min-w-[180px]">
              <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
                Products
              </li>
              <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
                Single Product
              </li>
            </ul>
          </li>

          <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
            Features
          </li>
          <li className="hover:text-gray-400 active:text-gray-400 cursor-pointer">
            Explore
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? close : menu}
              alt="menu-toggle"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-gray-100 text-gray-700 font-medium shadow-lg">
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Home
          </li>
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Men's
          </li>
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Women's
          </li>
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Kid's
          </li>
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Pages
          </li>
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Features
          </li>
          <li className="hover:text-gray-400 active:text-gray-500 cursor-pointer">
            Explore
          </li>
        </ul>
      )}
    </nav>
  );
}
