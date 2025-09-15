import type { Product } from './types';

export const products: Product[] = [
    {
      id: 1,
      name: "NEXUS_STREAM_PRO",
      price: "49.99",
      originalPrice: "79.99",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional streaming software with AI-powered scene detection, auto-switching, and real-time chat integration.",
      features: [
        "AI Scene Detection & Auto-Switching",
        "Real-time Chat Integration",
        "4K 60FPS Streaming Support",
        "Custom Overlay Designer",
        "Multi-platform Broadcasting"
      ],
      rating: 5,
      downloads: "50K+",
      category: "STREAMING",
      isNew: false,
      isPopular: true
    },
    {
      id: 2,
      name: "GHOST_RECORDER_X",
      price: "39.99",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Zero-latency gameplay recording with advanced compression algorithms and instant replay functionality.",
      features: [
        "Zero-Latency Recording",
        "4K HDR Support",
        "Instant Replay Buffer",
        "Advanced Compression",
        "Auto-Highlight Detection"
      ],
      rating: 5,
      downloads: "75K+",
      category: "RECORDING",
      isNew: false,
      isPopular: true
    },
    {
      id: 3,
      name: "MATRIX_OPTIMIZER",
      price: "29.99",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "AI-powered system optimization that automatically adjusts settings for maximum gaming performance.",
      features: [
        "AI Performance Optimization",
        "Real-time System Monitoring",
        "Game-Specific Profiles",
        "Memory Management",
        "CPU & GPU Optimization"
      ],
      rating: 4,
      downloads: "100K+",
      category: "OPTIMIZATION",
      isNew: false,
      isPopular: true
    },
    {
      id: 4,
      name: "CYBER_OVERLAY_HUD",
      price: "24.99",
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Customizable gaming overlay with real-time stats, performance metrics, and social media integration.",
      features: [
        "Customizable HUD Elements",
        "Real-time Performance Stats",
        "Social Media Integration",
        "Voice Chat Overlay",
        "Game-Specific Widgets"
      ],
      rating: 4,
      downloads: "35K+",
      category: "OVERLAYS",
      isNew: false,
      isPopular: false
    },
    {
      id: 5,
      name: "NEXUS_VOICE_MOD",
      price: "19.99",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Real-time voice modulation software with AI-powered effects and custom voice profiles.",
      features: [
        "Real-time Voice Modulation",
        "AI-Powered Effects",
        "Custom Voice Profiles",
        "Noise Cancellation",
        "Multi-platform Support"
      ],
      rating: 4,
      downloads: "25K+",
      category: "AUDIO",
      isNew: true,
      isPopular: false
    },
    {
      id: 6,
      name: "QUANTUM_ANALYTICS",
      price: "34.99",
      image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Advanced gameplay analytics with AI-powered improvement suggestions and performance tracking.",
      features: [
        "AI Performance Analysis",
        "Improvement Suggestions",
        "Detailed Statistics",
        "Progress Tracking",
        "Competitive Insights"
      ],
      rating: 5,
      downloads: "40K+",
      category: "ANALYTICS",
      isNew: false,
      isPopular: false
    },
    {
      id: 7,
      name: "SHADOW_CAPTURE_ELITE",
      price: "44.99",
      originalPrice: "59.99",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional screenshot and video capture tool with advanced editing capabilities.",
      features: [
        "Professional Screenshot Tools",
        "Advanced Video Editing",
        "Cloud Storage Integration",
        "Batch Processing",
        "Watermark Protection"
      ],
      rating: 4,
      downloads: "30K+",
      category: "RECORDING",
      isNew: true,
      isPopular: false
    },
    {
      id: 8,
      name: "NEON_STREAM_DECK",
      price: "27.99",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Virtual stream deck software with customizable buttons and macro support.",
      features: [
        "Virtual Stream Deck",
        "Customizable Buttons",
        "Macro Support",
        "Multi-action Commands",
        "Plugin Ecosystem"
      ],
      rating: 4,
      downloads: "20K+",
      category: "STREAMING",
      isNew: true,
      isPopular: false
    }
  ];
