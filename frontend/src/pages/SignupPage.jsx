import React, { useState } from "react";
import WebLayout from "../layouts/WebLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleRegisterChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  // LOGIN API
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", loginData);
      const { fullName, email, role, token } = res.data;

      // ✅ Store token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert(`✅ Welcome back, ${fullName || email}`);

      // ✅ Redirect based on role
      if (role === "admin" || role === "superadmin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "❌ Login failed");
    }
  };

  // REGISTER API
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", registerData);
      setRegisterData({ fullName: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <WebLayout>
      <div className="min-h-screen max-w-8xl bg-[#f9f8f6] flex flex-col items-center py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          <a href="/">Home /</a> <span className="text-black">My account</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-10">My Account</h1>

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 px-6">
          {/* LOGIN SECTION */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-6">Login</h2>
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
                className="mt-10 hover:text-white relative px-6 py-3 font-semibold text-black  border-2 border-black overflow-hidden group rounded-xl cursor-pointer">
          <span className='absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0'></span>
          <span className='absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0'></span>
          <span className='relative z-10 group:hover:text-white transition-colors duration-800'>Login</span>
        </button>
            </form>
          </div>

          {/* REGISTER SECTION */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-6">Register</h2>
            <form className="space-y-5" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={registerData.fullName}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
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
                  type={showRegisterPassword ? "text" : "password"}
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  className="absolute right-2 top-[36px] text-gray-500 hover:text-black"
                >
                  👁
                </button>
              </div>

              <p className="text-sm text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-gray-800 underline">
                  privacy policy
                </a>
                .
              </p>

                <button
                type="submit"
                className="mt-10 hover:text-white relative px-6 py-3 font-semibold text-black  border-2 border-black overflow-hidden group rounded-xl cursor-pointer">
          <span className='absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0'></span>
          <span className='absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0'></span>
          <span className='relative z-10 group:hover:text-white transition-colors duration-800'>REGISTER</span>
        </button>
            </form>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
