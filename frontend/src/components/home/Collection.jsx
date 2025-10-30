import React from 'react';
import Collection1 from '../../images/collection1.jpg';
import Collection2 from '../../images/collection2.jpg';

function Collection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 my-6">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 max-w-7xl mx-auto">
        {/* Collection 1 */}
        <div className="relative w-full md:w-1/2">
          <img
            src={Collection1}
            alt="Trendy Women's Blouse Collection"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute top-6 sm:top-8 md:top-1/4 left-4 sm:left-6 md:left-8">
            <h2 className="uppercase text-sm sm:text-base md:text-lg font-semibold">
              Trendy Collection
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 font-bold leading-tight">
              Blouse For Women <br /> Neet Sleeve
            </p>
           <button
  className="relative mt-4 sm:mt-6 md:mt-8 cursor-pointer text-sm sm:text-base font-semibold text-black transition-colors duration-300 group"
  aria-label="Shop Men's Blue T-shirt"
>
  SHOP NOW
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</button>
          </div>
        </div>

        {/* Collection 2 */}
        <div className="relative w-full md:w-1/2">
          <img
            src={Collection2}
            alt="Men's Classic T-Shirt Collection"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute top-6 sm:top-8 md:top-1/4 left-4 sm:left-6 md:left-8">
            <h2 className="uppercase text-sm sm:text-base md:text-lg font-semibold">
              Men's Collection
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 font-bold leading-tight">
              Short Sleeve Classic <br /> Round T-Shirt
            </p>
            <button
  className="relative mt-4 sm:mt-6 md:mt-8 cursor-pointer text-sm sm:text-base font-semibold text-black transition-colors duration-300 group"
  aria-label="Shop Men's Blue T-shirt"
>
  SHOP NOW
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;