import React, { useState } from 'react';
import { Download, Star, Shield, Zap } from 'lucide-react';

interface DetailedProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  features: string[];
  rating: number;
  downloads: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  onClick?: () => void;
}

export const DetailedProductCard: React.FC<DetailedProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  description,
  features,
  rating,
  downloads,
  category,
  isNew,
  isPopular,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-gray-900 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Status badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
        {isNew && (
          <span className="bg-green-400 text-black px-2 py-1 text-xs font-bold font-mono">
            NEW
          </span>
        )}
        {isPopular && (
          <span className="bg-magenta-500 text-white px-2 py-1 text-xs font-bold font-mono">
            HOT
          </span>
        )}
      </div>

      {/* Glitch border effect */}
      <div className={`absolute inset-0 border-2 transition-opacity duration-200 ${
        isHovered ? 'border-magenta-500 opacity-100 animate-pulse' : 'opacity-0'
      }`} style={{ transform: 'translate(2px, 2px)' }} />
      
      <div className="relative p-6 z-10">
        {/* Image */}
        <div className="aspect-video bg-gray-800 mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isHovered ? 'scale-110 filter brightness-125' : ''
            }`}
          />
        </div>
        
        {/* Category */}
        <div className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">
          {category}
        </div>
        
        {/* Title */}
        <h3 className="text-cyan-400 font-bold text-lg mb-2 font-mono tracking-wider">
          {name}
        </h3>
        
        {/* Rating and Downloads */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
              />
            ))}
            <span className="text-gray-400 text-sm ml-2">({rating}.0)</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <Download className="w-4 h-4" />
            <span>{downloads}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
        
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-green-400 font-mono text-sm mb-2">KEY_FEATURES:</h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-300 text-xs flex items-center">
                <div className="w-1 h-1 bg-cyan-400 mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Price and CTA */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-green-400 font-bold text-xl font-mono">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm font-mono">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-black px-4 py-2 font-bold text-sm hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>VIEW DETAILS</span>
          </button>
        </div>
        
        {/* Security badges */}
        <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-1 text-green-400 text-xs">
            <Shield className="w-3 h-3" />
            <span>SECURE</span>
          </div>
          <div className="flex items-center space-x-1 text-cyan-400 text-xs">
            <Zap className="w-3 h-3" />
            <span>INSTANT</span>
          </div>
        </div>
      </div>
    </div>
  );
};