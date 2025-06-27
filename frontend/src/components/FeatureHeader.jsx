import React from "react";
import { Sparkles } from "lucide-react";

const FeatureHeader = () => {
  return (
    <div>
      <div className="text-center mb-16 relative">
        <div className="inline-block relative group">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-custom-primary animate-pulse" />
            <h2 className="text-5xl font-bold text-gray-800 transition-all duration-300 group-hover:text-custom-primary">
              Our Services
            </h2>
            <Sparkles className="w-8 h-8 text-custom-primary animate-pulse" />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-custom-primary to-custom-primary-light rounded-full transition-all duration-500 group-hover:w-40 group-hover:h-1.5"></div>
        </div>
        <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive range of premium hair and wig services
          designed to help you look and feel your absolute best
        </p>
      </div>
    </div>
  );
};

export default FeatureHeader;
