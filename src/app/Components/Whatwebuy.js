"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhatWeBuy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { name: "Recycled Plastics", image: "/slide7.avif" }, // Replace with actual images
    { name: "Plastic Scraps", image: "/slide8.webp" },
    { name: "PVC Waste", image: "/slide3.jpeg" },
    { name: "Old Plastic Containers", image: "/slide4.jpg" },
    { name: "Industrial Plastic Waste", image: "/slide5.jpeg" },
    { name: "Plastic Films", image: "/slide6.webp" },
    { name: "HDPE Bottles", image: "/slide9.webp" },
    { name: "Plastic Packaging", image: "/slide10.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="bg-black py-16 px-8">
      <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">
        What We Buy
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="min-w-full h-96 flex flex-col justify-center items-center bg-gray-800 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className=" object-contain"
              />
              <h3 className="mt-4 text-xl text-blue-400 font-semibold">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? products.length - 1 : prevIndex - 1
              )
            }
            className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
              )
            }
            className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuy;
