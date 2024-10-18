// About.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Founder Image */}
        <motion.div
          className="relative w-full lg:w-1/2 h-80 lg:h-96"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/founder.jpg" // Replace with the actual founder's image path
            alt="Ajeet Kumar Gupta"
            layout="fill"
            className="object-contain rounded-lg shadow-lg"
          />
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-black py-1 px-2 rounded">
            Ajeet Kumar Gupta
          </div>
        </motion.div>

        {/* Experience and Explanation */}
        <motion.div
          className="lg:w-1/2 lg:pl-10 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Balaji Traders
          </h2>
          <p className="text-lg text-gray-300">
            At Balaji Traders, we pride ourselves on our 20 years of experience
            in the PVC plastics industry. Our expert, Ajeet Kumar Gupta, has
            dedicated his career to sourcing high-quality PVC scraps and water
            tanks, ensuring that we deliver the finest granules to our clients.
            Our commitment to excellence and sustainability drives us to provide
            the best products in the market.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            We believe that our workers are our greatest asset. With a team of
            skilled professionals, we guarantee that every product we sell meets
            the highest standards of quality and efficiency.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
