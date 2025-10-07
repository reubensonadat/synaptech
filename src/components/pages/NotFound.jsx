import React from 'react';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist"
      />
      
      <section className="py-16 light-page-bg min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <Link to="/" className="button-vibrant px-8 py-3 rounded-md">
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;