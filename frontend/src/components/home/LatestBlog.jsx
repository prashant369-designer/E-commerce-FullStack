import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LatestBlog() {
  const [blogPosts, setblogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog/");
        console.log("blogs response:", response.data);
        setblogPosts(response.data.blogs || response.data.data || response.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    
    fetchBlogs();
  }, []);


  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our Latest Blog
        </h2>
        <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Mauris quis nisi elit curabitur sodales libero ac interdum finibus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-8 border-b-2 border-gray-300">
        {blogPosts.map((blog) => (
          <div
            key={blog._id}
            className="bg-white transition-shadow duration-300">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <div className="p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm md:text-base uppercase font-semibold text-gray-600">
                {blog.date}
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mt-2 sm:mt-3 line-clamp-2">
                {blog.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 line-clamp-3">
                {blog.description}
              </p>
              <button
                className="relative mt-4 sm:mt-6 md:mt-8 cursor-pointer text-sm sm:text-base font-semibold text-black transition-colors duration-300 group"
                aria-label="Shop Men's Blue T-shirt"
              >
                SHOP NOW
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlog;