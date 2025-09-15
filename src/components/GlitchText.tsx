import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  altText?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', altText }) => {
  const [glitched, setGlitched] = useState(false);
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitched(true);
      if (altText) {
        setShowAlt(true);
        setTimeout(() => setShowAlt(false), 75);
      }
      setTimeout(() => setGlitched(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative ${className}`}>
      <span className={`${glitched ? 'animate-pulse' : ''}`}>
        {showAlt && altText ? altText : text}
      </span>
      {glitched && (
        <>
          <span className="absolute top-0 left-0 text-cyan-400 opacity-70 animate-ping" style={{ transform: 'translate(-1px, -1px)' }}>
            {showAlt && altText ? altText : text}
          </span>
          <span className="absolute top-0 left-0 text-magenta-500 opacity-70 animate-ping" style={{ transform: 'translate(1px, 1px)' }}>
            {showAlt && altText ? altText : text}
          </span>
        </>
      )}
    </span>
  );
};