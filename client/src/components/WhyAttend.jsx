import React from "react";
import { Users, Award, Lightbulb, Network, Building } from "lucide-react";
import KeynoteSpeaker from "./KeynoteSpeakers";
import { motion } from "framer-motion";

const whyAttendReasons = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Access to Top Talent",
    description:
      "Connect with brilliant minds from all departments of IIT Ropar",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Strategic Networking",
    description:
      "Build relationships with faculty, researchers, and innovators",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Brand Visibility",
    description:
      "Position your organization among India's brightest academic minds",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "R&D Collaborations",
    description:
      "Discover opportunities for research partnerships and innovation",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "CSR, Hiring, Innovation",
    description: "Connect for CSR, recruitment, and innovation collaborations",
  },
];

// Animation variants
const container = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const fadeInUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyAttend = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Keynote speakers */}
      <KeynoteSpeaker />

      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        variants={fadeInUp}
        animate="visible" // ✅ Always animate, no hidden state
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Why Attend Industry LYNK 2025?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Your participation helps fuel innovation, bridge academia-industry
          gaps, and position your organization as a thought leader and talent
          magnet.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex gap-6 overflow-x-auto lg:overflow-visible pb-4 hide-scrollbar justify-center"
        variants={container}
        animate="visible" // ✅ Cards animate in immediately
      >
        {whyAttendReasons.map((reason, i) => (
          <motion.div
            key={i}
            className="min-w-[220px] max-w-[220px] flex-shrink-0 text-center group bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white">{reason.icon}</span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyAttend;
