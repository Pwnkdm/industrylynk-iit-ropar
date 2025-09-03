import React, { useState, useEffect } from "react";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  Network,
  Mic,
  MessageSquare,
  Zap,
  Building,
} from "lucide-react";
import KeynoteSpeaker from "./components/KeynoteSpeakers";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyAttend from "./components/WhyAttend";

const IndustryLynkWebsite = ({ setActiveSection }) => {
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

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "highlights",
        "speakers",
        "networking",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <AboutSection />
      </section>

      {/* Why Attend */}
      <section id="speakers" className="py-20 bg-white">
        <WhyAttend />
      </section>

      {/* Networking Section */}
      <section id="networking" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Will Be There?
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Students</h3>
              <p className="text-gray-300">
                From all departments - Engineering, Sciences, Humanities
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Faculty & Researchers</h3>
              <p className="text-gray-300">
                Across disciplines, including Department Heads and PhD Scholars
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Industry Leaders</h3>
              <p className="text-gray-300">
                From top corporations and innovative startups
              </p>
            </div>
          </div>

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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us at Industry LYNK 2025
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-8">
              Interested in being a key voice at Industry LYNK 2025?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">{/* Contact Information */}</div>
        </div>
      </section>
    </div>
  );
};

export default IndustryLynkWebsite;
