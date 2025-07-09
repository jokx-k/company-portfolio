import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // For sections that don't have IDs, use querySelector
      const sections = {
        'home': '.section-top-copy',
        'about': '.top-section.home.onlyhome.top',
        'offers': '.section-2',
        'services': '.section.home',
        'contact': '.top-section.home.onlyhome'
      };
      
      const targetSection = document.querySelector(sections[sectionId]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`navbar w-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="block-navbar">
        <div className="nav">
          <a 
            href="#" 
            className="brand w-nav-brand"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img 
              src="images/link-expert-logo.webp" 
              loading="eager" 
              alt="Link Expert Logo" 
              className="logo menu oud"
            />
          </a>
        </div>
        
        <div className="nav">
          <div 
            className="menu-button w-nav-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="menu"
          >
            <div className="block-icon-menu">
              <img src="images/menu.svg" loading="eager" alt="" className="icon-menu" />
            </div>
          </div>
          
          <nav className={`nav-menu mob w-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {/* Language Dropdown */}
            <div className="dropdown w-dropdown">
              <div className="nav-link w-dropdown-toggle">
                <div className="icon w-icon-dropdown-toggle"></div>
                <div>{language.toUpperCase()}</div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <a 
                  className="nav-link w-dropdown-link" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLanguageChange(language === 'ar' ? 'en' : 'ar');
                  }}
                >
                  {language === 'ar' ? 'EN' : 'AR'}
                </a>
              </nav>
            </div>
            
            {/* Navigation Links */}
            <a 
              className="nav-link w-nav-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              {t('navbar.home')}
            </a>
            
            <a 
              className="nav-link w-nav-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              {t('navbar.about')}
            </a>
            
            <a 
              className="nav-link w-nav-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('offers');
              }}
            >
              {t('navbar.offers')}
            </a>
            
            <a 
              className="nav-link w-nav-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              {t('navbar.services')}
            </a>
            
            <a 
              className="nav-link w-nav-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              {t('navbar.contact')}
            </a>
            
            {/* Mobile Language Dropdown */}
            <div className="navbar-wrapper-right mobile">
              <div className="dropdown mob w-dropdown">
                <div className="nav-link new w-dropdown-toggle">
                  <div className="icon w-icon-dropdown-toggle"></div>
                  <div className="text-block-12">{language.toUpperCase()}</div>
                </div>
                <nav className="dropdown-list w-dropdown-list">
                  <a 
                    className="nav-link e new w-dropdown-link" 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange(language === 'ar' ? 'en' : 'ar');
                    }}
                  >
                    {language === 'ar' ? 'EN' : 'AR'}
                  </a>
                </nav>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="nav mob">
          <a 
            href="#" 
            className="brand w-nav-brand"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img 
              src="images/link-expert-mobile-logo.webp" 
              loading="eager" 
              alt="Link Expert Mobile Logo" 
              className="logo menu"
            />
          </a>
        </div>
      </div>
      
      {isMobileMenuOpen && <div className="w-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </div>
  );
};

export default Navbar;
