import React, { useState } from "react";
import Logo from "../../images/Metapos_logo-removebg-preview.png";
import { Heart, ShoppingCart, SquareUserRound, Search } from "lucide-react";
import LoginModal from "../../pages/LoginPage"; 

function SecondNavbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 bg-white shadow-md border-b border-gray-200 hidden sm:flex">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              className="cursor-pointer w-24 sm:w-28 md:w-32 h-auto object-contain transition-transform duration-300 hover:scale-105"
              src={Logo}
              alt="Logo"
            />
          </a>
        </div>

        {/* Center: Search Input */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowLogin(true)} // 👈 open modal
            className="cursor-pointer rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <SquareUserRound className="w-6 h-6 text-gray-600" />
          </button>

          <button className="cursor-pointer rounded-full hover:bg-gray-100 transition-colors duration-200">
            <Heart className="w-6 h-6 text-gray-600" />
          </button>

          <button className="cursor-pointer rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default SecondNavbar;
