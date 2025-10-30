import React,{useEffect, useState} from "react";
import { Quote, Star } from "lucide-react";
import axios from "axios";

const CustomerReview = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customerreview/");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Customer Review
        </h2>
        <p className="text-gray-500">
          Mauris quis nisi elit curabitur sodales libero ac interdum finibus.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="border border-gray-400 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-black text-white p-3 rounded-full">
                <Quote size={20} />
              </div>
            </div>
            <h3 className="text-gray-800 font-semibold italic text-lg mb-2 text-center">
              “{review.reviewtitle}”
            </h3>
            <p className="text-gray-500 text-sm text-center mb-3">
              {review.review}
            </p>
            <p className="text-gray-900 font-semibold text-center mb-3">
              - {review.name}
            </p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < review.rating ? "#facc15" : "none"}
                  stroke="#facc15"
                  className="mx-0.5"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
