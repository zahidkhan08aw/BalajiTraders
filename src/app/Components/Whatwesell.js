"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatWeSell = () => {
  const products = [
    { name: "PVC White Granules", image: "/white.jpg" }, // Replace with actual images
    { name: "PVC White Road side Granules", image: "/whiteroad.jpg" },
    { name: "Light Grey Granules", image: "/lightgrey.jpg" },
    { name: "Dark Grey Granules", image: "/darkgrey.jpeg" },
    { name: "PVC Pipe Freezing", image: "/pipefreezing.jpeg" },
    { name: "PVC White Burada", image: "/whiteburada.jpeg" },
    { name: "UPVC Scrap", image: "/upvc.jpg" },
    { name: "PVC Blue Granules", image: "/blue.jpeg" },
    { name: "Lumbs Granules", image: "/lumbs.jpeg" },
  ];

  const openWhatsApp = (productName) => {
    const message = `Hi, I'm interested in the ${productName}. Can you please provide the price details?`;
    window.open(
      `https://wa.me/8860579746?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-black py-16 px-8">
      <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">
        What We Sell
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative group w-full h-80 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {/* Lighting effect on hover */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-yellow-400 transition-all duration-300 pointer-events-none"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px 5px #FFD700",
                }}
              />
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-center">
              <h3 className="text-lg text-black bg-white font-semibold">
                {product.name}
              </h3>

              <button
                onClick={() => openWhatsApp(product.name)}
                className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
              >
                Ask Price
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeSell;
