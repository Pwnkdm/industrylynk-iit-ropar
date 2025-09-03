import React from "react";
import varadhanan from "../assets/keynoteSpeakers/varadharaju_janardhanan.png";

const SpeakerSkeleton = ({
  speakerImage,
  speakerName,
  speakerTitle,
  speakerCompany,
  speakerBio,
  //   onKnowMore,
  backgroundColor = "",
  imageBackgroundColor = "bg-blue-100",
}) => {
  return (
    <div
      className={`w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 ${backgroundColor}`}
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
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
            <div className="space-y-6">
              {/* Speaker Type */}
              <div>
                {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
                  Keynote Speaker
                </h2> */}
              </div>

              {/* Speaker Name */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                  {speakerName || "Dr. Speaker Name"}
                </h3>
              </div>

              {/* Speaker Title & Company */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium">
                  {speakerTitle || "Chief Technology Officer"}
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium">
                  {speakerCompany || "Technology Company"}
                </p>
              </div>

              {/* Speaker Bio */}
              <div className="py-4">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {speakerBio || ""}
                </p>
              </div>

              {/* Know More Button */}
              {/* <div className="pt-4">
                <button
                  onClick={onKnowMore}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  KNOW MORE
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage component showing multiple speakers
export const KeynoteSpeaker = () => {
  const speakers = [
    {
      speakerImage: varadhanan,
      speakerName: "Varadharaju Janardhanan ",
      speakerTitle: "CHRO",
      speakerCompany: "Super Money, A Flipkart Group co.",
      speakerBio:
        "Dr. Varadharaju Janardhanan is a global HR leader, award-winning author, educationist, and coach with nearly three decades of experience across start-ups, mid-sized firms, and multinationals. He specializes in building and scaling talent functions, and actively contributes to the HR and student community as a speaker, certified executive coach, and mentor to early-stage tech founders.",
      //   onKnowMore: () => alert("More info about Dr. Harrick Vin"),
    },
  ];

  return (
    <div className="">
      <div className="py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keynote Speaker
          </h1>
          <div className="w-50 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {speakers.map((speaker, index) => (
            <SpeakerSkeleton
              key={index}
              speakerImage={speaker.speakerImage}
              speakerName={speaker.speakerName}
              speakerTitle={speaker.speakerTitle}
              speakerCompany={speaker.speakerCompany}
              speakerBio={speaker.speakerBio}
              //   onKnowMore={speaker.onKnowMore}
              backgroundColor={speaker.backgroundColor}
              imageBackgroundColor={speaker.imageBackgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeaker;
