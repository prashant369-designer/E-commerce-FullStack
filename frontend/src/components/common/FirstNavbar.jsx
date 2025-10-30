import React, { useState } from 'react';

function FirstNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white px-4 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-sm text-gray-300 sm:text-base md:text-sm font-semibold">
            Free Shipping Worldwide for all orders over $199{' '} 
            <span className="underline cursor-pointer">SHOP NOW</span>
          </h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-2 text-sm md:text-base text-gray-300">
            <li className="hover:underline cursor-pointer">About Us |</li>
            <li className="hover:underline cursor-pointer">Blog |</li>
            <li className="hover:underline cursor-pointer">Contact Us |</li>
            <li className="hover:underline cursor-pointer">FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FirstNavbar;