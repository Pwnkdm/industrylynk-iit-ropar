import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegistrationNotice = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        {/* Icon */}
        <div
          className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 text-blue-600"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Clock size={32} />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Registration Opening Soon!
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600">
          Stay tuned for updates. Registration will be available shortly.
        </p>

        {/* Button */}
        <Link to="/">
          <button
            className="relative mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 
             text-white font-semibold shadow-lg transition-all duration-300
             hover:from-blue-600 hover:to-cyan-600 hover:scale-105 hover:shadow-xl
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationNotice;
