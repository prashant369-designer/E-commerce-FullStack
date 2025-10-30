import React from 'react';
import SubBanner from '../../images/sub-banner-1.jpg';
import SubBanner2 from '../../images/sub-banner-2.jpg';
import SubBanner3 from '../../images/sub-banner-3.jpg';

function BannerCard({ imageSrc, altText }) {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-auto object-cover rounded-lg "
      />
      <div className="absolute top-4 sm:top-6 md:top-1/4 left-4 sm:left-6">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
          2024 FASHION
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-2 sm:mt-3 md:mt-4">
          Locomotive Men <br /> Blue T-shirt
        </h3>

       <button
  className="relative mt-4 sm:mt-6 md:mt-8 cursor-pointer text-sm sm:text-base font-semibold text-black transition-colors duration-300 group"
  aria-label="Shop Men's Blue T-shirt"
>
  SHOP NOW
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</button>

      </div>
    </div>
  );
}

function ElementorContainer() {
  const banners = [
    { imageSrc: SubBanner, altText: "Men's Blue T-shirt - 2024 Fashion" },
    { imageSrc: SubBanner2, altText: "Men's Blue T-shirt - 2024 Fashion" },
    { imageSrc: SubBanner3, altText: "Men's Blue T-shirt - 2024 Fashion" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 px-4 sm:px-6 md:px-8 py-3 my-6">
      {banners.map((banner, index) => (
        <BannerCard
          key={index}
          imageSrc={banner.imageSrc}
          altText={banner.altText}
        />
      ))}
    </div>
  );
}

export default ElementorContainer;