import React from 'react';
import SEO from '../common/SEO';
import PageHeader from '../ui/PageHeader';
import CTA from '../ui/CTA';
import { Link } from 'react-router-dom';
import servicesData from '../../data/services.json';

const Services = () => {
  const getServiceIcon = (id) => {
    switch(id) {
      case 'webdev':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'content':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'design':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'ppt':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
          </svg>
        );
      case 'maintenance':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore the range of digital services offered by Synap Tech"
      />
      
      <PageHeader 
        title="Our Services — Designed to Elevate Your Digital Presence"
        subtitle="We provide a full range of creative and technical services tailored to meet your brand's goals."
      />
      
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          {servicesData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div key={service.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.short}</p>
                    <Link to={`/services/${service.id}`} className="text-primary hover:text-primary/80 font-medium flex items-center">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services available at the moment.</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <div className="bg-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Need a Custom Solution?</h2>
              <p className="text-muted-foreground mb-6">
                We can tailor our services to meet your specific requirements. Contact us to discuss your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="button-vibrant px-6 py-3 rounded-md">
                  Request a Quote
                </Link>
                <Link to="/portfolio" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold px-6 py-3 rounded-md inline-flex items-center">
                  View Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default Services;