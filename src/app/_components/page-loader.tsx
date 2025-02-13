'use client';

import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        {/* Loader Animation */}
        <div className="relative flex items-center justify-center w-32 h-32">
          {/* Outer Ring */}
          <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-[#4b4179] animate-[spin_1.5s_linear_infinite]"></div>
          {/* Middle Ring */}
          <div className="absolute w-28 h-28 rounded-full border-4 border-t-transparent border-[#7a9a29] animate-[spin_2s_linear_infinite]"></div>
          {/* Inner Ring */}
          <div className="absolute w-20 h-20 rounded-full border-4 border-t-transparent border-gray-400 animate-[spin_3s_linear_infinite]"></div>

          {/* Additional Loader Design */}
          <ul className="absolute w-12 h-12 flex items-center justify-center">
            {/* Center Circle */}
            <li className="absolute w-4 h-4 bg-[#7a9a29] rounded-full scale-75 animate-pulse"></li>
            {/* Rotating Items */}
            {[...Array(8)].map((_, index) => (
              <li
                key={index}
                className={`absolute w-2 h-2 bg-[#000] rounded-full`}
                style={{
                  transform: `rotate(${index * 45}deg) translateX(20px)`,
                  animation: `floating-item 3.2s ease-in-out ${index * 0.2}s infinite`
                }}
              ></li>
            ))}
          </ul>
        </div>

        {/* Loader Text */}
        <div className="text-center text-white text-lg font-semibold mt-6">
          <p>Preparing Your Assistant</p>
          <p className="mt-1 text-sm text-gray-300">Please hold on, loading resources...</p>
        </div>

        {/* Progress Bar */}
        <div className="relative w-64 h-2 mt-6 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-[#4b4179] via-[#7a9a29] to-gray-400 rounded-full animate-[ping_1.5s_ease-in-out_infinite]"
            style={{ width: '50%' }} // Simulated progress width
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

