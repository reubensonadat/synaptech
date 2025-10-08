import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500/90 via-purple-600/90 to-purple-700/90 dark:from-purple-800/70 dark:via-purple-900/70 dark:to-purple-950/80 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-600/10 dark:via-purple-800/20 to-purple-800/30 dark:to-purple-950/40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              Creating digital experiences that drive business growth
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              From web design to content creation — we turn your ideas into beautiful, functional digital products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="bg-white/90 dark:bg-white/80 text-purple-700 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-md shadow-lg transition-all duration-200 transform hover:scale-105">
                Start Your Project
              </Link>
              
              <Link to="/portfolio" className="bg-transparent/80 dark:bg-transparent/70 border-2 border-white text-white hover:bg-white/90 hover:text-purple-700 font-semibold px-8 py-6 text-lg rounded-md transition-all duration-200 transform hover:scale-105">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;