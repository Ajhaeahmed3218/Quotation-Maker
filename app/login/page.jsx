"use client";
import Link from 'next/link';
import React from 'react';

const page = () => {

    const handleSubmit = async (e) => {
    
    
    }



  return (
    <div className="flex h-screen">
      {/* Left Section - Background Image with Overlay */}
      <div
        className="hidden lg:flex flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white tracking-wider text-center">
            Welcome to <span className="text-yellow-400">Alsama</span> <br /> Travel Agency
          </h1>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Sign In</h2>
          <p className="text-center text-gray-600 mt-2">Login to continue your journey ✈️</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button className="mt-4 w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-200 transition">
            🌍 Continue with Google
          </button>

          <p className="mt-6 text-center text-gray-700">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-yellow-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
