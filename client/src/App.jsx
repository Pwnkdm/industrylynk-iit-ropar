import React, { useState } from "react";
import IndustryLynkWebsite from "./IndustryLynkWebsite ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        setIsMenuOpen={setIsMenuOpen}
      />
      <IndustryLynkWebsite
        scrollToSection={scrollToSection}
        setActiveSection={setActiveSection}
      />
      <Footer />
    </div>
  );
};

export default App;
