import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './IntroSection.css';

const IntroSection = () => {
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
    <section ref={sectionRef} className="intro-section" id="about">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-content">
            <h1 className={`intro-title ${isVisible ? 'fade-in' : ''}`}>
              {t('about.title')}
            </h1>
            <div className="intro-text-container">
              <p className={`intro-description ${isVisible ? 'fade-in' : ''}`}>
                {t('about.description')}
              </p>
            </div>
          </div>
          <div className="intro-image-container">
            <img 
              src="/images/about-image.webp" 
              alt={t('about.title')} 
              className={`intro-image ${isVisible ? 'fade-in' : ''}`}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-fallback" style={{ display: 'none' }}>
              <div className="fallback-content">
                <h3>صورة المبنى</h3>
                <p>عُود ريزيرڤ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
