import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephoneForward } from 'react-icons/bs';
import { Mail } from 'lucide-react';
import Copyright from '../../images/copyright.png';
import { CiFacebook } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="px-2 sm:px-2 md:px-2 py-4 sm:py-8 md:py-12 ">
      {/* Main Footer Sections */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 max-w-7xl mx-auto">
        {/* About Our Store */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 mr-0 lg:mr-6 text-center">
            About Our Store
          </h2>
          <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
            Welcome to our store, where we pride ourselves on providing exceptional
            products and unparalleled customer service. Our store is a haven for
            those who appreciate quality, style, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">
            Quick Links
          </h2>
          <ul className="text-gray-500 text-xs sm:text-base space-y-1 sm:space-y-2">
            {['Contact Us', 'Shipping', 'Sitemap', 'FAQs', 'Store Us', 'About Us'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="col-span-1">
          <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">
            Policies
          </h2>
          <ul className="text-gray-500 text-xs sm:text-base space-y-1 sm:space-y-2">
            {[
              'Order Status',
              'Terms Conditions',
              'Policy for Sellers',
              'Policy for Buyers',
              'Shipping & Refund',
              'Wholesale Policy',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="col-span-1">
          <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">
            Support
          </h2>
          <ul className="text-gray-500 text-xs sm:text-base space-y-1 sm:space-y-2">
            {['Product Support', 'Checkout', 'Licence Policy', 'Affiliate', 'Locality', 'Order Tracking'].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">
            Contact Us
          </h2>
          <div className="text-gray-500 text-xs sm:text-base space-y-2 sm:space-y-3">
            <p className="flex items-start">
              <IoLocationOutline className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2 mt-0.5 sm:mt-1 flex-shrink-0" />
              60 29th Street, San Francisco, 94110, 507-Union Trade Center, USA
            </p>
            <p className="flex items-center">
              <BsTelephoneForward className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
              (+91) 0123-456-789
            </p>
            <p className="flex items-center">
              <Mail className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
              demo@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 sm:my-8 border-gray-300" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6 max-w-7xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex gap-2 sm:gap-4">
          {[
            { Icon: CiFacebook, label: 'Facebook' },
            { Icon: CiTwitter, label: 'Twitter' },
            { Icon: FaInstagram, label: 'Instagram' },
            { Icon: FaGoogle, label: 'Google' },
            { Icon: FaWhatsapp, label: 'WhatsApp' },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label={`Follow us on ${label}`}
            >
              <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-xs sm:text-base text-center">
          © 2025 Majori Demo - WordPress Theme by Avanam
        </p>

        {/* Copyright Image */}
        <img
          src={Copyright}
          alt="Copyright symbol"
          className="w-90 h-8"
        />
      </div>
    </div>
  );
}

export default Footer;