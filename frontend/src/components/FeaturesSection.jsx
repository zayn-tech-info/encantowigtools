"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import FeatureHeader from "./FeatureHeader";
import FeaturesGrid from "./FeaturesGrid";
import { Button } from "@mui/material";

const FeaturesSection = () => {
  return (
    <section className="container py-20 px-4 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-custom-primary/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-custom-primary-light/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}

        <FeatureHeader />
        {/* Features Grid */}

        <FeaturesGrid />
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            variant="contained"
            size="large"
            className="relative overflow-hidden font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group/cta"
            sx={{
              background: "linear-gradient(45deg, #d1008f 30%, #e633a7 90%)",
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              fontWeight: "600",
              "&:hover": {
                background: "linear-gradient(45deg, #a8006f 30%, #d1008f 90%)",
                boxShadow: "0 12px 30px rgba(209, 0, 143, 0.4)",
              },
            }}
          >
            <div className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover/cta:rotate-12" />
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </div>

            {/* Button shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
