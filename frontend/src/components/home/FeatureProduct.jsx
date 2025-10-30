import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import axios from "axios";

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/popularproduct/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Featured Products
        </h2>
        <p className="text-gray-500">
          Mauris quis nisi elit curabitur sodales libero ac interdum finibus.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="group flex bg-white rounded-2xl transition-all duration-200"
          >
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="px-5 pb-5">
              <h3 className="text-gray-800 text-sm font-medium h-12 mt-4">
                {product.description}
              </h3>

              <div className="flex items-center gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < product.rating ? "#facc15" : "none"}
                    stroke="#facc15"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="text-lg font-semibold text-gray-900">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
