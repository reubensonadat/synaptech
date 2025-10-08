import React from 'react';
import contactData from '../../data/contact.json';

const CTA = ({ title, description }) => {
  return (
    <section className="relative py-16 cta-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">{title || "Let's Build Something Amazing Together"}</h2>
          <p className="text-xl mb-8 opacity-90 dark:opacity-80">
            {description || "Ready to start your project? Contact us today to discuss how we can help bring your ideas to life."}
          </p>
          <a 
            href={contactData.whatsappLinkTemplate}
            className="bg-white/90 dark:bg-white/80 text-purple-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md inline-flex items-center shadow-lg transition-all duration-200 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;