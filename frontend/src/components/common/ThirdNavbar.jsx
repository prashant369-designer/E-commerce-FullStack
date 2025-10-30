import React, { useState, useEffect } from 'react';
import { Menu, BadgePercent, ChevronDown } from 'lucide-react';

function ThirdNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <section
      className={`${isFixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative'} transition-all duration-300`}
    >
    <div className="bg-white px-4 sm:px-6 md:px-8 py-6 font-semibold text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center uppercase gap-2 cursor-pointer">
          <Menu className="w-5 h-5 hidden sm:block" />
          <span className="text-xs sm:text-sm">Shop By Categories</span>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-4 md:gap-6 lg:gap-8 uppercase text-xs sm:text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li
              className="relative flex items-center hover:underline cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Shop
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Category
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Products
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Top Deals
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Elements
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center uppercase gap-2 cursor-pointer">
          <BadgePercent className="w-5 h-5" />
          <span className="text-xs sm:text-sm">Best Offers</span>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col gap-3 uppercase text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="flex items-center hover:underline cursor-pointer">
              Shop
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Category
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Products
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Top Deals
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              Elements
              <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              <BadgePercent className="w-5 h-5 mr-1" />
              Best Offers
            </li>
          </ul>
        </div>
      )}
    </div>
    </section>
    </>
  );
}

export default ThirdNavbar;