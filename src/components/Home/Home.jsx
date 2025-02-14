import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: "url('/')",
      }}
    >
      <div className="bg-black bg-opacity-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white text-center">
          <h1 className="text-5xl font-bold mb-6">
            Empowering Success Through Training, Consulting, and Auditing
          </h1>
          <p className="text-lg mb-12">
            At Meanttor, we provide innovative solutions to help individuals and
            organizations rise beyond the status quo. Join us to unlock your
            full potential.
          </p>
          <Link
            href="/services"
            className="bg-[#193985] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#152d6a] transition"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#193985] mb-10">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#193985] mb-4">
                Training
              </h3>
              <p className="text-gray-600">
                Customized training programs designed to enhance skills, foster
                growth, and ensure success in a competitive environment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#193985] mb-4">
                Consulting
              </h3>
              <p className="text-gray-600">
                Strategic consulting services to address unique challenges,
                drive innovation, and achieve organizational goals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#193985] mb-4">
                Auditing
              </h3>
              <p className="text-gray-600">
                Comprehensive auditing solutions to ensure compliance, enhance
                efficiency, and mitigate risks effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
