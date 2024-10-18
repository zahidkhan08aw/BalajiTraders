"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 4); // Cycle through 4 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sliderImages = [
    "/slider1.png", // Replace with your actual images
    "/slider2.png",
    "/slider3.png",
    "/slider4.png",
  ];

  return (
    <div className="relative bg-black pt-40 lg:pt-36 pb-16 px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row justify-between items-center overflow-hidden">
      {/* Left Side: Hero Content */}
      <motion.div
        className="md:w-1/2 space-y-6 relative z-10 text-center lg:text-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        {/* Yellow & Blue Text */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 leading-tight">
          Revolutionizing Plastics <br />
          Balaji Traders!
        </h1>

        <p className="text-2xl text-blue-400">
          Sustainable solutions for recycled plastic products.
        </p>

        <Link href="/About">
          <motion.button
            className="px-6 py-3 mt-2 bg-blue-500 text-black font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Side: Image Slider */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 relative h-[28rem] flex justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.0, ease: "easeInOut" }}
      >
        <div className="relative w-80 h-full mx-auto">
          {sliderImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-1000 transform-gpu rounded-lg overflow-hidden ${
                currentImage === index
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-full scale-90"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            >
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stylish Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Add background shapes but avoid overlapping the content */}
        <div className="absolute top-28 left-20 w-10 h-10 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-12 h-12 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
