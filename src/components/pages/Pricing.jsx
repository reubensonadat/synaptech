import React from 'react';
import SEO from '../common/SEO';
import PageHeader from '../ui/PageHeader';
import { Link } from 'react-router-dom';
import pricingData from '../../data/pricing.json';

const Pricing = () => {
  const { website, content, other, bundleDiscounts, customNote } = pricingData;

  const renderPackageCard = (pkg, type, index) => {
    const isPopular = pkg.isPopular;
    
    // Format the price display
    const formatPrice = () => {
      if (pkg.price === "Quote-based") {
        return pkg.price;
      }
      
      if (pkg.priceMax === 99999) {
        return `GH₵${pkg.priceMin}+`;
      }
      
      if (pkg.priceMax) {
        return `GH₵${pkg.priceMin}-${pkg.priceMax}`;
      }
      
      return `GH₵${pkg.priceMin}`;
    };
    
    return (
      <div key={index} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-bl-lg z-10">
            Most Popular
          </div>
        )}
        <div className="p-6 border-b border-border">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{pkg.title}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-foreground">
              {formatPrice()}
            </span>
            <span className="text-muted-foreground block">{pkg.priceType || 'one-time'}</span>
          </div>
          <p className="text-muted-foreground">{pkg.target}</p>
        </div>
        <div className="p-6">
          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="button-vibrant w-full px-4 py-2 rounded-md text-center block">
            {pkg.price === "Quote-based" ? "Get Quote" : "Get Started"}
          </Link>
        </div>
      </div>
    );
  };

  const renderOtherServiceCard = (service, index) => {
    if (service.isQuoteBased) {
      // Style like stats card from home page
      return (
        <div key={index} className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
            <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
            <p className="text-muted-foreground mb-4">{service.priceType}</p>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-muted-foreground text-sm">
                  • {feature}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="button-vibrant px-6 py-3 rounded-md">
              Get Quote
            </Link>
          </div>
        </div>
      );
    } else {
      // Regular pricing card style
      return (
        <div key={index} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-foreground">GH₵{service.price}</span>
              <span className="text-muted-foreground block">{service.priceType}</span>
            </div>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="button-vibrant w-full px-4 py-2 rounded-md text-center block">
              Get Started
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <SEO 
        title="Pricing" 
        description="Explore our pricing packages for website development, content creation, and other digital services"
      />
      
      <PageHeader 
        title="Our Pricing Plans"
        subtitle="Choose the package that best fits your needs and budget. All plans include our core features with varying levels of service."
      />
      
      <section className="py-16 section-bg">
        <div className="container mx-auto px-4">
          {/* Website Development Pricing */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{website.title}</h2>
              <p className="text-muted-foreground mt-2">{website.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.values(website.packages).map((pkg, index) => renderPackageCard(pkg, 'website', index))}
            </div>
          </div>
          
          {/* Content Creation Pricing */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{content.title}</h2>
              <p className="text-muted-foreground mt-2">{content.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.values(content.packages).map((pkg, index) => renderPackageCard(pkg, 'content', index))}
            </div>
          </div>
          
          {/* Other Services */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{other.title}</h2>
              <p className="text-muted-foreground mt-2">{other.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {other.services.map((service, index) => renderOtherServiceCard(service, index))}
            </div>
          </div>
          
          {/* Bundle Discounts */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{bundleDiscounts.title}</h2>
              <p className="text-muted-foreground mt-2">{bundleDiscounts.subtitle}</p>
            </div>
            <div className="bg-card rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{bundleDiscounts.basicBundle.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">GH₵{bundleDiscounts.basicBundle.discount} OFF</p>
                  <p className="text-muted-foreground">{bundleDiscounts.basicBundle.description}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{bundleDiscounts.standardBundle.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">GH₵{bundleDiscounts.standardBundle.discount} OFF</p>
                  <p className="text-muted-foreground">{bundleDiscounts.standardBundle.description}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{bundleDiscounts.premiumBundle.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">GH₵{bundleDiscounts.premiumBundle.discount} OFF</p>
                  <p className="text-muted-foreground">{bundleDiscounts.premiumBundle.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-card rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Need a Custom Package?</h3>
              <p className="text-muted-foreground mb-6">
                {customNote}
              </p>
              <Link to="/contact" className="button-vibrant px-8 py-3 rounded-md">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;