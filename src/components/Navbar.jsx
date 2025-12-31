import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-primary">Web</span>
            <span className="text-2xl font-bold text-dark">Automy</span>
            <div className="w-2 h-2 bg-accent rounded-full ml-1 mb-3"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Pricing
            </Link>
            <Link
              to="/team"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              Team
            </Link>

            {/* The WhatsApp CTA Button */}
            <Link
              to="/contact"
              className="bg-primary hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg shadow-indigo-200 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Let's Chat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#"
              className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg"
            >
              Pricing
            </a>
            <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-medium flex justify-center gap-2">
              <MessageCircle size={20} /> Let's Chat
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
