import React from 'react';

const PinkWaveBanner = () => {
  return (
    <div className="relative w-full h-12">
      {/* Main pink gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #FFD1DC, #FFE6EA, #FFD1DC)' }}>
        {/* Wave overlay */}
        <div className="absolute inset-0">
          <svg 
            viewBox="0 0 1200 100" 
            preserveAspectRatio="none" 
            className="h-full w-full"
          >
            <path 
              d="M0,0 Q300,80 600,40 T1200,60 V100 H0 Z" 
              fill="url(#pinkGradient)" 
              className="opacity-30"
            />
          </svg>
          <defs>
            <linearGradient id="pinkGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFD1DC" />
              <stop offset="50%" stopColor="#FFE6EA" />
              <stop offset="100%" stopColor="#FFD1DC" />
            </linearGradient>
          </defs>
        </div>

        {/* Single centered floating dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-pink-200/60 blur-sm animate-pulse" />
        
        {/* Subtle wave detail */}
        <div className="absolute inset-0">
          <svg 
            viewBox="0 0 1200 100" 
            preserveAspectRatio="none" 
            className="h-full w-full"
          >
            <path 
              d="M0,20 Q600,100 1200,30 V100 H0 Z" 
              fill="url(#pinkGradient2)" 
              className="opacity-20"
            />
          </svg>
          <defs>
            <linearGradient id="pinkGradient2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFD1DC" />
              <stop offset="50%" stopColor="#FFBBC8" />
              <stop offset="100%" stopColor="#FFD1DC" />
            </linearGradient>
          </defs>
        </div>
      </div>
    </div>
  );
};

export default PinkWaveBanner;