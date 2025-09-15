import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Shield, Eye, Target, Star, Clock, Users } from 'lucide-react';
import { GlitchText } from '../components/GlitchText';
import { products } from '../lib/products';

interface ProductDetailsProps {
  productId: number;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId, onBack }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [viewersCount, setViewersCount] = useState(47);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  // All products data
  const allProducts = [
    {
      id: 1,
      name: "NEXUS_STREAM_PRO",
      altName: "BROADCAST_DOMINATOR",
      version: "v5.2",
      tagline: "REWRITE THE RULES OF ENGAGEMENT",
      price: "49.99",
      cryptoPrice: "₿0.0025",
      credits: "5,000 CR",
      licensingOptions: [
        { duration: "30_DAYS", label: "30 Days", price: "49.99", purchaseLink: "https://checkout.nexus-verse.com/stream-pro-30d" },
        { duration: "90_DAYS", label: "90 Days", price: "129.99", purchaseLink: "https://checkout.nexus-verse.com/stream-pro-90d" },
        { duration: "LIFETIME", label: "Lifetime", price: "299.99", purchaseLink: "https://checkout.nexus-verse.com/stream-pro-lifetime" }
      ],
      rating: 5,
      downloads: "50K+",
      description: "Professional streaming software with AI-powered scene detection, auto-switching, and real-time chat integration for content creators.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        {
          icon: Target,
          title: "PRECISION TARGETING SYSTEM",
          description: "AI-powered scene detection with millisecond accuracy"
        },
        {
          icon: Eye,
          title: "ESP (ENHANCED SENSORY PERCEPTION)",
          description: "Real-time chat integration and viewer analytics"
        },
        {
          icon: Shield,
          title: "CLOAKED OPERATION MODE",
          description: "Stealth streaming with advanced privacy protection"
        }
      ],
      systemReqs: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Intel i5-8400 / AMD Ryzen 5 2600",
        ram: "8 GB RAM",
        gpu: "GTX 1060 / RX 580",
        storage: "2 GB available space",
        network: "Broadband Internet connection"
      },
      compatibility: [
        { game: "Fortnite", version: "v28.10", status: "ACTIVE" },
        { game: "Apex Legends", version: "v19.1", status: "ACTIVE" },
        { game: "Valorant", version: "v7.12", status: "PATCHED" },
        { game: "Warzone", version: "v1.4.2", status: "ACTIVE" },
        { game: "CS2", version: "v13.8.1", status: "ACTIVE" }
      ],
      testimonials: [
        {
          gamertag: "StreamKing_2024",
          title: "THIS IS INSANE",
          review: "My viewer count went from 50 to 5000 in just 2 weeks. The AI scene detection is pure magic!"
        },
        {
          gamertag: "x_ProGamer_x",
          title: "I'M UNSTOPPABLE",
          review: "Best streaming software I've ever used. The quality is unmatched and setup was super easy."
        },
        {
          gamertag: "CyberStreamer",
          title: "GAME CHANGER",
          review: "Finally hit partner status thanks to this tool. Worth every penny!"
        }
      ]
    },
    {
      id: 2,
      name: "GHOST_RECORDER_X",
      altName: "SHADOW_CAPTURE",
      version: "v4.1",
      tagline: "CAPTURE THE IMPOSSIBLE",
      price: "39.99",
      cryptoPrice: "₿0.002",
      credits: "4,000 CR",
      licensingOptions: [
        { duration: "30_DAYS", label: "30 Days", price: "39.99", purchaseLink: "https://checkout.nexus-verse.com/recorder-30d" },
        { duration: "90_DAYS", label: "90 Days", price: "99.99", purchaseLink: "https://checkout.nexus-verse.com/recorder-90d" },
        { duration: "LIFETIME", label: "Lifetime", price: "249.99", purchaseLink: "https://checkout.nexus-verse.com/recorder-lifetime" }
      ],
      rating: 5,
      downloads: "75K+",
      description: "Zero-latency gameplay recording with advanced compression algorithms and instant replay functionality.",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        {
          icon: Target,
          title: "ZERO-LATENCY CAPTURE",
          description: "Record gameplay with absolutely no performance impact"
        },
        {
          icon: Eye,
          title: "INSTANT REPLAY BUFFER",
          description: "Always-on recording buffer for those clutch moments"
        },
        {
          icon: Shield,
          title: "STEALTH RECORDING MODE",
          description: "Invisible recording that doesn't affect game performance"
        }
      ],
      systemReqs: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Intel i5-9400 / AMD Ryzen 5 3600",
        ram: "12 GB RAM",
        gpu: "GTX 1660 / RX 6600",
        storage: "5 GB available space",
        network: "Broadband Internet connection"
      },
      compatibility: [
        { game: "Fortnite", version: "v28.10", status: "ACTIVE" },
        { game: "Apex Legends", version: "v19.1", status: "ACTIVE" },
        { game: "Valorant", version: "v7.12", status: "ACTIVE" },
        { game: "Warzone", version: "v1.4.2", status: "ACTIVE" },
        { game: "CS2", version: "v13.8.1", status: "ACTIVE" }
      ],
      testimonials: [
        {
          gamertag: "ClipMaster_Pro",
          title: "RECORDING PERFECTION",
          review: "Finally a recorder that doesn't tank my FPS. The instant replay feature saved my best plays!"
        },
        {
          gamertag: "ContentKing",
          title: "GAME CHANGER",
          review: "My YouTube channel exploded thanks to the quality of clips I can capture now."
        },
        {
          gamertag: "x_Recorder_x",
          title: "FLAWLESS EXECUTION",
          review: "Zero lag, perfect quality, instant highlights. This is the future of game recording."
        }
      ]
    },
    {
      id: 3,
      name: "MATRIX_OPTIMIZER",
      altName: "PERFORMANCE_BEAST",
      version: "v6.0",
      tagline: "UNLOCK YOUR SYSTEM'S TRUE POWER",
      price: "29.99",
      cryptoPrice: "₿0.0015",
      credits: "3,000 CR",
      licensingOptions: [
        { duration: "30_DAYS", label: "30 Days", price: "29.99", purchaseLink: "https://checkout.nexus-verse.com/optimizer-30d" },
        { duration: "90_DAYS", label: "90 Days", price: "79.99", purchaseLink: "https://checkout.nexus-verse.com/optimizer-90d" },
        { duration: "LIFETIME", label: "Lifetime", price: "199.99", purchaseLink: "https://checkout.nexus-verse.com/optimizer-lifetime" }
      ],
      rating: 4,
      downloads: "100K+",
      description: "AI-powered system optimization that automatically adjusts settings for maximum gaming performance.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        {
          icon: Target,
          title: "AI PERFORMANCE BOOST",
          description: "Machine learning algorithms optimize your system in real-time"
        },
        {
          icon: Eye,
          title: "SYSTEM MONITORING HUD",
          description: "Real-time performance metrics and bottleneck detection"
        },
        {
          icon: Shield,
          title: "SAFE OPTIMIZATION MODE",
          description: "Boost performance without risking system stability"
        }
      ],
      systemReqs: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Intel i3-8100 / AMD Ryzen 3 2200G",
        ram: "4 GB RAM",
        gpu: "Any DirectX 11 compatible",
        storage: "1 GB available space",
        network: "Internet connection for updates"
      },
      compatibility: [
        { game: "All Games", version: "Universal", status: "ACTIVE" },
        { game: "Fortnite", version: "v28.10", status: "ACTIVE" },
        { game: "Apex Legends", version: "v19.1", status: "ACTIVE" },
        { game: "Valorant", version: "v7.12", status: "ACTIVE" },
        { game: "Warzone", version: "v1.4.2", status: "ACTIVE" }
      ],
      testimonials: [
        {
          gamertag: "FPS_Hunter",
          title: "INSANE PERFORMANCE GAINS",
          review: "Went from 60fps to 120fps on the same hardware. This optimizer is black magic!"
        },
        {
          gamertag: "SystemMaster",
          title: "REVOLUTIONARY",
          review: "My old gaming laptop feels like a brand new machine. The AI optimization is incredible."
        },
        {
          gamertag: "PerformanceKing",
          title: "WORTH EVERY PENNY",
          review: "Eliminated all stuttering and frame drops. My gameplay is buttery smooth now."
        }
      ]
    }
  ];

  // Simulate live viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 3600);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Find the product by ID
  const product = allProducts.find(p => p.id === productId) || allProducts[0];

  // Initialize selected duration when product changes
  useEffect(() => {
    if (product.licensingOptions && product.licensingOptions.length > 0) {
      setSelectedDuration(product.licensingOptions[0].duration);
    }
  }, [product]);

  // Get current license option
  const currentLicenseOption = product.licensingOptions?.find(option => option.duration === selectedDuration) || product.licensingOptions?.[0];

  const handlePurchase = () => {
    if (currentLicenseOption?.purchaseLink) {
      window.open(currentLicenseOption.purchaseLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-cyan-400/30 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <button
                onClick={() => window.history.length > 1 ? window.history.back() : onBack()}
                className="flex items-center text-cyan-400 hover:text-magenta-400 transition-colors mr-8"
              >
                <img src="/logo-main.png" alt="blindeye.io" className="h-8 w-auto" />
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => window.history.length > 1 ? window.history.back() : onBack()}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-mono"
              >
                BACK
              </button>
              <a href="#discord-placeholder" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">JOIN DISCORD</a>
            </div>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-mono">
              <GlitchText text={product.name} className="text-cyan-400" altText={product.altName} />
            </h1>
            <p className="text-xl text-magenta-400 font-mono mb-2">{product.version}</p>
            <p className="text-lg text-gray-400 font-mono italic">
              "{product.tagline}"
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Media Section */}
          <div className="lg:col-span-2">
            {/* Video Trailer */}
            <div className="bg-gray-900 border-2 border-cyan-400 mb-6 relative overflow-hidden">
              <div className="aspect-video bg-black flex items-center justify-center relative">
                <img 
                  src={product.image}
                  alt="Product Demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button className="bg-cyan-400 text-black p-4 rounded-full hover:bg-magenta-400 transition-colors">
                    <Play className="w-8 h-8" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-mono animate-pulse">
                  ● LIVE DEMO
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="mb-6">
              <h3 className="text-green-400 font-mono mb-4 text-lg">SECURITY_FEED_CAPTURES:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-gray-800 border border-green-400 aspect-video relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={`Screenshot ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 text-green-400 text-xs font-mono">
                      FEED_{i.toString().padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-black border-2 border-cyan-400">
              <div className="flex border-b border-cyan-400/30">
                {['features', 'readme', 'testimonials', 'compatibility'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-mono text-sm border-r border-cyan-400/30 last:border-r-0 transition-colors ${
                      activeTab === tab 
                        ? 'bg-cyan-400 text-black' 
                        : 'text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    {tab.toUpperCase().replace('_', '.')}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'features' && (
                  <div>
                    <h4 className="text-green-400 font-mono mb-4">KEY_FEATURES:</h4>
                    <div className="space-y-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 bg-gray-900 p-4 border-l-4 border-cyan-400">
                          <feature.icon className="w-6 h-6 text-cyan-400 mt-1" />
                          <div>
                            <h5 className="text-cyan-400 font-mono font-bold mb-2">{feature.title}</h5>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'readme' && (
                  <div className="font-mono text-sm">
                    <div className="bg-gray-900 p-4 border border-green-400">
                      <div className="text-green-400 mb-4">
                        <span className="text-cyan-400">user@nexus:~$</span> cat README.txt
                      </div>
                      <div className="space-y-2 text-gray-300">
                        <p>INSTALLATION_PROTOCOL:</p>
                        <p>1. Download the package to your secure directory</p>
                        <p>2. Run installer as administrator</p>
                        <p>3. Follow the setup wizard prompts</p>
                        <p>4. Activate with your license key</p>
                        <p>5. Configure your software settings</p>
                        <p></p>
                        <p className="text-yellow-400">WARNING: Ensure antivirus is disabled during installation</p>
                        <p className="text-cyan-400">SUPPORT: Contact support@nexus-verse.com for assistance</p>
                        <p className="text-cyan-400">SUPPORT: Contact support@blindeye.io for assistance</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'testimonials' && (
                  <div className="space-y-4">
                    {product.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-900 border border-green-400 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-cyan-400 font-mono">{testimonial.gamertag}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <h5 className="text-magenta-400 font-mono font-bold mb-2">{testimonial.title}</h5>
                        <p className="text-gray-400 text-sm italic">"{testimonial.review}"</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'compatibility' && (
                  <div>
                    <h4 className="text-green-400 font-mono mb-4">COMPATIBILITY_MATRIX:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full font-mono text-sm">
                        <thead>
                          <tr className="border-b border-cyan-400">
                            <th className="text-left py-2 text-cyan-400">GAME</th>
                            <th className="text-left py-2 text-cyan-400">VERSION</th>
                            <th className="text-left py-2 text-cyan-400">STATUS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.compatibility.map((item, index) => (
                            <tr key={index} className="border-b border-gray-700">
                              <td className="py-2 text-gray-300">{item.game}</td>
                              <td className="py-2 text-gray-400">{item.version}</td>
                              <td className="py-2">
                                <span className={`px-2 py-1 text-xs font-bold ${
                                  item.status === 'ACTIVE' 
                                    ? 'bg-green-500 text-black' 
                                    : 'bg-red-500 text-white'
                                }`}>
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Purchase Panel */}
          <div className="space-y-6">
            {/* Main Purchase Box */}
            <div className="bg-gray-900 border-2 border-magenta-400 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 animate-pulse"></div>
              
              {/* License Duration Selection */}
              <div className="mb-6">
                <h4 className="text-cyan-400 font-mono mb-3 text-sm">LICENSE_DURATION:</h4>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full bg-black border-2 border-cyan-400 text-cyan-400 font-mono px-3 py-2 text-sm hover:border-magenta-400 transition-colors"
                >
                  {product.licensingOptions?.map((option) => (
                    <option key={option.duration} value={option.duration} className="bg-black">
                      {option.label} - ${option.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold font-mono text-green-400 mb-2">
                  ${currentLicenseOption?.price || product.price}
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {product.cryptoPrice} • {product.credits}
                </div>
              </div>

              <button 
                onClick={handlePurchase}
                className="w-full bg-gradient-to-r from-cyan-500 to-magenta-500 text-black py-4 font-bold text-lg font-mono hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 mb-4"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>BUY NOW</span>
                </div>
              </button>

              <div className="text-center space-y-2 text-sm font-mono">
                <div className="flex items-center justify-center space-x-2 text-yellow-400">
                  <Users className="w-4 h-4" />
                  <span>{viewersCount} USERS VIEWING THIS TOOL</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-red-400">
                  <Clock className="w-4 h-4" />
                  <span>OFFER EXPIRES: {formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-black border-2 border-green-400 p-6">
              <h4 className="text-green-400 font-mono mb-4 text-lg">SYSTEM_DIAGNOSTIC:</h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">OS:</span>
                  <span className="text-green-400">{product.systemReqs.os}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CPU:</span>
                  <span className="text-green-400">{product.systemReqs.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">RAM:</span>
                  <span className="text-green-400">{product.systemReqs.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GPU:</span>
                  <span className="text-green-400">{product.systemReqs.gpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">STORAGE:</span>
                  <span className="text-green-400">{product.systemReqs.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">NETWORK:</span>
                  <span className="text-green-400">{product.systemReqs.network}</span>
                </div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="bg-black border-2 border-cyan-400 p-6">
              <h4 className="text-cyan-400 font-mono mb-4">SECURITY_STATUS:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">SECURE_DOWNLOAD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-mono text-sm">STEALTH_MODE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-magenta-400" />
                  <span className="text-magenta-400 font-mono text-sm">PRECISION_TESTED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
