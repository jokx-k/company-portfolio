import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img 
          src="/images/hero-background.webp" 
          alt={t('hero.title')} 
          className="hero-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #c9a961 100%)';
          }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column - Main Content */}
            <div className="hero-main">
              <div className={`hero-badge ${isVisible ? 'fade-in' : ''}`}>
                <span className="badge-text">{t('hero.tagline.en')}</span>
              </div>

              <div className={`hero-heading ${isVisible ? 'fade-in' : ''}`}>
                <h1 className="main-title">
                  <span className="title-line-1">{t('hero.title')}</span>
                  <span className="title-accent">{t('hero.subtitle')}</span>
                </h1>
              </div>

              <div className={`hero-description ${isVisible ? 'fade-in' : ''}`}>
                <p className="description-text">
                  {t('hero.description')}
                </p>
              </div>

              <div className={`hero-actions ${isVisible ? 'fade-in' : ''}`}>
                <button onClick={handleCTAClick} className="cta-primary">
                  {t('hero.cta')}
                  <span className="cta-arrow">←</span>
                </button>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-label">{t('hero.stats.location.label')}</span>
                    <span className="stat-value">{t('hero.stats.location.value')}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">{t('hero.stats.experience.label')}</span>
                    <span className="stat-value">{t('hero.stats.experience.value')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="hero-visual">
              <div className={`hero-logo-container ${isVisible ? 'fade-in' : ''}`}>
                <div className="logo-frame">
                  <img 
                    src="/images/main-logo.webp" 
                    alt={t('hero.title')} 
                    className="main-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback" style={{ display: 'none' }}>
                    <div className="logo-symbol">عُود</div>
                    <div className="logo-text">ريزيرڤ</div>
                  </div>
                </div>
                <div className="logo-glow"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Additional Info */}
          <div className={`hero-footer ${isVisible ? 'fade-in' : ''}`}>
            <div className="scroll-indicator" onClick={handleScrollClick}>
              <span className="scroll-text">{t('hero.scroll.text')}</span>
              <div className="scroll-arrow">↓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
