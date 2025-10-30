import React from 'react';

function Subscribe() {
  return (
    <div className="text-center py-8 pt-20 bg-pink-50">
      <h2 className="text-xl sm:text-3xl md:text-3xl font-semibold text-gray-900">
        Sign Up & Subscribe To Our Newsletter
      </h2>
      <p className=" mt-2 text-sm  text-gray-600 max-w-5xl mx-auto">
        Subscribe to our latest newsletter to get news about special discounts and upcoming sales
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center my-2 sm:my-8 md:my-6 gap-3 sm:gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 lg:px-3 py-2 sm:py-3 w-90 sm:w-60 md:w-96 text-sm sm:text-base font-medium border-2 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Email address for newsletter subscription"
        />
          <button className="hover:text-white relative px-6 py-3 font-semibold text-black border-2 border-black overflow-hidden group rounded-xl cursor-pointer">
          <span className='absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0'></span>
          <span className='absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0'></span>
          <span className='relative z-10 group:hover:text-white transition-colors duration-800'>Subscribe</span>
        </button>
       
      </div>
    </div>
  );
}

export default Subscribe;