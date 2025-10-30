import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Herobanner() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/banners/');
        // If API returns an array, pick the first banner
        setBanner(res.data[0]);
      } catch (err) {
        console.error('Error fetching banner:', err);
      }
    };

    fetchBanner();
  }, []);

  if (!banner) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row bg-pink-50 min-h-[400px]">
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center sm:px-6 py-6 sm:py-8">
        <h1 className="text-lg sm:text-xl font-bold text-center">{banner.subtitle}</h1>
        <h1 className="text-3xl sm:text-5xl font-bold text-center mt-2 sm:mt-4 leading-tight">
          {banner.title}
        </h1>
        <p className="text-sm sm:text-base text-center font-semibold mt-3 sm:mt-4">
          {banner.description}
        </p>

        {banner.button === "active" && (
         <button
            type="submit"
            className="mt-10 hover:text-white relative px-6 py-3 font-semibold text-black border-2 border-black overflow-hidden group rounded-xl cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-800">
             SHOP NOW
            </span>
          </button>
        )}
      </div>
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <img
          src={banner.image[0]}
          alt={banner.title}
          className="w-full h-full object-cover max-h-[450px] sm:max-h-[450px]"
        />
      </div>
    </div>
  );
}

export default Herobanner;
