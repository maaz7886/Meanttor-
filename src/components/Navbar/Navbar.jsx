import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);

  // Array of taglines
  const taglines = [
    "Renew",
    "Realize",
    "Refine",
    "Reshape",
    "Reap",
    "Read",
    "Rise",
    "Reform",
    "Reflect",
    "Reach",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => {
        const newTagline = (prev + 1) % taglines.length;
        return newTagline;
      });
    }, 1000); // Change tagline every 500ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [taglines.length]);

  return (
    <nav className="bg-white shadow-md text-[#193985] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tight">
              <Link href="/">Meanttor</Link>
            </h1>
            <p className="text-sm font-medium">
              Meant to{" "}
              <span className="text-[#193985] font-bold">
                {taglines[currentTagline]}
                {console.log(taglines[currentTagline])}
              </span>
            </p>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/about-us"
              className="text-lg font-medium hover:text-gray-600 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium hover:text-gray-600 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/why-us"
              className="text-lg font-medium hover:text-gray-600 transition duration-300"
            >
              Why Us
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#193985] focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#193985] text-white">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md hover:bg-gray-600"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md hover:bg-gray-600"
            >
              Services
            </Link>
            <Link
              href="/why-us"
              className="block px-3 py-2 rounded-md hover:bg-gray-600"
            >
              Why Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
