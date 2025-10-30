import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateDeal = () => {
  const [deals, setDeals] = useState([]); 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    category: "",
    quantity: "",
    rating: "",
    status: "active",
  });
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all deals
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/deal");
        setDeals(response.data);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };
    fetchDeals();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    for (const key in formData) form.append(key, formData[key]);
    images.forEach((img) => form.append("image", img));

    try {
      const res = await axios.post("http://localhost:5000/api/deal", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Deal Created Successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        discountPrice: "",
        category: "",
        quantity: "",
        rating: "",
        status: "active",
      });
      setImages([]);
      setPreview([]);

      // Fetch deals again after creating
      const updatedDeals = await axios.get("http://localhost:5000/api/deal/all");
      setDeals(updatedDeals.data);
    } catch (err) {
      console.error(err);
      alert("❌ Error creating deal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CREATE DEAL FORM */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create New Deal
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-gray-700 capitalize mb-1">
                {key}
              </label>
              <input
                type={
                  ["price", "discountPrice", "quantity", "rating"].includes(key)
                    ? "number"
                    : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
          ))}

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-1">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full border rounded-md p-2 cursor-pointer"
            />
          </div>

          {/* Preview */}
          {preview.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-3">
              {preview.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="preview"
                  className="w-full h-28 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-4 transition-all duration-200"
          >
            {loading ? "Uploading..." : "Create Deal"}
          </button>
        </form>
      </div>

      {/* DISPLAY DEALS */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">All Deals</h2>

        {deals.length === 0 ? (
          <p className="text-center text-gray-500">No deals found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <div
                key={deal._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-4 flex justify-center bg-gray-100">
                  {deal.image && deal.image.length > 0 ? (
                    <img
                      src={`http://localhost:5000${deal.image[0]}`}
                      alt={deal.title}
                      className="h-40 w-40 object-contain"
                    />
                  ) : (
                    <div className="h-40 w-40 bg-gray-300 flex items-center justify-center">
                      <span>No Image</span>
                    </div>
                  )}
                </div>
                <div className="px-5 pb-5">
                  <h3 className="text-black text-lg font-semibold h-12 truncate">
                    {deal.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{deal.description}</p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-800">
                      Price: ₹{deal.price}
                    </p>
                    <p className="text-sm text-green-600">
                      Discount: ₹{deal.discountPrice}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {deal.quantity}
                    </p>
                    <p className="text-sm text-yellow-600">
                      Rating: ⭐ {deal.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CreateDeal;
