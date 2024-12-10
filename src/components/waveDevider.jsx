import React from 'react';

const WaveDivider = () => {
  return (
    <div className="relative w-full h-48">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-purple-100/30" />
      
      {/* Top wave */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L60 16.7C120 33.3 240 66.7 360 83.3C480 100 600 100 720 83.3C840 66.7 960 33.3 1080 33.3C1200 33.3 1320 66.7 1380 83.3L1440 100V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0V0Z"
          fill="url(#gradient)"
          className="opacity-20"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="720"
            y1="0"
            x2="720"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom wave */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100L60 83.3C120 66.7 240 33.3 360 33.3C480 33.3 600 66.7 720 83.3C840 100 960 100 1080 83.3C1200 66.7 1320 33.3 1380 16.7L1440 0V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0V100Z"
          fill="url(#gradient2)"
          className="opacity-10"
        />
        <defs>
          <linearGradient
            id="gradient2"
            x1="720"
            y1="0"
            x2="720"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveDivider;