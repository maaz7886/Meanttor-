import React from "react";

const services = [
  {
    title: "Leadership Development Programs",
    description:
      "Our Leadership Development Programs empower both emerging and experienced leaders with skills for impactful leadership. Through workshops, simulations, and case studies, participants dive into strategic decision-making, emotional intelligence, and more.",
    audience:
      "HR managers, department heads, senior executives, and anyone in a leadership role.",
  },
  {
    title: "Skill Development & Upskilling",
    description:
      "Bridge the gap between current capabilities and future demands with tailored programs focusing on communication, critical thinking, digital literacy, and industry-specific skills.",
    audience:
      "Professionals, career changers, HR departments, and organizations aiming to upskill their workforce.",
  },
  {
    title: "Team Building and Collaboration Training",
    description:
      "Enhance team dynamics through immersive exercises that develop active listening, problem-solving, and conflict resolution skills, fostering trust and collaboration.",
    audience:
      "Team leaders, department heads, and HR professionals looking to build cohesive teams.",
  },
  {
    title: "Change Management Consulting",
    description:
      "Guide your organization through complex changes like restructuring or digital transformations with strategies that minimize resistance and maximize engagement.",
    audience:
      "Executives, HR leaders, and managers navigating organizational changes.",
  },
  {
    title: "Performance Optimization & Productivity Workshops",
    description:
      "Equip teams with tools for time management, prioritization, and goal-setting to optimize productivity and maintain work-life balance.",
    audience:
      "Managers, team leads, and individuals seeking to refine efficiency and performance.",
  },
  {
    title: "Executive and Personal Coaching",
    description:
      "Personalized coaching to help professionals achieve career milestones, improve decision-making, and overcome challenges.",
    audience:
      "Executives, professionals, and individuals focused on growth and career advancement.",
  },
  {
    title: "Employee Engagement Programs",
    description:
      "Cultivate motivation and job satisfaction with programs that emphasize recognition, communication, and work-life balance.",
    audience:
      "HR managers, business owners, and leaders aiming to boost morale and retention.",
  },
  {
    title: "Faculty Development Program",
    description:
      "Empower educators with advanced teaching methodologies and strategies to foster impactful learning environments.",
    audience:
      "Educational institutions, school administrators, and university department heads.",
  },
  {
    title: "Employment-Driven Programs",
    description:
      "Prepare job seekers with resume building, interview preparation, and workplace etiquette to boost employability.",
    audience:
      "Educational institutes, career counseling centers, and individuals seeking job readiness.",
  },
  {
    title: "Performance Assessment for Institutes and Corporates",
    description:
      "Gain actionable insights into productivity and effectiveness through comprehensive evaluations.",
    audience:
      "School and college administrators, corporate HR leaders, and organizational development teams.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="bg-[#193985] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-lg">
            Discover tailored solutions that inspire growth and drive success.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 hover:bg-[#f3f4f6] hover:text-[#193985] duration-300"
            >
              <h2 className="text-xl font-bold text-[#193985] mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-[#193985]">
                  Who Should Contact Us:
                </span>{" "}
                {service.audience}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
