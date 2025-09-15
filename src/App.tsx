
// SEO: react-helmet-async recommended. Install with: npm i react-helmet-async
import React, { useEffect, useState } from 'react';
import { Shield, Zap, Skull, ChevronDown, Menu, X } from 'lucide-react';
import { GlitchText } from './components/GlitchText';
import { TerminalSearch } from './components/TerminalSearch';
import { ProductCard } from './components/ProductCard';
import { TestimonialCard } from './components/TestimonialCard';
import { Store } from './pages/Store';
import { ProductListing } from './pages/ProductListing';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'listing' | 'details'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentPage === 'store') {
    return (
      <Store 
        onBack={() => setCurrentPage('home')} 
        onProductSelect={(id) => {
          setSelectedProductId(id);
          setCurrentPage('details');
        }}
      />
    );
  }

  if (currentPage === 'listing') {
    return (
      <ProductListing 
        onBack={() => setCurrentPage('home')} 
        onProductSelect={(id) => {
          setSelectedProductId(id);
          setCurrentPage('details');
        }}
      />
    );
  }

  if (currentPage === 'details') {
    return (
      <ProductDetails 
        productId={selectedProductId}
        onBack={() => setCurrentPage('listing')}
      />
    );
  }

  const products = [
    {
      id: 1,
      name: "NEXUS_STREAM_PRO",
      price: "49.99",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced streaming software with AI scene detection",
      hoverText: "BROADCAST LIKE A PRO"
    },
    {
      id: 2,
      name: "GHOST_RECORDER_X",
      price: "39.99", 
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Zero-lag gameplay recording with 4K HDR support",
      hoverText: "CAPTURE EVERY MOMENT"
    },
    {
      id: 3,
      name: "MATRIX_OPTIMIZER",
      price: "29.99",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "AI-powered system optimization for maximum FPS",
      hoverText: "UNLOCK TRUE PERFORMANCE"
    },
    {
      id: 4,
      name: "CYBER_OVERLAY_HUD",
      price: "24.99",
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Customizable gaming overlay with stats tracking",
      hoverText: "MONITOR EVERYTHING"
    },
    {
      id: 5,
      name: "NEXUS_VOICE_MOD",
      price: "19.99",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Real-time voice modulation for streaming",
      hoverText: "TRANSFORM YOUR VOICE"
    },
    {
      id: 6,
      name: "QUANTUM_ANALYTICS",
      price: "34.99",
      image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced gameplay analytics and improvement AI",
      hoverText: "ANALYZE. IMPROVE. DOMINATE."
    }
  ];

  const handleProductSelect = (id: number) => {
    setSelectedProductId(id);
    setCurrentPage('details');
  };

  const testimonials = [
    {
      gamertag: "x_Reaper_x",
      level: "Lvl 100 Elite",
      quote: "Stream Pro boosted my viewer count by 300%. This software is insane!"
    },
    {
      gamertag: "CyberNinja_2077",
      level: "Pro Gamer",
      quote: "Matrix Optimizer gave me 60+ FPS boost. My gameplay is buttery smooth now"
    },
    {
      gamertag: "GlitchMaster",
      level: "Rank S+",
      quote: "These tools are next level. My content creation game is unmatched."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 transform: `translateY(${scrollY * 0.1}px)`
               }}>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-mono">
                <GlitchText text="BLINDEYE.IO" className="text-cyan-400" />
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => setCurrentPage('listing')}
                  className="text-cyan-400 hover:text-magenta-400 transition-colors font-mono"
                >
                  TOOLS
                </button>
                <button 
                  onClick={() => setCurrentPage('store')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  STORE
                </button>
                <a href="" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">JOIN DISCORD</a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">SUPPORT</a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center text-cyan-400 hover:text-magenta-400 transition-colors mr-8"
              >
                <img src="/logo-main.png" alt="blindeye.io" className="h-8 w-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-cyan-400/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => {
                  setCurrentPage('listing');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-cyan-400 font-mono w-full text-left"
              >
                TOOLS
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('store');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-mono w-full text-left"
              >
                STORE
              </button>
              <a href="#discord-placeholder" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-mono">JOIN DISCORD</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-mono">SUPPORT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 font-mono tracking-wider">
              <GlitchText text="UNLEASH" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-wider">
              <GlitchText text="YOUR POTENTIAL" className="text-white" />
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
              BREAK THE SIMULATION. DOMINATE THE GAME.
            </p>
          </div>
          
          <div className="mb-12">
            <TerminalSearch />
          </div>

          <button className="group relative bg-gradient-to-r from-cyan-500 to-magenta-500 text-black px-12 py-4 text-xl font-bold font-mono tracking-wider hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
            <span 
              className="relative z-10 cursor-pointer"
              onClick={() => setCurrentPage('store')}
            >
              ENTER STORE
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-magenta-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 animate-pulse"></div>
          </button>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <GlitchText text="DIGITAL ARSENAL" className="text-cyan-400" />
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              SOFTWARE FOR THE DIGITAL ELITE
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                {...product} 
                onProductSelect={handleProductSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexus-Verse Section */}
      <section className="relative z-10 py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <GlitchText text="WHY BLINDEYE?" className="text-magenta-400" />
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              JOIN THE ELITE. GET YOUR EDGE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-black border-2 border-cyan-400 p-8 hover:border-magenta-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4 group-hover:text-magenta-400 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">SECURE & SAFE</h3>
                <p className="text-gray-400 font-mono">
                  Enterprise-grade security with encrypted downloads and verified software
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-black border-2 border-green-400 p-8 hover:border-magenta-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
                <Zap className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:text-magenta-400 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 font-mono text-green-400">INSTANT DELIVERY</h3>
                <p className="text-gray-400 font-mono">
                  Instant digital downloads with automatic updates and cloud sync
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-black border-2 border-magenta-400 p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-magenta-400/20">
                <Skull className="w-16 h-16 text-magenta-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 font-mono text-magenta-400">MAXIMUM PERFORMANCE</h3>
                <p className="text-gray-400 font-mono">
                  Cutting-edge algorithms optimized for competitive gaming performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <GlitchText text="BLINDEYE LEGENDS" className="text-green-400" />
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              WHAT THE ELITE ARE SAYING
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-mono">
            <GlitchText text="JOIN BLINDEYE" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-green-400" />
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-mono">
            DOWNLOAD THE TOOLS. BECOME THE LEGEND.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('store')}
              className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-black px-8 py-4 text-lg font-bold font-mono hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              GET SOFTWARE
            </button>
            <button 
              onClick={() => setCurrentPage('store')}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 text-lg font-bold font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              VIEW ALL TOOLS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-cyan-400/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-mono">
              <img src="/logo-main.png" alt="blindeye.io" className="h-12 w-auto mx-auto mb-4" />
            </h3>
            <p className="text-gray-400 font-mono mb-4">
              THE FUTURE OF GAMING SOFTWARE
            </p>
            <div className="flex justify-center space-x-8 text-sm font-mono">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">PRIVACY</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">TERMS</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">SUPPORT</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">CONTACT</a>
            </div>
            <div className="mt-8 text-xs text-gray-500 font-mono">
              © 2024 BLINDEYE.IO. ALL RIGHTS RESERVED.
            </div>
          </div>
        </main>
      </footer>
    </div>
  );
}

export default App;