import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  MessageSquare,
  Zap,
  Network,
  Cpu,
  Factory,
  Leaf,
  Workflow,
} from "lucide-react";
import iit_campus from "../assets/iit-1.png";

const eventHighlights = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Keynote Speakers",
    description:
      "Industry leaders sharing cutting-edge insights and future trends",
    gradient: "from-purple-100 to-pink-200",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Fireside Chat",
    description:
      "Intimate conversations with industry veterans and academic leaders",
    gradient: "from-blue-100 to-cyan-200",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "TED-Style Talk",
    description:
      "Inspiring presentations on innovation and technological breakthroughs",
    gradient: "from-yellow-100 to-orange-200",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Speed Networking",
    description:
      "Fast-paced networking sessions connecting talent with industry",
    gradient: "from-green-100 to-teal-200",
  },
];

const topics = [
  {
    topic: "Industry 4.0",
    icon: <Factory className="w-6 h-6 text-gray-700" />,
    gradient: "from-blue-100 to-blue-200",
  },
  {
    topic: "Artificial Intelligence",
    icon: <Cpu className="w-6 h-6 text-gray-700" />,
    gradient: "from-purple-100 to-purple-200",
  },
  {
    topic: "Sustainability",
    icon: <Leaf className="w-6 h-6 text-gray-700" />,
    gradient: "from-green-100 to-green-200",
  },
  {
    topic: "Future of Workflow",
    icon: <Workflow className="w-6 h-6 text-gray-700" />,
    gradient: "from-orange-100 to-orange-200",
  },
];

// Animation variants (no "hidden" state, always visible)
const fadeInUp = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeInLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeInRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const container = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${iit_campus})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-12 overflow-hidden">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            About Industry LYNK 2025
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed">
            Industry LYNK 2025 is the flagship industry-academia interface event
            hosted by IIT Ropar. This one-day immersive experience fosters
            meaningful engagement between students, faculty, and industry
            leaders.
          </p>
        </motion.div>

        {/* Two-column section */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Left side */}
          <motion.div variants={fadeInLeft} animate="visible">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Industry Lynk is designed to:
            </h3>
            <motion.div
              variants={container}
              animate="visible"
              className="space-y-4"
            >
              {[
                "Bridge the industry-academia gap through meaningful collaboration",
                "Provide students with access to real-world industry thinking",
                "Offer industry stakeholders visibility into the next generation of talent",
                "Create fertile ground for R&D collaborations, CSR partnerships, and recruitment pipelines",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  variants={fadeInUp}
                >
                  <p className="text-slate-700 leading-relaxed flex-1 text-sm md:text-base">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side (Topics) */}
          <motion.div variants={fadeInRight} animate="visible">
            <h3 className="text-center font-semibold text-xl text-white mb-8">
              Four Verticals
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={container}
              animate="visible"
            >
              {topics.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredCard(`topic-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow`}
                    animate={
                      hoveredCard === `topic-${i}`
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="font-medium text-slate-800 text-sm md:text-base">
                    {item.topic}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Event Highlights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed">
            A dynamic mix of engaging formats designed to maximize learning and
            networking opportunities
          </p>
        </motion.div>

        {/* Event Highlights */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          animate="visible"
        >
          {eventHighlights.map((highlight, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-2xl shadow-md p-5 text-center cursor-pointer overflow-hidden group flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredCard(`highlight-${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <motion.div
                className={`relative z-10 w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
                animate={
                  hoveredCard === `highlight-${i}`
                    ? { scale: 1.1, y: [0, -4, 0] }
                    : { scale: 1, y: 0 }
                }
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="text-gray-700">{highlight.icon}</span>
              </motion.div>

              <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10 group-hover:text-indigo-600 transition-colors">
                {highlight.title}
              </h3>

              <p className="text-gray-600 leading-relaxed relative z-10 text-sm flex-grow group-hover:text-gray-800 transition-colors">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
