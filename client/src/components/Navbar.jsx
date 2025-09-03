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
    <nav className="fixed top-0 w-full bg-[#004885] shadow-lg z-50 h-20 text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <img className="w-full h-full" src="/logo.png" alt="logo" />
              </span>
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white truncate">
                Industry LYNK 2025
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 hidden xs:block">
                IIT Ropar
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 cursor-pointer text-white whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-300 hover:text-orange-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              class="inline-flex items-center gap-2 rounded-full px-6 py-2.5
         border border-indigo-400/60 text-indigo-400
         hover:bg-indigo-500 hover:text-white
         transition font-medium focus:outline-none
         focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer"
            >
              Register
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Tablet Menu (Medium screens) */}
          <div className="hidden md:flex lg:hidden space-x-4 ">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer text-white ${
                  activeSection === item.id
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-300 hover:text-orange-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* More menu for remaining items */}
            <div className="relative group">
              <button className="px-2 py-2 text-sm font-medium text-gray-300 hover:text-orange-600">
                More
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                {navItems.slice(4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 text-white hover:bg-gray-800 first:rounded-t-md last:rounded-b-md ${
                      activeSection === item.id
                        ? "text-orange-600 bg-gray-800"
                        : "text-gray-300 hover:text-orange-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  class="inline-flex items-center gap-2 rounded-full px-6 py-2.5
         border border-indigo-400/60 text-indigo-400
         hover:bg-indigo-500 hover:text-white
         transition font-medium focus:outline-none
         focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer"
                >
                  Register
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-600 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-700">
          <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors duration-200 text-white rounded-md ${
                  activeSection === item.id
                    ? "text-orange-600 bg-gray-800"
                    : "text-gray-300 hover:text-orange-600 hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              class="inline-flex items-center gap-2 rounded-full px-6 py-2.5
         border border-indigo-400/60 text-indigo-400
         hover:bg-indigo-500 hover:text-white
         transition font-medium focus:outline-none
         focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer"
            >
              Register
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
