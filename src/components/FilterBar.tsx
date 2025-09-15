import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { value: 'name', label: 'NAME_A-Z' },
    { value: 'price-low', label: 'PRICE_LOW' },
    { value: 'price-high', label: 'PRICE_HIGH' },
    { value: 'popular', label: 'MOST_POPULAR' }
  ];

  return (
    <div className="bg-black border-2 border-cyan-400 p-4 mb-8 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Category Filter */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-cyan-400 hover:text-magenta-400 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>FILTER: {selectedCategory}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="absolute top-full left-0 mt-2 bg-black border-2 border-cyan-400 z-20 min-w-48">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category);
                    setIsFilterOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-cyan-400 hover:text-black transition-colors ${
                    selectedCategory === category ? 'text-magenta-400' : 'text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sort Options */}
        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center space-x-2 text-green-400 hover:text-magenta-400 transition-colors"
          >
            <span>SORT: {sortOptions.find(opt => opt.value === sortBy)?.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isSortOpen && (
            <div className="absolute top-full right-0 mt-2 bg-black border-2 border-green-400 z-20 min-w-48">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onSortChange(option.value);
                    setIsSortOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-black transition-colors ${
                    sortBy === option.value ? 'text-magenta-400' : 'text-green-400'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};