import React from "react";

// Enhanced Double Wave Separator with natural curves
export const WaveSeparator = ({
  flip = false,
  primaryColor = "",
  secondaryColor = "",
  backgroundColor = "transparent",
  height = "150px",
  className = "",
}) => {
  const waveStyle = {
    height: height,
    overflow: "hidden",
    lineHeight: 0,
    transform: flip ? "rotate(180deg)" : "none",
  };

  return (
    <div className={`wave-separator ${className}`} style={waveStyle}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        style={{ backgroundColor }}
      >
        {/* Background/Secondary Wave - lighter and more subtle */}
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={secondaryColor}
          fillOpacity="0.4"
        />

        {/* Primary Wave - prominent and defined */}
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill={primaryColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};

// Alternative Double Wave with different curves
export const WaveSeparator2 = ({
  flip = false,
  primaryColor = "#ffffff",
  secondaryColor = "#f1f5f9",
  backgroundColor = "transparent",
  height = "150px",
  className = "",
}) => {
  const waveStyle = {
    height: height,
    overflow: "hidden",
    lineHeight: 0,
    transform: flip ? "rotate(180deg)" : "none",
  };

  return (
    <div className={`wave-separator ${className}`} style={waveStyle}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        style={{ backgroundColor }}
      >
        {/* Secondary Wave - softer background layer */}
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={secondaryColor}
          fillOpacity="0.3"
        />

        {/* Primary Wave - main prominent curve */}
        <path
          d="M1200,0H0V35.74C67.94,28.21,144.42,45.32,220.58,52.16,334.05,62.36,449.93,41.18,565.36,49.85c93.18,7,186.36,32.48,278.64,25.15,43.77-3.47,86.72-15.07,128.17-30.39C1054.93,25.5,1127.75,8.93,1200,35.74Z"
          fill={primaryColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};

// Organic Double Wave with very natural curves
export const OrganicDoubleWave = ({
  flip = false,
  primaryColor = "#ffffff",
  secondaryColor = "#f8fafc",
  backgroundColor = "transparent",
  height = "150px",
  className = "",
}) => {
  const waveStyle = {
    height: height,
    overflow: "hidden",
    lineHeight: 0,
    transform: flip ? "rotate(180deg)" : "none",
  };

  return (
    <div className={`wave-separator ${className}`} style={waveStyle}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        style={{ backgroundColor }}
      >
        {/* Background wave - very subtle */}
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          fill={secondaryColor}
          fillOpacity="0.25"
        />

        {/* Mid wave - medium prominence */}
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill={secondaryColor}
          fillOpacity="0.5"
        />

        {/* Primary wave - most prominent */}
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={primaryColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};

// Demo component showing all variations
const WaveDemo = () => {
  return (
    <div className="w-full">
      {/* Demo Section 1 - Dark to Light */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Enhanced Double Waves</h1>
          <p className="text-lg mb-6 text-slate-300">
            Natural curves with layered depth
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto">
            These double wave separators create beautiful, natural transitions
            between sections with a prominent main wave and a subtle background
            wave for added depth.
          </p>
        </div>

        {/* Double Wave Separator */}
        <WaveSeparator
          primaryColor="#ffffff"
          secondaryColor="#f1f5f9"
          height="150px"
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* Demo Section 2 - Light background */}
      <section className="bg-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Standard Double Wave
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              This wave uses two layers - a primary prominent wave and a
              secondary subtle wave for natural depth.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left font-mono text-sm">
              {`<DoubleWaveSeparator 
  primaryColor="#1f2937" 
  secondaryColor="#374151"
  height="150px" 
/>`}
            </div>
          </div>
        </div>

        {/* Alternative Double Wave */}
        <WaveSeparator2
          primaryColor="#1f2937"
          secondaryColor="#374151"
          height="150px"
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* Demo Section 3 - Dark background */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-300">
            Alternative Double Wave
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            A different curve pattern with more organic, flowing lines that
            create a sophisticated transition effect.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-left font-mono text-sm max-w-2xl mx-auto">
            {`<DoubleWaveSeparator2 
  primaryColor="#ffffff" 
  secondaryColor="#e2e8f0"
  height="150px" 
/>`}
          </div>
        </div>

        {/* Organic Double Wave */}
        <OrganicDoubleWave
          primaryColor="#ffffff"
          secondaryColor="#e2e8f0"
          height="160px"
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* Demo Section 4 - Light background */}
      <section className="bg-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Organic Triple Wave
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The most natural-looking wave with three layers for maximum depth
            and organic feel.
          </p>
        </div>

        {/* Flipped Organic Wave */}
        <OrganicDoubleWave
          flip={true}
          primaryColor="#0f172a"
          secondaryColor="#1e293b"
          height="160px"
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* Demo Section 5 - Showing flipped version */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-300">
            Flipped Wave Examples
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
            All waves can be flipped using the `flip={true}` prop for top
            separators or different visual effects.
          </p>

          {/* Examples Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Normal Orientation
              </h3>
              <div className="bg-slate-800 p-4 rounded-lg">
                <WaveSeparator
                  primaryColor="#3b82f6"
                  secondaryColor="#1e40af"
                  height="80px"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Flipped Version
              </h3>
              <div className="bg-slate-800 p-4 rounded-lg">
                <WaveSeparator
                  flip={true}
                  primaryColor="#10b981"
                  secondaryColor="#047857"
                  height="80px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final wave */}
        <WaveSeparator
          primaryColor="#ffffff"
          secondaryColor="#f8fafc"
          height="150px"
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* Implementation Guide */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Implementation Guide
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800">
                Wave Properties
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-3">
                    Color Props:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <code className="bg-white px-2 py-1 rounded">
                        primaryColor
                      </code>{" "}
                      - Main prominent wave
                    </li>
                    <li>
                      <code className="bg-white px-2 py-1 rounded">
                        secondaryColor
                      </code>{" "}
                      - Background subtle wave
                    </li>
                    <li>
                      <code className="bg-white px-2 py-1 rounded">
                        backgroundColor
                      </code>{" "}
                      - SVG background
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-3">
                    Other Props:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <code className="bg-white px-2 py-1 rounded">
                        flip={true / false}
                      </code>{" "}
                      - Orientation
                    </li>
                    <li>
                      <code className="bg-white px-2 py-1 rounded">height</code>{" "}
                      - Wave height (e.g. "150px")
                    </li>
                    <li>
                      <code className="bg-white px-2 py-1 rounded">
                        className
                      </code>{" "}
                      - Additional CSS classes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-800">
                Best Practices
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold text-emerald-700">
                    Color Matching:
                  </span>{" "}
                  Set primaryColor to match the next section's background
                </p>
                <p>
                  <span className="font-semibold text-emerald-700">
                    Height Sizing:
                  </span>{" "}
                  Use 120-180px for desktop, consider responsive scaling
                </p>
                <p>
                  <span className="font-semibold text-emerald-700">
                    Layering:
                  </span>{" "}
                  Secondary wave opacity is automatically reduced for subtle
                  depth
                </p>
                <p>
                  <span className="font-semibold text-emerald-700">
                    Positioning:
                  </span>{" "}
                  Use absolute positioning at section bottom for seamless
                  integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaveDemo;
