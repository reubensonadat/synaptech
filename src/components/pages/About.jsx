import React from 'react';
import SEO from '../common/SEO';
import PageHeader from '../ui/PageHeader';
import CTA from '../ui/CTA';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Synap Tech - our mission, vision, and core values"
      />
      
      <PageHeader 
        title="Building Connections Through Digital Innovation"
        subtitle="We believe in the power of digital experiences to transform businesses and connect people in meaningful ways."
      />
      
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in-up">
                <p className="text-lg text-muted-foreground mb-6">
                  Synap Tech began with a simple idea — that technology should empower creativity, not complicate it. Founded by young innovators with a passion for design, communication, and digital problem-solving, we help brands grow through thoughtful design and purposeful execution.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We believe in the power of digital experiences to transform businesses and connect people in meaningful ways.
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card rounded-xl p-8 shadow-md animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To simplify digital experiences while helping individuals and businesses communicate their value through technology.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  To become Ghana's leading provider of creative, AI-powered digital solutions for small businesses and entrepreneurs.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-md mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Our Process</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We begin every project by understanding your goals. From concept to launch, we design, build, and refine — ensuring every pixel serves a purpose.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-medium text-foreground">Discovery</h3>
                  <p className="text-sm text-muted-foreground">Understanding your needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-medium text-foreground">Design</h3>
                  <p className="text-sm text-muted-foreground">Creating the blueprint</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-medium text-foreground">Development</h3>
                  <p className="text-sm text-muted-foreground">Bringing ideas to life</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-medium text-foreground">Launch</h3>
                  <p className="text-sm text-muted-foreground">Going live with your project</p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-foreground text-center">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Innovation and creativity</h3>
                    <p className="text-muted-foreground">We push boundaries and explore new possibilities to deliver unique solutions.</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Integrity and transparency</h3>
                    <p className="text-muted-foreground">We believe in honest communication and ethical business practices.</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Client success above all</h3>
                    <p className="text-muted-foreground">Your success is our success. We're committed to delivering results that exceed expectations.</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Continuous learning and growth</h3>
                    <p className="text-muted-foreground">We stay updated with the latest trends and technologies to provide cutting-edge solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Work With Us?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's create something amazing together. Contact us today to discuss your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="button-vibrant px-6 py-3 rounded-md">
                    Get In Touch
                  </Link>
                  <Link to="/portfolio" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold px-6 py-3 rounded-md inline-flex items-center">
                    View Our Work
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default About;