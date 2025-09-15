import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, ChevronDown, Flame, Star, Eye, Grid, List } from 'lucide-react';
import { GlitchText } from '../components/GlitchText';
import { products } from '../lib/products';

interface ProductListingProps {
  onBack: () => void;
  onProductSelect: (productId: number) => void;
}

const ProductListing: React.FC<ProductListingProps> = ({ onBack, onProductSelect }) => {
  const [selectedGame, setSelectedGame] = useState('ALL_GAMES');
  const [selectedCategory, setSelectedCategory] = useState('ALL_TOOLS');
  const [priceRange, setPriceRange] = useState('ALL_PRICES');
  const [sortBy, setSortBy] = useState('POPULARITY');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const games = ['ALL_GAMES', 'FORTNITE', 'APEX_LEGENDS', 'VALORANT', 'WARZONE', 'CS2'];
  const categories = ['ALL_TOOLS', 'STREAMING_TOOLS', 'RECORDING_SUITE', 'PERFORMANCE_BOOST', 'OVERLAY_SYSTEMS', 'AUDIO_ENHANCEMENT'];
  const priceRanges = ['ALL_PRICES', 'FREE', '$1-$25', '$26-$50', '$51-$100', '$100+'];
  const sortOptions = ['POPULARITY', 'LATEST', 'POTENCY', 'PRICE_LOW', 'PRICE_HIGH'];

  const productList = products;

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedGame !== 'ALL_GAMES') {
      filtered = filtered.filter(p => p.game === selectedGame || p.game === 'ALL_GAMES');
    }

    if (selectedCategory !== 'ALL_TOOLS') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (priceRange !== 'ALL_PRICES') {
      const price = parseFloat(filtered[0]?.price || '0');
      switch (priceRange) {
        case 'FREE':
          filtered = filtered.filter(p => parseFloat(p.price) === 0);
          break;
        case '$1-$25':
          filtered = filtered.filter(p => parseFloat(p.price) >= 1 && parseFloat(p.price) <= 25);
          break;
        case '$26-$50':
          filtered = filtered.filter(p => parseFloat(p.price) >= 26 && parseFloat(p.price) <= 50);
          break;
        case '$51-$100':
          filtered = filtered.filter(p => parseFloat(p.price) >= 51 && parseFloat(p.price) <= 100);
          break;
        case '$100+':
          filtered = filtered.filter(p => parseFloat(p.price) > 100);
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case 'LATEST':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'POTENCY':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'PRICE_LOW':
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'PRICE_HIGH':
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default: // POPULARITY
        filtered.sort((a, b) => parseInt(b.downloads.replace(/[^\d]/g, '')) - parseInt(a.downloads.replace(/[^\d]/g, '')));
    }

    return filtered;
  }, [selectedGame, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-cyan-400/30 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-cyan-400 hover:text-magenta-400 transition-colors mr-8"
              >
                <img src="/logo-main.png" alt="blindeye.io" className="h-8 w-auto" />
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={onBack}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-mono"
              >
                HOME
              </button>
              <span className="text-cyan-400 font-mono">TOOLS</span>
              <a href="#discord-placeholder" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">JOIN DISCORD</a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'text-cyan-400' : 'text-gray-400'} hover:text-cyan-400 transition-colors`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'text-cyan-400' : 'text-gray-400'} hover:text-cyan-400 transition-colors`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <GlitchText text="PERFORMANCE TOOLS" className="text-cyan-400" />
            </h1>
            <p className="text-xl text-gray-400 font-mono">
              ENHANCE YOUR GAMING EXPERIENCE
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 flex gap-8">
        {/* Sidebar Filter */}
        <div className="w-80 bg-black border-2 border-cyan-400 p-6 h-fit">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-cyan-400 font-mono font-bold text-lg">FILTER_PANEL</h3>
            <Filter className="w-5 h-5 text-cyan-400" />
          </div>

          {/* Game Filter */}
          <div className="mb-6">
            <h4 className="text-green-400 font-mono mb-3">TARGET_GAME:</h4>
            <div className="space-y-2">
              {games.map(game => (
                <label key={game} className="flex items-center space-x-2 cursor-pointer group">
                  <div className={`w-4 h-4 border-2 ${selectedGame === game ? 'border-cyan-400 bg-cyan-400' : 'border-gray-600'} transition-colors`}>
                    {selectedGame === game && <div className="w-full h-full bg-cyan-400"></div>}
                  </div>
                  <span className={`font-mono text-sm ${selectedGame === game ? 'text-cyan-400' : 'text-gray-400'} group-hover:text-cyan-400 transition-colors`}>
                    {game.replace('_', ' ')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-green-400 font-mono mb-3">TOOL_CATEGORY:</h4>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                  <div className={`w-4 h-4 border-2 ${selectedCategory === category ? 'border-magenta-400 bg-magenta-400' : 'border-gray-600'} transition-colors`}>
                    {selectedCategory === category && <div className="w-full h-full bg-magenta-400"></div>}
                  </div>
                  <span className={`font-mono text-sm ${selectedCategory === category ? 'text-magenta-400' : 'text-gray-400'} group-hover:text-magenta-400 transition-colors`}>
                    {category.replace(/_/g, ' ')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h4 className="text-green-400 font-mono mb-3">PRICE_RANGE:</h4>
            <div className="space-y-2">
              {priceRanges.map(range => (
                <label key={range} className="flex items-center space-x-2 cursor-pointer group">
                  <div className={`w-4 h-4 border-2 ${priceRange === range ? 'border-green-400 bg-green-400' : 'border-gray-600'} transition-colors`}>
                    {priceRange === range && <div className="w-full h-full bg-green-400"></div>}
                  </div>
                  <span className={`font-mono text-sm ${priceRange === range ? 'text-green-400' : 'text-gray-400'} group-hover:text-green-400 transition-colors`}>
                    {range.replace('_', ' ')}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort and Results */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-green-400 font-mono">
              FOUND: {filteredProducts.length} TOOLS
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black border-2 border-cyan-400 text-cyan-400 font-mono px-4 py-2 appearance-none cursor-pointer hover:border-magenta-400 transition-colors"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option} className="bg-black">
                    SORT BY: {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400 pointer-events-none" />
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => onProductSelect(product.id)}
                className="bg-gray-900 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group relative"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-1 text-xs font-bold font-mono ${
                    product.badge === 'HOT' ? 'bg-red-500 text-white' :
                    product.badge === 'UNDETECTED' ? 'bg-green-500 text-black' :
                    'bg-cyan-400 text-black'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Trending Fire Icon */}
                {product.trending && (
                  <div className="absolute top-4 left-4 z-10">
                    <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
                  </div>
                )}

                <div className="p-6">
                  {/* Product Image */}
                  <div className="aspect-video bg-gray-800 mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <h3 className="text-cyan-400 font-bold text-lg mb-2 font-mono">
                    {product.name} {product.version}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">
                    {product.description}
                  </p>

                  {/* Rating and Downloads */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm font-mono">{product.downloads}</span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-xl font-mono">
                      ${product.price}
                    </span>
                    <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-black px-4 py-2 font-bold text-sm hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                      GET TOOL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
