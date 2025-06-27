"use client";
import React from "react";
import ProductHeader from "./ProductHeader.jsx";
import ProductGrid from "./ProductGrid.jsx";
import { Button } from "@mui/material";
const ProductSection = () => {
  return (
    <section className=" container py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ProductHeader />

        {/* Products Grid */}
        <ProductGrid />

        {/* View All Products Button */}
        <div className="text-center mt-16">
          <Button
            variant="outlined"
            size="large"
            className="relative overflow-hidden font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg group/view"
            sx={{
              borderColor: "#d1008f",
              color: "#d1008f",
              borderWidth: "2px",
              borderRadius: "12px",
              padding: "12px 32px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              "&:hover": {
                borderColor: "#d1008f",
                backgroundColor: "#d1008f",
                color: "white",
                boxShadow: "0 8px 25px rgba(209, 0, 143, 0.3)",
              },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-custom-primary to-custom-primary-light translate-y-full group-hover/view:translate-y-0 transition-transform duration-300"></div>
            <span className="relative">View All Products</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
