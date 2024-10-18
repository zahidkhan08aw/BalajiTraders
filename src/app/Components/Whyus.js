"use client";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="bg-black text-yellow-400 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Why Choose Us for PVC Granules?
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section 1 */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              High-Quality PVC Granules
            </h3>
            <p className="text-gray-300">
              Our PVC granules are made from premium raw materials to ensure
              durability, flexibility, and cost-effectiveness. We focus on
              delivering superior quality granules for various industrial
              applications, including manufacturing pipes, fittings, wires, and
              cables.
            </p>
          </div>
          <img
            src="/Quality1.jpeg" // Replace with an actual image of PVC granules
            alt="High-Quality PVC Granules"
            className="w-80 h-80 object-cover rounded-lg"
          />
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/quality2.png" // Replace with an actual image
            alt="Eco-Friendly PVC"
            className="w-80 h-80 object-cover rounded-lg mb-6 md:mb-0"
          />
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Eco-Friendly Solutions
            </h3>
            <p className="text-gray-300">
              We are committed to sustainability. Our PVC granules are
              eco-friendly and recyclable, minimizing environmental impact while
              maintaining the highest industry standards. With us, you can
              contribute to a greener future.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Customized PVC Granule Solutions
            </h3>
            <p className="text-gray-300">
              We offer customized PVC granule solutions tailored to your
              specific industrial needs. Whether you require rigid, flexible, or
              specialty PVC, we provide precise formulations to suit your
              product requirements.
            </p>
          </div>
          <img
            src="/quality3.png" // Replace with an actual image
            alt="Customized PVC Solutions"
            className="w-80 h-80 object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
