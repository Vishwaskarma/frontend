'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Leaf, Shield, Award } from 'lucide-react';

// Premium watch collection with green theme
const watchCollection = [
  {
    name: 'SUBMARINER',
    brand: 'ROLEX',
    model: 'Hulk Edition',
    price: '$18,500',
    image: '/api/placeholder/1000/700?text=Rolex+Green+Submariner',
    description: 'The legendary dive watch with distinctive green bezel',
    features: ['Ceramic Bezel', 'Oystersteel', '300m Water Resistant']
  },
  {
    name: 'SPEEDMASTER',
    brand: 'OMEGA',
    model: 'Racing Green',
    price: '$7,200',
    image: '/api/placeholder/1000/700?text=Omega+Green+Speedmaster',
    description: 'Professional chronograph with racing heritage',
    features: ['Co-Axial Movement', 'Ceramic Dial', 'Tachymeter Scale']
  },
  {
    name: 'ROYAL OAK',
    brand: 'AUDEMARS PIGUET',
    model: 'Forest Green',
    price: '$45,000',
    image: '/api/placeholder/1000/700?text=AP+Green+Royal+Oak',
    description: 'Iconic octagonal design in forest green',
    features: ['Tapisserie Dial', 'Steel Bracelet', 'Ultra-Thin']
  },
  {
    name: 'SEAMASTER',
    brand: 'OMEGA',
    model: 'Planet Ocean Green',
    price: '$6,800',
    image: '/api/placeholder/1000/700?text=Omega+Green+Planet+Ocean',
    description: 'Professional diving watch with green ceramic',
    features: ['Helium Escape Valve', '600m Depth', 'Co-Axial Escapement']
  },
  {
    name: 'GMT-MASTER II',
    brand: 'ROLEX',
    model: 'Green Bezel',
    price: '$16,750',
    image: '/api/placeholder/1000/700?text=Rolex+Green+GMT',
    description: 'Dual time zone with green ceramic bezel',
    features: ['GMT Function', 'Cerachrom Bezel', 'Superlative Chronometer']
  }
];

export default function GreenLuxuryWatchSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const currentWatch = watchCollection[currentIndex];

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % watchCollection.length);
    }, 5500);
    
    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % watchCollection.length;
      }
      return prev === 0 ? watchCollection.length - 1 : prev - 1;
    });
  };

  return (
    <div 
      className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sophisticated green-themed background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(5, 150, 105, 0.08) 0%, transparent 50%)
            `
          }}
        />
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-40"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main background image */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <img
              src={currentWatch.image}
              alt={`${currentWatch.brand} ${currentWatch.name}`}
              className="w-full h-full object-cover brightness-75"
            />
            {/* Green-tinted overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-emerald-900/20 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-emerald-900/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Premium header with green theme */}
      <motion.div
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-3xl px-8 py-3 rounded-full border border-emerald-400/30">
          <Leaf className="text-emerald-400" size={16} />
          <span className="text-white font-light tracking-[0.4em] text-sm">
            PREMIUM TIMEPIECES
          </span>
          <Shield className="text-emerald-400" size={16} />
        </div>
      </motion.div>

      {/* Main content area */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center max-w-4xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Main content card */}
              <div className="bg-gradient-to-br from-black/30 via-emerald-900/10 to-black/40 backdrop-blur-3xl p-12 rounded-3xl border border-emerald-400/20 shadow-2xl">
                
                {/* Brand and model */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-7xl font-thin tracking-[0.15em] mb-2">
                    <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                      {currentWatch.brand}
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-extralight text-gray-200 tracking-[0.25em]">
                    {currentWatch.name}
                  </h2>
                </motion.div>

                {/* Model and price section */}
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-emerald-500/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-emerald-400/30">
                    <span className="text-emerald-400 font-light tracking-wider text-lg">
                      {currentWatch.model}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    <span className="text-white text-3xl font-thin tracking-wide">
                      {currentWatch.price}
                    </span>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-300 text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentWatch.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentWatch.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-emerald-400/20 text-emerald-300 text-sm font-light tracking-wide"
                    >
                      {feature}
                    </div>
                  ))}
                </motion.div>

                {/* Action buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
                      backgroundColor: 'rgb(34, 197, 94)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium rounded-2xl shadow-lg tracking-wide uppercase text-sm transition-all duration-300"
                  >
                    Explore Collection
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: 'rgb(34, 197, 94)',
                      backgroundColor: 'rgba(34, 197, 94, 0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-emerald-400/50 text-emerald-400 font-light rounded-2xl backdrop-blur-xl transition-all duration-300 tracking-wide uppercase text-sm"
                  >
                    Contact Dealer
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={() => navigate('prev')}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-2xl text-emerald-400 p-3 rounded-full z-30 border border-emerald-400/30 hover:bg-emerald-500/20 hover:border-emerald-400/60"
        whileHover={{ scale: 1.05, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={20} />
      </motion.button>
      
      <motion.button
        onClick={() => navigate('next')}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-2xl text-emerald-400 p-3 rounded-full z-30 border border-emerald-400/30 hover:bg-emerald-500/20 hover:border-emerald-400/60"
        whileHover={{ scale: 1.05, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Bottom control panel */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="flex items-center space-x-6 bg-black/40 backdrop-blur-3xl px-8 py-4 rounded-full border border-emerald-400/20">
          
          {/* Play/Pause button */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </motion.button>

          {/* Progress indicators */}
          <div className="flex space-x-3">
            {watchCollection.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative w-3 h-3 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <div className={`w-full h-full rounded-full ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg' 
                    : 'bg-gray-500/60 hover:bg-emerald-400/60'
                }`} />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400/40"
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Counter */}
          <div className="text-emerald-400 text-sm font-light tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')}/{String(watchCollection.length).padStart(2, '0')}
          </div>
        </div>
      </motion.div>

      {/* Premium WhatsApp contact */}
      <motion.a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 z-30 group/whatsapp"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="relative bg-gradient-to-r from-emerald-600 to-green-700 p-4 rounded-full shadow-xl border border-emerald-400/30 backdrop-blur-sm overflow-hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-300/20 to-emerald-400/0 transform translate-x-[-100%] group-hover/whatsapp:translate-x-[100%] transition-transform duration-700" />
        </div>
      </motion.a>

      {/* Subtle brand watermark */}
      <motion.div
        className="absolute top-1/2 left-8 transform -translate-y-1/2 rotate-90 opacity-5 z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <Award className="text-emerald-400" size={120} />
      </motion.div>
    </div>
  );
}