import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import portfolioData from '../../data/portfolio.json';

const PortfolioGrid = ({ showAll = false, itemsToShow = 6 }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleItems, setVisibleItems] = useState(showAll ? portfolioData.items.length : itemsToShow);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioData.items 
    : portfolioData.items.filter(item => item.category === activeFilter);
  
  const itemsToDisplay = filteredItems.slice(0, visibleItems);
  
  const loadMore = () => {
    setVisibleItems(prev => prev + portfolioData.itemsPerPage);
  };
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  return (
    <section className="py-16 light-page-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Discover Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the range of digital solutions we've delivered for clients across industries.
          </p>
        </div>
        
        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolioData.filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleItems(showAll ? portfolioData.items.length : itemsToShow);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((item, index) => (
              <div 
                key={item.id} 
                className="group bg-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.slice(0, 2).map((tech, index) => (
                      <span key={index} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {item.tech.length > 2 && (
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        +{item.tech.length - 2} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <button 
                      onClick={() => openProjectModal(item)}
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <a 
                      href={item.link} 
                      className="text-primary hover:text-primary/80 font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Load More Button */}
        {!showAll && visibleItems < filteredItems.length && (
          <div className="text-center">
            <button 
              onClick={loadMore}
              className="button-vibrant px-8 py-3 rounded-md"
            >
              Load More Projects
            </button>
          </div>
        )}
        
        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeProjectModal} 
        />
      </div>
    </section>
  );
};

export default PortfolioGrid;