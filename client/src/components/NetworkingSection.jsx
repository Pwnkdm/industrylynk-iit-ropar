import { Briefcase, Calendar, Infinity, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingIcon = ({ Icon, className, duration = 10, delay = 0 }) => (
  <motion.div
    className={`absolute text-cyan-500/20 ${className}`}
    initial={{ y: 0, opacity: 0.7 }}
    animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-12 h-12" />
  </motion.div>
);

const NetworkingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-09-30T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>
        {/* Event Impact Section */}
        <div className="relative bg-slate-900 rounded-2xl p-12 mb-12 text-white overflow-hidden">
          {/* Animated Background Shapes */}
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating Rings */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full opacity-10 text-cyan-400"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="200" cy="200" r="120" />
            <circle cx="200" cy="200" r="160" />
            <circle cx="200" cy="200" r="200" />
          </motion.svg>

          {/* Floating Icons */}
          <FloatingIcon Icon={Users} className="top-16 left-12" duration={12} />
          <FloatingIcon
            Icon={Briefcase}
            className="bottom-20 right-16"
            duration={14}
            delay={2}
          />
          <FloatingIcon
            Icon={Calendar}
            className="top-24 right-32"
            duration={16}
            delay={4}
          />
          <FloatingIcon
            Icon={Infinity}
            className="bottom-28 left-24"
            duration={18}
            delay={1}
          />

          {/* Title */}
          <h3 className="text-3xl font-bold text-center mb-12 relative z-10">
            Event Impact
          </h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { value: "500+", label: "Expected Participants", icon: Users },
              { value: "50+", label: "Industry Leaders", icon: Briefcase },
              { value: "1", label: "Immersive Day", icon: Calendar },
              { value: "∞", label: "Opportunities", icon: Infinity },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 bg-slate-800/50 rounded-xl shadow-lg hover:bg-slate-800/80 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <div className="text-3xl font-extrabold text-cyan-300">
                  {stat.value}
                </div>
                <p className="text-white/80 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Countdown to Industry LYNK 2025
          </h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            "Let's align for a smarter future"
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkingSection;
