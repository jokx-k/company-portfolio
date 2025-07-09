import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '/images/quality-icon.webp',
      title: 'offers.quality',
      fallback: '⭐'
    },
    {
      icon: '/images/reliability-icon.webp',
      title: 'offers.reliability',
      fallback: '🛡️'
    },
    {
      icon: '/images/innovation-icon.webp',
      title: 'offers.innovation',
      fallback: '💡'
    },
    {
      icon: '/images/support-offer-icon.webp',
      title: 'offers.support',
      fallback: '🤝'
    },
    {
      icon: '/images/efficiency-icon.webp',
      title: 'offers.efficiency',
      fallback: '⚡'
    },
    {
      icon: '/images/partnership-icon.webp',
      title: 'offers.partnership',
      fallback: '�'
    }
  ];

  return (
    <>
      <div className="features-image-section">
        <img 
          src="/images/offers-image.webp" 
          alt={t('offers.title')} 
          className={`features-image ${isVisible ? 'fade-in' : ''}`}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="features-image-fallback" style={{ display: 'none' }}>
          <div className="fallback-content">
            <h2>{t('offers.title')}</h2>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="features-section" id="offers">
        <div className="container">
          <h1 className={`features-title ${isVisible ? 'fade-in' : ''}`}>
            {t('offers.title')}
          </h1>
          
          <div className="features-subtitle">
            <p className={`subtitle-text ${isVisible ? 'fade-in' : ''}`}>
              {t('offers.subtitle')}
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-item ${isVisible ? 'fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-content">
                  <img 
                    src={feature.icon} 
                    alt={t(feature.title)} 
                    className="feature-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="feature-icon-fallback" style={{ display: 'none' }}>
                    {feature.fallback}
                  </div>
                  <h3 className="feature-title">{t(feature.title)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
