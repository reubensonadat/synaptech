import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import headerFooterData from '../../data/headerFooter.json';
import brandingData from '../../data/branding.json';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900' 
          : 'bg-white'
      } ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={brandingData.logo} 
                alt="Synap Tech Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-purple-600 dark:text-purple-400">Synap Tech</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {headerFooterData.headerNav.map((item, index) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                const isActive = location.pathname === path;
                
                return (
                  <Link 
                    key={index}
                    to={path}
                    className={`relative font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-purple-600 dark:text-purple-400' 
                        : 'text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Dark Mode Toggle - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Sliding from right */}
      <div className={`fixed inset-0 z-40 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div 
          className="fixed inset-0 bg-black/80 transition-opacity"
          onClick={toggleMobileMenu}
        ></div>
        <div className={`fixed right-0 top-0 h-full w-80 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-xl transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={brandingData.logo} 
                  alt="Synap Tech Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-lg text-purple-600 dark:text-purple-400">Synap Tech</span>
              </Link>
              <button 
                className="text-gray-900 dark:text-gray-100 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {headerFooterData.headerNav.map((item, index) => {
                  const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                  const isActive = location.pathname === path;
                  
                  return (
                    <li key={index}>
                      <Link 
                        to={path}
                        className={`block px-4 py-3 rounded-md font-medium transition-colors duration-300 ${
                          isActive 
                            ? 'bg-purple-600 text-white' 
                            : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Dark Mode</span>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
              <Link 
                to="/contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium w-full px-4 py-2 rounded-md text-center block transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;