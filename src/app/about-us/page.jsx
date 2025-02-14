"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default page;
