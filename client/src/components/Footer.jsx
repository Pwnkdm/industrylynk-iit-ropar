import React from "react";
import { Mail, Phone, MapPin, Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Event Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  <img
                    src="/logo.png"
                    alt="logo img"
                    className="w-full h-full"
                  />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Industry LYNK 2025</h3>
                <p className="text-gray-400">IIT Ropar</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Organized by CAPS (Corporate, Alumni, Placement & Strategies)
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-white">Sonali Singh</p>
                <p className="text-sm text-gray-400">Corporate Manager</p>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:cm.caps@iitrpr.ac.in"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  cm.caps@iitrpr.ac.in
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+917087478985"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  +91 70874 78985
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Location */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Event Details
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  IIT Ropar Campus
                  <br />
                  Punjab, India - 140001
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Building className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  30th September 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 IIT Ropar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
