import React from 'react';
import SEO from '../common/SEO';
import PageHeader from '../ui/PageHeader';
import PortfolioGrid from '../ui/PortfolioGrid';
import CTA from '../ui/CTA';

const Portfolio = () => {
  return (
    <>
      <SEO 
        title="Portfolio" 
        description="Explore the range of digital solutions we've delivered for clients across industries"
      />
      
      <PageHeader 
        title="Discover Our Work"
        subtitle="Explore the range of digital solutions we've delivered for clients across industries."
      />
      
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          <PortfolioGrid showAll={true} />
        </div>
      </section>
      
      <CTA title="Ready to Start Your Project?" description="Let's discuss how we can bring your ideas to life with our expert digital solutions." />
    </>
  );
};

export default Portfolio;