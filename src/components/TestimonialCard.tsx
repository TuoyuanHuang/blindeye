import React from 'react';

interface TestimonialCardProps {
  gamertag: string;
  level: string;
  quote: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  gamertag, 
  level, 
  quote 
}) => {
  return (
    <div className="bg-black border border-green-400 p-4 font-mono text-sm relative">
      {/* Terminal header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-green-400">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-green-400 text-xs">NEXUS_TERMINAL_v2.1</span>
      </div>
      
      {/* Terminal content */}
      <div className="space-y-2">
        <div className="text-green-400">
          <span className="text-cyan-400">user@blindeye:~$</span> whoami
        </div>
        <div className="text-white">
          {gamertag} // {level}
        </div>
        <div className="text-green-400">
          <span className="text-cyan-400">user@blindeye:~$</span> cat review.txt
        </div>
        <div className="text-gray-300 italic">
          "{quote}"
        </div>
        <div className="text-green-400">
          <span className="text-cyan-400">user@blindeye:~$</span> <span className="animate-pulse">_</span>
        </div>
      </div>
      
      {/* Glitch effect */}
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-magenta-500 opacity-20 animate-pulse"></div>
    </div>
  );
};