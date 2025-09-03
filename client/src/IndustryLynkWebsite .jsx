import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Calendar,
  MapPin,
  Users,
  Award,
  Menu,
  X,
  Target,
  Lightbulb,
  Network,
  Mic,
  MessageSquare,
  Zap,
  Building,
} from "lucide-react";
import KeynoteSpeaker from "./components/KeynoteSpeakers";

const IndustryLynkWebsite = ({ scrollToSection, setActiveSection }) => {
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

  const eventHighlights = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Keynote Speakers",
      description:
        "Industry leaders sharing cutting-edge insights and future trends",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Fireside Chat",
      description:
        "Intimate conversations with industry veterans and academic leaders",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "TED-Style Talk",
      description:
        "Inspiring presentations on innovation and technological breakthroughs",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Speed Networking",
      description:
        "Fast-paced networking sessions connecting talent with industry",
    },
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen relative overflow-hidden text-white bg-gradient-to-tr from-green-700 to-indigo-600"
      >
        {/* Background video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="items-center space-x-4 mb-6 flex flex-col ">
                <div className="w-80 h-80 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">
                    <img
                      src="/caps-logo.png"
                      className="w-full h-full"
                      alt="caps logo"
                    />
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-lg opacity-90">Organized by CAPS</p>
                  <p className="text-sm opacity-75">IIT Ropar</p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              INDUSTRY LYNK
              <span className="block text-3xl md:text-5xl text-white">
                2025
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-white-700 italic">
              "Portal to Next-Gen Industry Excellence"
            </p>

            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto">
              Aligning Horizons: Talent, Ideas & Industry for a Smarter Future
            </p>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto text-black">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-800" />
                <h3 className="text-lg font-semibold mb-2">Date</h3>
                <p className="text-lg">30th September 2025</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-800" />
                <h3 className="text-lg font-semibold mb-2">Venue</h3>
                <p className="text-lg">
                  IIT Ropar Campus, Punjab, India, 140001
                </p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Industry LYNK 2025
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Industry LYNK 2025 is the flagship industry-academia interface
              event hosted by IIT Ropar. This one-day immersive experience is
              crafted to foster meaningful engagement between students, faculty,
              and industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Bridge the industry-academia gap through meaningful
                    collaboration
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Provide students with access to real-world industry thinking
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Offer industry stakeholders visibility into the next
                    generation of talent
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Create fertile ground for R&D collaborations, CSR
                    partnerships, and recruitment pipelines
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Event Impact
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <p className="text-gray-700">Expected Participants</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <p className="text-gray-700">Industry Leaders</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                  <p className="text-gray-700">Immersive Day</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                  <p className="text-gray-700">Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section id="highlights" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A dynamic mix of engaging formats designed to maximize learning
              and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600">{highlight.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynote Speaker  */}
      <KeynoteSpeaker />

      {/* Why Attend */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Attend Industry LYNK 2025?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your participation helps fuel innovation, bridge academia-industry
              gaps, and position your organization as a thought leader and
              talent magnet.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {whyAttendReasons.map((reason, index) => (
              <div
                key={index}
                className="text-center group bg-white shadow-md rounded-2xl p-6 w-72 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white">{reason.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Platform for Innovation</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              Industry LYNK provides unparalleled opportunities for CSR
              initiatives, strategic hiring, innovation partnerships, and
              academic consultancy collaborations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">CSR Partnerships</div>
                <p className="text-blue-100">
                  Corporate Social Responsibility initiatives
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Talent Pipeline</div>
                <p className="text-blue-100">
                  Direct access to top-tier talent
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">
                  R&D Collaborations
                </div>
                <p className="text-blue-100">
                  Research and development partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
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

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Contact Information
              </h3>

              {/* Contacts Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Sonali Singh */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">
                    Corporate Manager
                  </h4>
                  <p className="text-gray-700">Sonali Singh</p>
                  <p>
                    <a
                      href="mailto:cm.caps@iitrpr.ac.in"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      cm.caps@iitrpr.ac.in
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+917087478985"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +91 70874 78985
                    </a>
                  </p>
                </div>

                {/* Ms. Sheetal Bhola */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">
                    Lead – Placement Liaison (CAPS, JA)
                  </h4>
                  <p className="text-gray-700">Sheetal Bhola</p>
                  <p>
                    <a
                      href="mailto:support.cdpc@iitrpr.ac.in"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      support.cdpc@iitrpr.ac.in
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+918528941148"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +91 85289 41148
                    </a>
                  </p>
                </div>
              </div>

              {/* Organization Info */}
              <div className="border-t border-gray-300 pt-6 text-center">
                <h4 className="font-semibold text-gray-900">Organization</h4>
                <p className="text-gray-700">
                  CAPS (Corporate, Alumni, Placement & Strategies)
                </p>
                <p className="text-gray-600">IIT Ropar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryLynkWebsite;
