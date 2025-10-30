import React, { useState, useEffect } from "react";
import axios from "axios";
import Category1 from "../../images/category1.jpg";
import Category2 from "../../images/category2.jpg";
import Category3 from "../../images/category3.jpg";
import Category4 from "../../images/category4.jpg";
import Category5 from "../../images/category5.jpg";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

function Category() {
  const [category, setCategory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Fetch categories
  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/category");
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  // Initial fetch and resize handler
  useEffect(() => {
    fetchCategory();

    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const next = () => {
    if (currentIndex + itemsPerPage < category.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleCategories = category.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // Fallback images array in case API data doesn't include images
  const fallbackImages = [
    Category1,
    Category2,
    Category3,
    Category4,
    Category5,
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-20">
          Best For Your Category
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-600">
          Mauris quis nisi elit curabitur sodales libero ac interdum finibus.
        </p>
      </div>

      <div className="relative flex items-center justify-center mt-8 group">
        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50 cursor-pointer "
        >
          <TbPlayerTrackPrevFilled />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-4">
          {visibleCategories.map((cat, index) => (
            <div key={cat.id || index} className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-90 h-90 sm:w-40 sm:h-40 md:w-60 md:h-60">
                <img
                  className="w-full h-full object-cover rounded-full cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
                  src={cat.image || fallbackImages[index % fallbackImages.length]}
                  alt={cat.title || "Category"}
                />
              </div>
              <h2 className="font-bold text-sm sm:text-base mt-2 text-center">
                {cat.title || "No Title"}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm text-center">
                {cat.products || 0} Products
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          disabled={currentIndex + itemsPerPage >= category.length}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full  cursor-pointer text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50"
        >
          <TbPlayerTrackNextFilled />
        </button>
      </div>
    </div>
  );
}

export default Category;