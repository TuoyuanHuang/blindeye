import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Grid, List } from 'lucide-react';
import { GlitchText } from '../components/GlitchText';
import { FilterBar } from '../components/FilterBar';
import { DetailedProductCard } from '../components/DetailedProductCard';
import { products } from '../lib/products';

interface StoreProps {
  onBack: () => void;
  onProductSelect?: (id: number) => void;
}

export const Store: React.FC<StoreProps> = ({ onBack, onProductSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL_SOFTWARE');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'ALL_SOFTWARE',
    'STREAMING',
    'RECORDING',
    'OPTIMIZATION',
    'ANALYTICS',
    'OVERLAYS',
    'AUDIO'
  ];

  const allProducts = products;

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== 'ALL_SOFTWARE') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'popular':
        filtered.sort((a, b) => {
          const aDownloads = parseInt(a.downloads.replace(/[^\d]/g, ''));
          const bDownloads = parseInt(b.downloads.replace(/[^\d]/g, ''));
          return bDownloads - aDownloads;
        });
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-cyan-400/30 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-400/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img src="/logo-main.png" alt="blindeye.io" className="h-8 w-auto" />
                    <h1 className="text-2xl font-bold font-mono ml-3">
                      <GlitchText text="BLINDEYE.IO" className="text-cyan-400" />
                    </h1>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                  <button
                    onClick={onBack}
                    className="text-cyan-400 hover:text-magenta-400 transition-colors font-mono"
                  >
                    TOOLS
                  </button>
                  <span className="text-cyan-400 font-mono">STORE</span>
                  <a href="#discord-placeholder" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">JOIN DISCORD</a>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">SUPPORT</a>
                </div>

                <div className="md:hidden">
                  <button className="flex items-center text-cyan-400 hover:text-magenta-400 transition-colors mr-8">
                    <img src="/logo-main.png" alt="blindeye.io" className="h-8 w-auto" />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Store Header Content */}
          <div className="bg-gray-900 border-b border-cyan-400/30 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
                  <GlitchText text="SOFTWARE ARSENAL" className="text-cyan-400" />
                </h1>
                <p className="text-xl text-gray-400 font-mono">
                  TOOLS FOR THE DIGITAL ELITE
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-6">
                <div className="relative">
                  <div className="bg-black border-2 border-cyan-400 p-3 font-mono text-cyan-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">$</span>
                      <Search className="w-4 h-4 text-cyan-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-cyan-400 placeholder-gray-500 flex-1"
                        placeholder="search_software_database..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-center items-center space-x-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Count */}
        <div className="mb-6 text-green-400 font-mono">
          <span>FOUND: {filteredProducts.length} SOFTWARE_PACKAGES</span>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <DetailedProductCard 
              key={product.id} 
              {...product} 
              onClick={() => onProductSelect?.(product.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 font-mono mb-2">
              NO_SOFTWARE_FOUND
            </h3>
            <p className="text-gray-500 font-mono">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};