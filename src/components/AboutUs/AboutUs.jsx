import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#193985] mb-10">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#193985] mb-4">
              Our Belief
            </h3>
            <p className="text-gray-600">
              At Meanttor, we believe in the transformative power of education and
              personal growth. Our mission is to empower individuals to rise
              beyond the status quo, helping them discover and realize their true
              potential.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#193985] mb-4">
              Our Approach
            </h3>
            <p className="text-gray-600">
              As a leading Training and Consulting firm, we specialize in tailored
              learning experiences that foster both professional and personal
              development. We work closely with our clients to understand their
              unique challenges and aspirations, designing customized training
              solutions that drive meaningful change.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#193985] mb-4">
              Expertise
            </h3>
            <p className="text-gray-600">
              With a team of seasoned experts from diverse backgrounds, we bring a
              wealth of knowledge and experience to every engagement. Our
              commitment to excellence ensures that our programs are not only
              practical but also impactful, enabling individuals and organizations
              to thrive in today’s competitive environment.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#193985] mb-4">
              Our Dedication
            </h3>
            <p className="text-gray-600">
              We are dedicated to challenging conventional norms and inspiring a
              culture of continuous learning. Join us on this journey to rise
              above limitations and unlock your full potential. Together, we can
              create a brighter future where everyone is empowered to achieve
              their dreams.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-[#193985] text-white mt-16 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg">
            "To empower individuals and organizations to rise beyond the status
            quo, unlocking true potential and inspiring growth."
          </p>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-[#193985] mb-6 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-[#193985] mb-4">
                Empowerment
              </h4>
              <p className="text-gray-600">
                We believe in equipping individuals with the tools and confidence
                to achieve their best.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-[#193985] mb-4">
                Innovation
              </h4>
              <p className="text-gray-600">
                Embracing creativity and forward-thinking approaches to drive
                impactful learning experiences.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-[#193985] mb-4">
                Integrity
              </h4>
              <p className="text-gray-600">
                Building trust through transparency, respect, and ethical practices
                in all we do.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-[#193985] mb-4">
                Excellence
              </h4>
              <p className="text-gray-600">
                Striving for the highest standards in every training, interaction,
                and outcome.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-[#193985] mb-4">
                Growth Mindset
              </h4>
              <p className="text-gray-600">
                Encouraging continuous improvement, resilience, and a passion for
                lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
