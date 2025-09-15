import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export const TerminalSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (query.length === 0) {
      setDisplayText('');
      return;
    }

    setIsTyping(true);
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= query.length) {
        setDisplayText(query.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [query]);

  return (
    <div className="relative max-w-md mx-auto">
      <div className="bg-black border-2 border-cyan-400 rounded-none p-3 font-mono text-cyan-400 shadow-lg shadow-cyan-400/20">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">$</span>
          <Search className="w-4 h-4 text-cyan-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-cyan-400 placeholder-gray-500 flex-1"
            placeholder="search_blindeye_inventory..."
          />
          {isTyping && <span className="animate-pulse text-green-400">|</span>}
        </div>
        {displayText && (
          <div className="mt-2 text-xs text-gray-400">
            {'>'} searching for "{displayText}"...
          </div>
        )}
      </div>
    </div>
  );
};