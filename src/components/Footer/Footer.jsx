import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#193985] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-1">
              S9, Nano Wing, Fantasia Business park, Sector 30A, Vashi Navi
              Mumbai-4000703
            </p>
            <p className="mb-1">
              Email:{" "}
              <a href="mailto:info@meanttor.com" className="text-white">
                us@meanttor.com
              </a>
            </p>
            <p className="mb-1">
              Phone:{" "}
              <a href="tel:+917385854649" className="text-white">
                +917385854649
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right mt-6 md:mt-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Meanttor. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
