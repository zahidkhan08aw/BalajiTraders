"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle closing the mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg fixed w-full z-20 navbar">
      <div className="container mx-auto px-4 py-4 flex justify-between lg:justify-around items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Wahid Plastics Home"
        >
          <img
            src="/blogo.png" // Add your logo file path
            alt="Wahid Plastics - Leading in Plastic Solutions"
            width={80}
            height={80}
            className="cursor-pointer transition-transform transform hover:scale-105"
          />
          <span className="text-yellow-500 font-extrabold">Balaji Traders</span>
        </Link>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-yellow-400 text-xl font-thin">
          <li>
            <Link
              href="/"
              className="hover:text-blue-500 hover:underline transition duration-300"
              aria-label="Home - Wahid Plastics"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Whatwesell"
              className="hover:text-blue-500 hover:underline transition duration-300"
              aria-label="Services - Wahid Plastics"
            >
              What we Sell
            </Link>
          </li>
          <li>
            <Link
              href="/Whatwebuy"
              className="hover:text-blue-500 hover:underline transition duration-300"
              aria-label="Strategy - Wahid Plastics"
            >
              What We Buy
            </Link>
          </li>
          <li>
            <Link
              href="/Whyus"
              className="hover:text-blue-500 hover:underline transition duration-300"
              aria-label="Why Choose Us - Wahid Plastics"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="hover:text-blue-500 hover:underline transition duration-300"
              aria-label="About Us - Wahid Plastics"
            >
              About
            </Link>
          </li>
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8860579746"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2 bg-yellow-400 text-black rounded-lg transition-transform transform hover:scale-105"
          aria-label="Connect with Wahid Plastics on WhatsApp"
        >
          Connect ON WhatsApp
        </a>

        {/* Hamburger Icon for Mobile */}
        <div
          onClick={handleToggleMenu}
          className={`md:hidden flex flex-col items-center justify-center space-y-1 cursor-pointer hamburger ${
            isOpen ? "active" : ""
          }`}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-0.5 bg-yellow-400 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-yellow-400 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-yellow-400 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black shadow-lg md:hidden transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-4 text-yellow-400">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 hover:underline transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Home - Wahid Plastics"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Service"
                className="hover:text-blue-500 hover:underline transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Services - Wahid Plastics"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/Strategy"
                className="hover:text-blue-500 hover:underline transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Strategy - Wahid Plastics"
              >
                Strategy
              </Link>
            </li>
            <li>
              <Link
                href="/Whyus"
                className="hover:text-blue-500 hover:underline transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Why Choose Us - Wahid Plastics"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="hover:text-blue-500 hover:underline transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="About Us - Wahid Plastics"
              >
                About
              </Link>
            </li>

            <li>
              <a
                href="https://wa.me/8860579746"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg transition-transform transform hover:scale-105"
                onClick={() => setIsOpen(false)}
                aria-label="Connect with Wahid Plastics on WhatsApp"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
