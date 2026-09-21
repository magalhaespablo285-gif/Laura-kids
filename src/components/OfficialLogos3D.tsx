import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * 3D High-Relief Official WhatsApp Logo
 * Crafted with exact official geometry, multi-stop convex gradients,
 * specular gloss overlay, inner bevel, and realistic layered drop shadows.
 */
export const WhatsApp3DLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${dim} ${className}`}>
      {/* Dynamic 3D ambient shadow */}
      <div className="absolute inset-1 rounded-full bg-emerald-700/40 blur-md transform translate-y-3 -z-10" />

      <svg
        viewBox="0 0 120 120"
        className="w-full h-full filter drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WhatsApp 3D Oficial"
      >
        <defs>
          {/* Base sphere 3D lighting */}
          <radialGradient id="wa3d-sphere" cx="38%" cy="32%" r="68%" fx="30%" fy="26%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="28%" stopColor="#25D366" />
            <stop offset="65%" stopColor="#1EBE5D" />
            <stop offset="90%" stopColor="#128C7E" />
            <stop offset="100%" stopColor="#075E54" />
          </radialGradient>

          {/* Top specular glossy reflection arc */}
          <linearGradient id="wa3d-specular" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Phone icon inner emboss */}
          <linearGradient id="wa3d-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F0FDF4" />
            <stop offset="100%" stopColor="#DCFCE7" />
          </linearGradient>

          {/* Bevel rim stroke */}
          <linearGradient id="wa3d-rim" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0.8" />
          </linearGradient>

          {/* Realistic drop shadow for vector elements */}
          <filter id="wa-inner-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#064E3B" floodOpacity="0.55" />
          </filter>

          <filter id="wa-icon-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#075E54" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* Outer Bevel Base Ring */}
        <circle cx="60" cy="60" r="54" fill="url(#wa3d-sphere)" stroke="url(#wa3d-rim)" strokeWidth="2.5" />

        {/* WhatsApp Speech Bubble Tail */}
        <path
          d="M38 78 L26 95 L45 88 Z"
          fill="url(#wa3d-sphere)"
          filter="url(#wa-inner-shadow)"
        />

        {/* Top Gloss Highlight Dome */}
        <ellipse cx="60" cy="36" rx="42" ry="24" fill="url(#wa3d-specular)" />

        {/* Lower Ambient bounce light */}
        <ellipse cx="60" cy="94" rx="34" ry="10" fill="#86EFAC" opacity="0.35" />

        {/* Official WhatsApp Phone Receiver Icon in 3D Emboss */}
        <g filter="url(#wa-icon-shadow)">
          <path
            d="M78.6 68.2C77.4 67.6 71.7 64.8 70.7 64.4C69.7 64.0 69.0 63.8 68.3 64.8C67.6 65.8 65.6 68.2 65.0 68.9C64.4 69.6 63.8 69.7 62.6 69.1C61.4 68.5 57.6 67.2 53.0 63.1C49.4 59.9 47.0 55.9 46.4 54.7C45.8 53.5 46.3 52.9 46.9 52.3C47.4 51.8 48.0 51.0 48.6 50.3C49.2 49.6 49.4 49.1 49.8 48.3C50.2 47.5 50.0 46.8 49.7 46.2C49.4 45.6 47.3 40.5 46.4 38.4C45.5 36.3 44.6 36.6 43.9 36.6C43.3 36.6 42.6 36.6 41.9 36.6C41.2 36.6 40.1 36.9 39.1 37.9C38.1 38.9 35.3 41.5 35.3 46.8C35.3 52.1 39.2 57.2 39.7 57.9C40.2 58.6 47.3 69.5 58.2 74.2C60.8 75.3 62.8 76.0 64.4 76.5C67.0 77.3 69.4 77.2 71.3 76.9C73.4 76.6 77.7 74.3 78.6 71.8C79.5 69.3 79.5 67.2 79.2 66.8C78.9 66.4 78.2 66.1 77.0 65.5L78.6 68.2Z"
            fill="url(#wa3d-icon-grad)"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * 3D High-Relief Official Instagram Logo
 * Crafted with exact official squircle geometry, official sunset radial gradient,
 * specular 3D glass gloss curve, embossed camera lens ring and flash node.
 */
export const Instagram3DLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${dim} ${className}`}>
      {/* Dynamic 3D ambient shadow */}
      <div className="absolute inset-1 rounded-3xl bg-pink-600/40 blur-md transform translate-y-3 -z-10" />

      <svg
        viewBox="0 0 120 120"
        className="w-full h-full filter drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Instagram 3D Oficial"
      >
        <defs>
          {/* Official Instagram Multi-Stop Sunset / Radial Gradient */}
          <radialGradient id="ig3d-radial" cx="20%" cy="105%" r="125%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="10%" stopColor="#FCAF45" />
            <stop offset="30%" stopColor="#F77737" />
            <stop offset="50%" stopColor="#F56040" />
            <stop offset="70%" stopColor="#FD1D1D" />
            <stop offset="85%" stopColor="#E1306C" />
            <stop offset="95%" stopColor="#C13584" />
            <stop offset="100%" stopColor="#833AB4" />
          </radialGradient>

          {/* Top-Right Secondary Purple/Royal Blue Depth */}
          <radialGradient id="ig3d-blue-accent" cx="85%" cy="15%" r="70%">
            <stop offset="0%" stopColor="#405DE6" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#5851DB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#833AB4" stopOpacity="0" />
          </radialGradient>

          {/* 3D Glass Specular Overlay */}
          <linearGradient id="ig3d-specular" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Outer Rim Stroke */}
          <linearGradient id="ig3d-rim" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FD1D1D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#405DE6" stopOpacity="0.7" />
          </linearGradient>

          {/* Camera Bevel Shadow */}
          <filter id="ig-camera-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#4C0519" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* 3D Squircle Base Container with Beveled Border */}
        <rect
          x="8"
          y="8"
          width="104"
          height="104"
          rx="29"
          fill="url(#ig3d-radial)"
          stroke="url(#ig3d-rim)"
          strokeWidth="2.5"
        />

        {/* Radial Purple/Blue Ambient Tone */}
        <rect
          x="8"
          y="8"
          width="104"
          height="104"
          rx="29"
          fill="url(#ig3d-blue-accent)"
        />

        {/* Top Gloss Arc */}
        <path
          d="M10 37 C 10 22, 22 10, 37 10 L83 10 C 98 10, 110 22, 110 37 C 75 52, 45 52, 10 37 Z"
          fill="url(#ig3d-specular)"
        />

        {/* Camera Elements in 3D High-Relief White */}
        <g filter="url(#ig-camera-shadow)">
          {/* Outer Camera Body Border */}
          <rect
            x="27"
            y="27"
            width="66"
            height="66"
            rx="18"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7.5"
          />

          {/* Center Lens Ring */}
          <circle
            cx="60"
            cy="60"
            r="16.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7.5"
          />

          {/* Lens Specular Inner Glint */}
          <circle
            cx="57"
            cy="57"
            r="4"
            fill="#FFFFFF"
            opacity="0.3"
          />

          {/* Flash Sensor Dot */}
          <circle
            cx="78"
            cy="42"
            r="4.2"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );
};
