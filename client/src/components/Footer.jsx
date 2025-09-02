import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <img src="/logo.png" alt="logo img" />
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
          <p className="text-gray-500">
            © 2025 IIT Ropar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
