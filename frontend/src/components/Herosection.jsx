import React from "react";
import HeroImage from "../assets/herosection.png"
const Herosection = () => {
  return (
    <>
      <div className="container bg-pink-200">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <div className="flex md:items-center md:h-screen md:mt-0 mt-28">
            <div className="space-y-10">
              <p className="md:text-4xl text-2xl">
                Discover Premium Hair & Wig Products for Confidence and Beauty
              </p>
              <p className="md:text-lg text-popover text-sm">
                Encanto Wig Tools offers top-quality wigs and hair care products
                crafted to elevate your style and empower your confidence every
                day.
              </p>
              <button className="py-3 md:px-10 px-5 bg-primary font-medium md:text-lg text-white rounded-md">
                Show our collection
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
