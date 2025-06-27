import React from "react";
import { products } from "../utils";
import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent, Button } from "@mui/material";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm hover:bg-white"
          sx={{
            border: "none",
            borderRadius: "12px",
            "&:hover": {
              transform: "translateY(-8px)",
            },
          }}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-custom-primary via-custom-primary-light to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-[2px] bg-white rounded-lg"></div>

          <CardContent className="relative z-10 p-6">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-xl mb-6 bg-gray-100">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-colors duration-300 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.rating})
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-custom-primary transition-colors duration-300 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-custom-primary transition-colors duration-300">
                  ${product.price}
                </span>
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="contained"
                fullWidth
                className="relative overflow-hidden font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/btn"
                sx={{
                  background:
                    "linear-gradient(45deg, #d1008f 30%, #e633a7 90%)",
                  color: "white",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #a8006f 30%, #d1008f 90%)",
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 25px rgba(209, 0, 143, 0.3)",
                  },
                }}
              >
                <div className="relative flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110" />
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    Add to Cart
                  </span>
                </div>

                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </Button>
            </div>
          </CardContent>

          {/* Card glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-custom-primary via-custom-primary-light to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
