import React from 'react';
import Inspire1 from '../../images/inspire.jpg';

function Inspire() {
  return (
    <div className="px-2 sm:px-6 md:px-2 py-6 sm:py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={Inspire1}
            alt="Inspiring fashion and lifestyle for men and women"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Inspiring Indians, Both Men & Women To Make Fashion & Lifestyle
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-4">
            They bring an extraordinary amount of it to the table
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since, remaining
            essentially unchanged.
          </p>
        <button className="mt-10 relative px-8 py-3 bg-white border-2 border-black text-black font-semibold rounded-md overflow-hidden group cursor-pointer transition-all duration-300">
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">READ MORE</span>
  
  {/* Background fill effect */}
  <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>

  {/* Shining light effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out z-20"></span>
</button>

          
        </div>
      </div>
    </div>
  );
}

export default Inspire;