import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  Mic,
  MessageSquare,
  Zap,
  Network,
  Cpu,
  Factory,
  Leaf,
  Workflow,
} from "lucide-react";

const eventHighlights = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Keynote Speakers",
    description:
      "Industry leaders sharing cutting-edge insights and future trends",
    gradient: "from-purple-100 to-pink-200",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Fireside Chat",
    description:
      "Intimate conversations with industry veterans and academic leaders",
    gradient: "from-blue-100 to-cyan-200",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "TED-Style Talk",
    description:
      "Inspiring presentations on innovation and technological breakthroughs",
    gradient: "from-yellow-100 to-orange-200",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Speed Networking",
    description:
      "Fast-paced networking sessions connecting talent with industry",
    gradient: "from-green-100 to-teal-200",
  },
];

const topics = [
  {
    topic: "Industry 4.0",
    icon: <Factory className="w-8 h-8 text-gray-700" />,
    gradient: "from-blue-100 to-blue-200",
  },
  {
    topic: "Artificial Intelligence",
    icon: <Cpu className="w-8 h-8 text-gray-700" />,
    gradient: "from-purple-100 to-purple-200",
  },
  {
    topic: "Sustainability",
    icon: <Leaf className="w-8 h-8 text-gray-700" />,
    gradient: "from-green-100 to-green-200",
  },
  {
    topic: "Future of Workflow",
    icon: <Workflow className="w-8 h-8 text-gray-700" />,
    gradient: "from-orange-100 to-orange-200",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          About Industry LYNK 2025
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
          Industry LYNK 2025 is the flagship industry-academia interface event
          hosted by IIT Ropar. This one-day immersive experience fosters
          meaningful engagement between students, faculty, and industry leaders.
        </p>
      </motion.div>

      {/* Two-column section */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
        {/* Left side */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8">
            Industry Lynk is designed to:
          </h3>
          <div className="space-y-6">
            {[
              {
                icon: <Target className="w-7 h-7 text-gray-700" />,
                text: "Bridge the industry-academia gap through meaningful collaboration",
                gradient: "from-blue-100 to-blue-200",
              },
              {
                icon: <Users className="w-7 h-7 text-gray-700" />,
                text: "Provide students with access to real-world industry thinking",
                gradient: "from-purple-100 to-purple-200",
              },
              {
                icon: <Lightbulb className="w-7 h-7 text-gray-700" />,
                text: "Offer industry stakeholders visibility into the next generation of talent",
                gradient: "from-orange-100 to-orange-200",
              },
              {
                icon: <Award className="w-7 h-7 text-gray-700" />,
                text: "Create fertile ground for R&D collaborations, CSR partnerships, and recruitment pipelines",
                gradient: "from-emerald-100 to-emerald-200",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow`}
                >
                  {item.icon}
                </div>
                <p className="text-slate-700 leading-relaxed flex-1 text-base md:text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side (Topics) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center font-semibold text-2xl text-slate-800 mb-10">
            Four Verticals
          </h3>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {topics.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all"
                variants={fadeInUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredCard(`topic-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow`}
                  animate={
                    hoveredCard === `topic-${i}` ? { scale: 1.1 } : { scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>
                <p className="font-medium text-slate-800 text-base md:text-lg">
                  {item.topic}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Highlights Header */}
      <motion.div
        className="text-center mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Event Highlights
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          A dynamic mix of engaging formats designed to maximize learning and
          networking opportunities
        </p>
      </motion.div>

      {/* Event Highlights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {eventHighlights.map((highlight, i) => (
          <motion.div
            key={i}
            className="relative bg-white rounded-3xl shadow-md p-8 text-center cursor-pointer overflow-hidden group flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={fadeInUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredCard(`highlight-${i}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background gradient (controlled by group-hover) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Circle Icon */}
            <motion.div
              className={`relative z-10 w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 group-hover:shadow-xl`}
              animate={
                hoveredCard === `highlight-${i}`
                  ? { scale: 1.1, y: [0, -5, 0] }
                  : { scale: 1, y: 0 }
              }
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="text-gray-700">{highlight.icon}</span>
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">
              {highlight.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed relative z-10 text-sm flex-grow group-hover:text-gray-800 transition-colors">
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
