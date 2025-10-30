import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ open, onClose }) {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Handle input changes
  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  // LOGIN API
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );
      const {role, token } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);


      navigate("/");
      onClose(); 
    } catch (err) {
      alert(err.response?.data?.message || " Login failed");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-md shadow-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl font-medium mb-6">Login</h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              type={showLoginPassword ? "text" : "password"}
              value={loginData.password}
              onChange={handleLoginChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black pr-10"
            />
            <button
              type="button"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
              className="absolute right-2 top-[36px] text-gray-500 hover:text-black"
            >
              👁
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Lost your password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-10 hover:text-white relative px-6 py-3 font-semibold text-black border-2 border-black overflow-hidden group rounded-xl cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-800">
              Login
            </span>
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6 border-t pt-4">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-black font-medium hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
