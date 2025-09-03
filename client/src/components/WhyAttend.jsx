import React from "react";
import {
  Users,
  Award,
  Lightbulb,
  Network,
  Building,
  Globe,
  Star,
  Sparkles,
  Calendar,
  Infinity,
  Briefcase,
} from "lucide-react";
import KeynoteSpeaker from "./KeynoteSpeakers";
import { motion } from "framer-motion";

const whyAttendReasons = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Access to Top Talent",
    description:
      "Connect with brilliant minds from all departments of IIT Ropar",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Strategic Networking",
    description:
      "Build relationships with faculty, researchers, and innovators",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Brand Visibility",
    description:
      "Position your organization among India's brightest academic minds",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "R&D Collaborations",
    description:
      "Discover opportunities for research partnerships and innovation",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "CSR, hiring, and innovation partnerships",
    description:
      "Connect for CSR, recruitment, and innovation-driven collaborations.",
  },
];

const WhyAttend = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Why Attend Industry LYNK 2025?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Your participation helps fuel innovation, bridge academia-industry
          gaps, and position your organization as a thought leader and talent
          magnet.
        </p>
      </div>

      {/* Event Impact  */}
      <div className="relative bg-slate-900 rounded-2xl p-10 mb-10 text-white overflow-hidden">
        {/* Animated Background Icons */}
        <motion.div
          className="absolute top-12 left-10 text-cyan-400/20"
          animate={{ y: [0, -50, 0] }} // bigger float
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users size={50} />
        </motion.div>

        <motion.div
          className="absolute bottom-14 right-20 text-blue-400/20"
          animate={{ rotate: [0, 360] }} // rotation
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Briefcase size={30} />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-1/3 text-indigo-400/15"
          animate={{ y: [0, 60, 0] }} // clear vertical bob
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Calendar size={60} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 text-purple-400/15"
          animate={{ scale: [1, 1.4, 1] }} // clear scaling pulse
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Infinity size={50} />
        </motion.div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-center mb-8 relative z-10">
          Event Impact
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 text-center relative z-10">
          <div>
            <div className="text-4xl font-extrabold mb-2 text-cyan-300">
              500+
            </div>
            <p className="text-white/80">Expected Participants</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-2 text-cyan-300">
              50+
            </div>
            <p className="text-white/80">Industry Leaders</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-2 text-cyan-300">1</div>
            <p className="text-white/80">Immersive Day</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-2 text-cyan-300">∞</div>
            <p className="text-white/80">Opportunities</p>
          </div>
        </div>
      </div>

      {/* Keynote speakers  */}
      <KeynoteSpeaker />

      <div className="w-fit m-auto text-2xl font-bold text-slate-800 py-5">
        What You'll Gain at Industry LYNC 2025
      </div>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {whyAttendReasons.map((reason, index) => (
          <div
            key={index}
            className="text-center group bg-white shadow-md rounded-2xl p-6 w-72 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white">{reason.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {reason.title}
            </h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAttend;
