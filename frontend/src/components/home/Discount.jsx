  import React from 'react';

  function Discount() {
    return (
      <div className="text-center py-8 sm:py-10 md:py-12 bg-pink-50">
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
          Super discount for your{' '}
          <span className="text-red-600 font-semibold">first purchase</span>
        </p>
        <div className="mt-3 sm:mt-4 md:mt-6">
          <span className="inline-block border-2 border-red-600 border-dashed px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-bold text-red-600">
            FREE15FIRST
          </span>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 sm:mt-3">
          Use discount code at checkout!
        </p>
      </div>
    );
  }

  export default Discount;