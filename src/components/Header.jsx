import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUserPlus, FiMenu, FiX } from "react-icons/fi"; // Icons from react-icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-3xl font-bold flex items-end text-gray-800"
        >
          <span>Marché</span>
          <span className="w-2 h-2 bg-green-600 m-1.5 inline-flex"></span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-600">
          <Link
            to="/"
            className="hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            SHOP
          </Link>
          <Link
            to="/features"
            className="hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            FEATURES
          </Link>
          <Link
            to="/services"
            className="hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            SERVICES
          </Link>
          <Link
            to="/news"
            className="hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            NEWS
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-md py-6 px-4 space-y-4 ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <Link
            to="/"
            className="block hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="block hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            SHOP
          </Link>
          <Link
            to="/features"
            className="block hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            FEATURES
          </Link>
          <Link
            to="/services"
            className="block hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            SERVICES
          </Link>
          <Link
            to="/news"
            className="block hover:text-[#14B8A6] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#14B8A6] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            NEWS
          </Link>
        </div>

        {/* Icon and Mobile Menu Section */}
        <div className="flex items-center space-x-6">
          {/* Shopping Cart Icon */}
          <div className="relative">
            <FiShoppingCart className="text-2xl text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          {/* User Icon */}
          <div>
            <FiUserPlus className="text-2xl text-gray-800" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FiX className="text-2xl text-gray-800" />
              ) : (
                <FiMenu className="text-2xl text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
