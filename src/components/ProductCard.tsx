import { Link } from 'react-router-dom';
import React, { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  hoverText: string;
  onProductSelect: (id: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  id,
  name, 
  price, 
  image, 
  description, 
  hoverText,
  onProductSelect
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-gray-900 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glitch border effect */}
      <div className={`absolute inset-0 border-2 transition-opacity duration-200 ${
        isHovered ? 'border-magenta-500 opacity-100 animate-pulse' : 'opacity-0'
      }`} style={{ transform: 'translate(2px, 2px)' }} />
      
      <div className="relative p-6 z-10">
        <div className="aspect-square bg-gray-800 mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isHovered ? 'scale-110 filter brightness-125' : ''
            }`}
          />
        </div>
        
        <h3 className="text-cyan-400 font-bold text-lg mb-2 font-mono tracking-wider">
          {name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold text-xl font-mono">
            ${price}
          </span>
          
          <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-black px-4 py-2 font-bold text-sm hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
            <span onClick={() => onProductSelect(id)}>GET GEAR</span>
          </button>
        </div>
        
        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20 border-2 border-cyan-400">
            <div className="text-center">
              <p className="text-cyan-400 font-bold text-lg font-mono mb-2">
                {hoverText}
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 mx-auto animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};