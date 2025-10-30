import React from 'react';
import CmsBanner3 from '../../images/cms-banner-3.jpg';
import { CiDeliveryTruck, CiBank } from 'react-icons/ci';
import { LuBadgePercent } from 'react-icons/lu';
import { MdOutlineSupportAgent } from 'react-icons/md';

// ✅ Reusable Service Card Component
function ServiceCard({ Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <Icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700" />
      <div>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function CmsBanner() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-10 my-3 sm:my-6 lg:my-8">
      {/* ✅ Banner Section */}
      <div className="relative w-full">
        <img
          src={CmsBanner3}
          alt="Feminine Trending Style Women's Top"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-xl"
        />

        {/* Banner Text Overlay */}
        <div className="absolute top-2 sm:top-6 md:top-1/4 left-2 sm:left-6 md:left-10 max-w-[85%] sm:max-w-[60%]">
          <h2 className="text-[10px] sm:text-base md:text-lg font-semibold uppercase text-gray-900">
            Feminine Trending Style
          </h2>
          <h3 className="text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-1 sm:mt-3 md:mt-4 leading-tight">
            Solid Round Neck Viscose <br /> Women’s Top
          </h3>
          <p className="text-[10px] sm:text-sm md:text-base text-gray-700 mt-2 sm:mt-4 md:mt-6 max-w-full sm:max-w-sm">
            Awesome products for the dynamic urban lifestyle
          </p>

          {/* CTA Button */}
          <button className="mt-4 sm:mt-6 md:mt-10 relative px-5 sm:px-6 py-2 sm:py-3 font-semibold text-black border-2 border-black overflow-hidden group rounded-xl cursor-pointer">
            <span className="absolute inset-0 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              SHOP NOW
            </span>
          </button>
        </div>
      </div>

      {/* ✅ Service Section */}
      <div className="border-b-2 border-gray-200 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-8 py-4 sm:py-6 mt-5 sm:mt-8">
        <ServiceCard Icon={CiDeliveryTruck} title="Worldwide Shipping" subtitle="Order above $100" />
        <ServiceCard Icon={CiBank} title="Secure Payment" subtitle="100% Protected" />
        <ServiceCard Icon={LuBadgePercent} title="Best Offers" subtitle="Save up to 50%" />
        <ServiceCard Icon={MdOutlineSupportAgent} title="24/7 Support" subtitle="We’re here to help" />
      </div>
    </div>
  );
}

export default CmsBanner;
