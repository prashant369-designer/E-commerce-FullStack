import React, { useState,useEffect } from "react";
import { Star } from "lucide-react";
import Product1 from "../../images/product1.jpg";
import Product2 from "../../images/product2.jpg";
import Product3 from "../../images/product3.jpg";
import Product4 from "../../images/product4.jpg";
import Product5 from "../../images/product5.jpg";
import Product6 from "../../images/product6.jpg";
import Product7 from "../../images/product7.jpg";
import Product8 from "../../images/product8.jpg";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const PopularProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
  const [activeTab, setActiveTab] = useState("Fashion");

  
  const products = {
    Fashion: [
      {
        id: 1,
        image: Product1,
        title: "Longines Watchmaking Tradition 25.5 mm Watch",
        price: "$22",
        rating: 5,
      },
      {
        id: 2,
        image: Product2,
        title: "Cindy & Wendy Large Soft Cashmere Silky Shawl",
        price: "$16",
        rating: 5,
      },
      {
        id: 3,
        image: Product3,
        title: "Moshi Latest Venturo Premium Laptop Backpack",
        price: "$22",
        rating: 5,
      },
      {
        id: 4,
        image: Product4,
        title: "Denim Jean Top Jacket Sleeve Crop Women",
        price: "$16 – $28",
        rating: 5,
        discount: 5,
      },
    ],
    Accessories: [
      {
        id: 5,
        image: Product5,
        title: "Elegant Silver Bracelet",
        price: "$18",
        rating: 4,
      },
      {
        id: 6,
        image: Product6,
        title: "Pearl Necklace",
        price: "$25",
        rating: 5,
      },
    ],
    Apparel: [
      {
        id: 7,
        image: Product7,
        title: "Cotton T-shirt for Men",
        price: "$15",
        rating: 4,
      },
      {
        id: 8,
        image: Product8,
        title: "Stylish Winter Jacket",
        price: "$35",
        rating: 5,
      },
    ],
  };

  return (
    <div className="py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Popular Products
        </h2>

        <div className="flex justify-center space-x-6 mb-8">
          {["Fashion", "Accessories", "Apparel"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-medium cursor-pointer ${
                activeTab === tab
                  ? "text-black border-b-2 border-black "
                  : "text-black "
              } pb-1 transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products[activeTab].map((item) => (
            <div
              key={item.id}
              className="relative text-black rounded-2xl transition transform"
            >
              {item.discount && (
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                  -{item.discount}%
                </span>
              )}

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-contain p-4  "
              />

              <div className="text-center p-4">
                <h3 className="text-sm font-medium mb-2">
                  {item.title}
                </h3>

                <div className="flex justify-center mb-2 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg font-semibold ">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
