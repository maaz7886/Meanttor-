"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ServicesPage from "@/components/Services/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
};

export default page;
