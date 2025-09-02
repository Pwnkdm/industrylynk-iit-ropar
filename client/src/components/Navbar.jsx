import React from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "highlights", label: "Event Highlights" },
  { id: "speakers", label: "Speakers" },
  { id: "networking", label: "Networking" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({
  activeSection,
  isMenuOpen,
  scrollToSection,
  setIsMenuOpen,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-black/70 shadow-lg z-50 h-20 text-white p-2">
      <div className="max-w-full mx-auto text-white sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12  rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg ">
                <img className="w-full h-full" src="/logo.png" alt="logo" />
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Industry LYNK 2025
              </h1>
              <p className="text-sm text-gray-300">IIT Ropar</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer text-white ${
                  activeSection === item.id
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 text-white ${
                  activeSection === item.id
                    ? "text-blue-600 bg-black"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
