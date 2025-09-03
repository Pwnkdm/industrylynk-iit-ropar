import React, { useState } from "react";
import varadhanan from "../assets/keynoteSpeakers/varadharaju_janardhanan.png";

const SpeakerSkeleton = ({
  speakerImage,
  speakerName,
  speakerTitle,
  speakerCompany,
  speakerBio,
  onKnowMore,
  backgroundColor = "",
  imageBackgroundColor = "bg-blue-100",
}) => {
  return (
    <div
      className={`w-full max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 mb-10 ${backgroundColor}`}
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div
            className={`${imageBackgroundColor} flex items-center justify-center p-8 lg:p-12`}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-xl">
                {speakerImage ? (
                  <img
                    src={speakerImage}
                    alt={speakerName}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                      1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 
                      1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
            <div className="space-y-6">
              {/* Speaker Name */}
              <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                {speakerName || "Dr. Speaker Name"}
              </h3>

              {/* Speaker Title & Company */}
              <div className="space-y-2">
                <p className="text-md sm:text-md lg:text-lg text-slate-600 font-medium">
                  {speakerTitle || "Chief Technology Officer"}
                </p>
                <p className="text-md sm:text-md lg:text-lg text-slate-600 font-medium">
                  {speakerCompany || "Technology Company"}
                </p>
              </div>

              {/* Short Bio Preview */}
              <p className="text-base sm:text-md text-slate-600 leading-relaxed max-w-2xl line-clamp-3">
                {speakerBio || ""}
              </p>

              {/* Know More Button */}
              <div className="pt-4 m-auto w-fit">
                <button
                  onClick={onKnowMore}
                  className="bg-blue-700 hover:bg-cyan-600 text-white font-semibold px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Component
const SpeakerModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-20 flex items-center justify-center z-50"
      onClick={onClose} // close on background click
    >
      <div
        className="bg-white rounded shadow-2xl max-w-3xl w-full p-8 relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl cursor-pointer"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Speaker Image */}
          <div className="flex justify-center items-center">
            <img
              src={speaker.speakerImage}
              alt={speaker.speakerName}
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Speaker Info */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              {speaker.speakerName}
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              {speaker.speakerTitle}
            </p>
            <p className="text-xl text-slate-600 font-medium">
              {speaker.speakerCompany}
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              {speaker.speakerBio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KeynoteSpeaker = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      speakerImage: varadhanan,
      speakerName: "Varadharaju Janardhanan ",
      speakerTitle: "CHRO",
      speakerCompany: "Super Money, A Flipkart Group co.",
      speakerBio:
        "Dr. Varadharaju Janardhanan is a global HR leader, award-winning author, educationist, and coach with nearly three decades of experience across start-ups, mid-sized firms, and multinationals. He specializes in building and scaling talent functions, and actively contributes to the HR and student community as a speaker, certified executive coach, and mentor to early-stage tech founders.",
    },
  ];

  return (
    <div>
      <div className="py-5">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-3xl font-bold text-slate-800 mb-4">
            Keynote Speaker
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div>
          {speakers.map((speaker, index) => (
            <SpeakerSkeleton
              key={index}
              {...speaker}
              onKnowMore={() => setSelectedSpeaker(speaker)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
};

export default KeynoteSpeaker;
