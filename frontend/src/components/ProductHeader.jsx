import React from "react";

const ProductHeader = () => {
  return (
    <div>
      <div className="text-center mb-16 relative">
        <div className="inline-block relative group">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 relative z-10 transition-all duration-300 group-hover:text-custom-primary">
            Our Products
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-custom-primary to-custom-primary-light rounded-full transition-all duration-500 group-hover:w-32 group-hover:h-1.5"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-custom-primary-light to-pink-400 rounded-full transition-all duration-700 group-hover:w-20"></div>
        </div>
        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Discover our curated collection of beauty essentials — from radiant
          foundations and long-lasting lipsticks to skin-loving serums. Every
          product is crafted to enhance your natural glow, no matter your skin
          type or tone.
        </p>
      </div>
    </div>
  );
};

export default ProductHeader;
