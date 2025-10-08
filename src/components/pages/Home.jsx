import React from 'react';
import SEO from '../common/SEO';
import Hero from '../ui/Hero';
import StatsCard from '../ui/StatsCard';
import TestimonialSlider from '../ui/TestimonialSlider';
import PortfolioGrid from '../ui/PortfolioGrid';
import CTA from '../ui/CTA';
import { Link } from 'react-router-dom';
import siteData from '../../data/site.json';

const Home = () => {
  const getStatsIcon = (index) => {
    switch(index) {
      case 0:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 1:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 2:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getServiceIcon = (id) => {
    switch(id) {
      case 'webdev':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'content':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'design':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'ppt':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Synap Tech - Creating Digital Experiences That Drive Growth"
      />
      
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 section-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard 
              icon={getStatsIcon(0)}
              value={siteData.stats.projectsCompleted}
              label="Projects Completed"
            />
            <StatsCard 
              icon={getStatsIcon(1)}
              value={siteData.stats.clientSatisfaction}
              label="Client Satisfaction"
            />
            <StatsCard 
              icon={getStatsIcon(2)}
              value={siteData.stats.experience}
              label="In Business"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Synap Tech</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6">
                At Synap Tech, we build digital experiences that help brands stand out. Whether it's a responsive website, a compelling presentation, or engaging content, we focus on creating designs that connect and deliver results.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our goal is simple — to help individuals and businesses elevate their digital presence while simplifying their workflow.
              </p>
              <Link to="/about" className="button-vibrant px-6 py-3 rounded-md inline-flex items-center">
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="/assets/about-image.jpg" 
                alt="About Synap Tech" 
                className="rounded-xl shadow-lg w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://picsum.photos/seed/synaptech/600/400.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Core Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {getServiceIcon('webdev')}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Website Development</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Custom websites built with modern technologies to ensure fast loading, responsive design, and excellent user experience.</p>
                <Link to="/services/webdev" className="text-primary hover:text-primary/80 font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {getServiceIcon('content')}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Content Creation</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Short-form video, brand photography, and social assets for businesses to grow their online presence.</p>
                <Link to="/services/content" className="text-primary hover:text-primary/80 font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {getServiceIcon('design')}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Graphic Design</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Brand graphics, banners, and promotional assets (GH₵100/design).</p>
                <Link to="/services/design" className="text-primary hover:text-primary/80 font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {getServiceIcon('ppt')}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">PowerPoint Presentations</h3>
                <p className="text-muted-foreground mb-6 flex-grow">High-quality branded pitch decks and presentations (quote-based).</p>
                <Link to="/services/ppt" className="text-primary hover:text-primary/80 font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="button-vibrant px-8 py-3 rounded-md">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose Synap Tech</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">100% customized designs</h3>
                  <p className="text-muted-foreground">We create unique designs tailored to your brand and business goals.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Timely delivery and reliable support</h3>
                  <p className="text-muted-foreground">We respect your time and deliver projects on schedule with ongoing support.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Affordable packages for all clients</h3>
                  <p className="text-muted-foreground">We offer flexible pricing options that fit your budget without compromising quality.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Integration of modern tools and automation</h3>
                  <p className="text-muted-foreground">We leverage the latest technologies to streamline your workflow and enhance efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Work */}
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
                  
          <PortfolioGrid itemsToShow={3} />
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="button-vibrant px-8 py-3 rounded-md">
              Browse Full Portfolio
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Home;