import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyAttend from "./components/WhyAttend";
import NetworkingSection from "./components/NetworkingSection";

const IndustryLynkWebsite = ({ setActiveSection }) => {
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
      <section id="about" className=" bg-white">
        <AboutSection />
      </section>

      {/* Why Attend */}
      <section id="speakers" className=" bg-white">
        <WhyAttend />
      </section>

      {/* Networking Section */}
      <section id="networking" className=" bg-gray-900 text-white">
        <NetworkingSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="border border-gray-700"></section>
    </div>
  );
};

export default IndustryLynkWebsite;
