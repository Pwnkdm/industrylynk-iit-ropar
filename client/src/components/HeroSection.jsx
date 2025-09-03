import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-fit relative overflow-hidden text-white bg-gradient-to-tr from-black to-black"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/24/17/16/meeting-782050_1280.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-800 bg-clip-text text-transparent">
            INDUSTRY LYNK
            <span className="block text-3xl md:text-5xl">2025</span>
          </h1>

          <div
            style={{ fontFamily: "Kalam" }}
            className="text-xl md:text-2xl mb-4 text-white-700 italic"
          >
            "Portal to Next-Gen Industry Excellence"
            <motion.div
              className="h-[2px] bg-yellow-500 m-auto sm:w-[400px] w-[250px]" // thickness of line
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ originX: 0.5 }}
            />
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto">
            Aligning Horizons: Talent, Ideas & Industry for a Smarter Future
          </p>

          {/* Event Details */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-8 
                bg-black/20 backdrop-blur-lg border border-white/30 
                rounded-2xl p-6 shadow-lg"
          >
            {/* Date */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="flex items-center gap-2 text-base font-semibold text-blue-400 uppercase">
                <Calendar className="w-5 h-5 text-blue-400" />
                Date
              </h3>
              <p className="text-lg font-light mt-1">30th September 2025</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-blue-300/50"></div>

            {/* Venue */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="flex items-center gap-2 text-base font-semibold text-blue-400 uppercase">
                <MapPin className="w-5 h-5 text-blue-400" />
                Venue
              </h3>
              <p className="text-lg font-light mt-1">
                Main Auditorium, IIT Ropar Campus, Punjab, India, 140001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
