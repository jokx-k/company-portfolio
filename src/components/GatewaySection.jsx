import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './GatewaySection.css';

const GatewaySection = () => {
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

  return (
    <>
      <div className="gateway-image-section">
        <img 
          src="/images/gateway-about.webp" 
          alt={t('gateway.title')} 
          className={`gateway-image ${isVisible ? 'fade-in' : ''}`}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="gateway-image-fallback" style={{ display: 'none' }}>
          <div className="fallback-content">
            <h2>{t('gateway.title')}</h2>
            <p>{t('gateway.description')}</p>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="gateway-section" id="gateway">
        <div className="container">
          <h1 className={`gateway-title ${isVisible ? 'fade-in' : ''}`}>
            {t('gateway.title')}
          </h1>
          <div className="gateway-content">
            <p className={`gateway-description ${isVisible ? 'fade-in' : ''}`}>
              {t('gateway.description')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GatewaySection;
