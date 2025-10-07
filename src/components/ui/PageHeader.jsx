import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-500/90 via-purple-600/90 to-purple-700/90 dark:from-purple-800/70 dark:via-purple-900/70 dark:to-purple-950/80">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-600/10 dark:via-purple-800/20 to-purple-800/30 dark:to-purple-950/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default PageHeader;