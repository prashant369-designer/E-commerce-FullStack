import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const PopularProducts = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Electronics");

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/deal/");
        if (!response.ok) {
          throw new Error("Failed to fetch deals");
        }
        const data = await response.json();
        setDeals(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  const calculateDiscount = (price, discountPrice) => {
    if (!price || !discountPrice) return 0;
    return Math.round(((price - discountPrice) / price) * 100);
  };

  const filteredDeals = deals.filter((deal) => deal.category === activeTab);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p>Loading deals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center px-2">
        <h2 className="text-3xl font-bold ">Deal Of The Week</h2>
        <p className="mb-8">Mauris quis nisi elit curabitur sodales libero ac interdum finibus.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((item) => (
              <div
                key={item._id}
                className="relative text-black rounded-2xl transition transform hover:-translate-y-1"
              >
                {calculateDiscount(item.price, item.discountPrice) > 0 && (
                  <span className="absolute top-3 left-3 bg-black text-xs text-white px-2 py-1 rounded">
                    -{calculateDiscount(item.price, item.discountPrice)}%
                  </span>
                )}

                <img
                  src={item.image[0]} 
                  alt={item.title}
                  className="w-full h-64 object-contain p-4"
                />

                <div className="text-center p-4">
                  <h3 className="text-sm font-medium mb-2">{item.title}</h3>

                  <div className="flex justify-center mb-2 text-yellow-400">
                    {Array.from({ length: Math.round(item.rating) }).map(
                      (_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      )
                    )}
                  </div>

                  <p className="text-lg font-semibold">
                    ${item.discountPrice}
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No deals available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;