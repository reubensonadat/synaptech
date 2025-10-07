import React, { useState } from 'react';
import faqData from '../../data/faq.json';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 light-page-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.length > 0 ? (
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="bg-card rounded-xl shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <h3 className="text-lg font-medium text-foreground">{item.q}</h3>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-primary transform transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div 
                    id={`faq-content-${index}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No FAQs available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;