import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
    setIsLangDropdownOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-section">
          {/* <a href="https://oud.sa/" className="brand">
            <img 
              src="/images/oud-logo.webp" 
              alt="عُود العقارية" 
              className="logo oud-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
              عُود العقارية
            </div>
          </a> */}
        </div>

        <div className="nav-section">
          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="menu"
          >
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="language-dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              >
                <span>{language.toUpperCase()}</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              {isLangDropdownOpen && (
                <div className="dropdown-list">
                  <button 
                    className="nav-link dropdown-item" 
                    onClick={() => handleLanguageChange('ar')}
                  >
                    AR
                  </button>
                  <button 
                    className="nav-link dropdown-item" 
                    onClick={() => handleLanguageChange('en')}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('home')} className="nav-link current">
              {t('navbar.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              {t('navbar.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              {t('navbar.services')}
            </button>
            <button onClick={() => scrollToSection('offers')} className="nav-link">
              {t('navbar.offers')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t('navbar.contact')}
            </button>
          </div>
        </div>

        <div className="nav-section mobile-brand">
          <button onClick={() => scrollToSection('home')} className="brand mobile">
            <img 
              src="/images/horse-logo.webp" 
              alt="الفرس" 
              className="logo mobile-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none', padding: '5px', backgroundColor: '#f0f0f0', borderRadius: '3px', fontSize: '12px' }}>
              الفرس
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
