import React from "react";
import { features } from "../utils";
import { Card, CardContent } from "@mui/material";
import {Button} from "@mui/material";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";
const FeaturesGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={index}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm hover:bg-white border-0"
              sx={{
                borderRadius: "20px",
                animationDelay: feature.delay,
                animation: "fadeInUp 0.8s ease-out forwards",
                opacity: 0,
                transform: "translateY(30px)",
                "@keyframes fadeInUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {/* Animated Border Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="absolute inset-[2px] bg-white rounded-[18px]"></div>

              <CardContent className="relative z-10 p-8 text-center">
                {/* Icon Section */}
                <div className="relative mb-8">
                  {feature.hasImage ? (
                    <div className="relative mx-auto w-24 h-24 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-custom-primary to-custom-primary-light rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src="/images/hair-model.png"
                        alt="Hair model"
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-custom-primary to-custom-primary-light rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`relative mx-auto w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors duration-300"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-custom-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <Button
                      variant="text"
                      className="group/btn relative overflow-hidden font-semibold transition-all duration-300"
                      sx={{
                        color: "#d1008f",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "8px 16px",
                        borderRadius: "12px",
                        "&:hover": {
                          backgroundColor: "rgba(209, 0, 143, 0.1)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <span className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>

              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-[21px] blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              ></div>

              {/* Floating Particles Effect */}
              <div
                className="absolute top-4 right-4 w-2 h-2 bg-custom-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="absolute top-8 right-8 w-1.5 h-1.5 bg-custom-primary-light rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="absolute top-6 right-12 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesGrid;
