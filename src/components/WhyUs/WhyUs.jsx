// pages/whyus.js

import React from "react";

const WhyUs = () => {
  const reasons = [
    {
      title: "Expertise You Can Trust",
      description:
        "Our team comprises industry professionals with years of experience and a proven track record of delivering excellence.",
      icon: "👩‍💻",
    },
    {
      title: "Tailored Solutions",
      description:
        "We offer customized strategies and services to meet your unique needs and goals, ensuring optimal results.",
      icon: "🎯",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize our clients' satisfaction and work closely with you to exceed expectations at every step.",
      icon: "🤝",
    },
    {
      title: "Proven Results",
      description:
        "With a history of successful projects and happy clients, we deliver measurable outcomes that drive growth.",
      icon: "📈",
    },
    {
      title: "Innovative Solutions",
      description:
        "We leverage the latest technologies and creative strategies to stay ahead of the curve.",
      icon: "💡",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is always ready to assist you, ensuring a seamless experience.",
      icon: "📞",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-[#193985] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Why Choose Us?</h1>
          <p className="mt-4 text-lg">
            Discover what makes us the trusted choice for our clients.
          </p>
        </div>
      </header>

      {/* Reasons Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h2 className="text-xl font-bold text-[#193985] mb-4">
                {reason.title}
              </h2>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WhyUs;
