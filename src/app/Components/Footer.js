// Footer.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-24 relative">
      {/* Shadow Line at the Top */}
      <div className="absolute top-0 left-0 w-full h-2 shadow-[0_-4px_8px_0_rgba(255,223,0,0.6)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Side: Company Info */}
        <motion.div
          className="space-y-4 text-center md:text-left p-4 border border-gray-700 rounded-lg shadow-lg shadow-yellow-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-2xl font-bold text-yellow-400">Balaji Traders</h2>
          <p className="text-gray-300 text-sm">
            Leaders in PVC scrap recycling, offering high-quality granules. With
            over 20 years of expertise in the PVC plastics industry.
          </p>
          <p className="text-gray-300 text-sm">
            Address: Begumpur Bharat Vihar Near Rohini Sector 24 Delhi 110086
            Near Begumpur Police Station -India
          </p>
          <p className="text-gray-300 text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-400">
              +91 (8860) 579-746
            </a>
          </p>
        </motion.div>

        {/* Right Side: Social Media Links */}
        <motion.div
          className="flex space-x-6 p-4 border border-gray-700 rounded-lg shadow-lg shadow-yellow-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <Link href="/" target="_blank">
            <FaFacebook className="text-2xl text-blue-500 hover:text-yellow-400 transition duration-300 shadow-md shadow-yellow-500/20" />
          </Link>
          <Link href="/" target="_blank">
            <FaInstagram className="text-2xl text-pink-500 hover:text-yellow-400 transition duration-300 shadow-md shadow-yellow-500/20" />
          </Link>
          <Link href="/" target="_blank">
            <FaLinkedin className="text-2xl text-blue-600 hover:text-yellow-400 transition duration-300 shadow-md shadow-yellow-500/20" />
          </Link>
          <Link href="https://wa.me/8860579746" target="_blank">
            <FaWhatsapp className="text-2xl text-green-500 hover:text-yellow-400 transition duration-300 shadow-md shadow-yellow-500/20" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Balaji Traders. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
