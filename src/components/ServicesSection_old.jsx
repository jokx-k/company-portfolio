import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ServicesSection.css';

const ServicesSection = () => {
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

  const services = [
    {
      icon: '/images/consulting-icon.webp',
      title: 'services.consulting',
      fallback: '💼'
    },
    {
      icon: '/images/solutions-icon.webp',
      title: 'services.solutions',
      fallback: '⚙️'
    },
    {
      icon: '/images/support-icon.webp',
      title: 'services.support',
      fallback: '�'
    },
    {
      icon: '/images/development-icon.webp',
      title: 'services.development',
      fallback: '�'
    },
    {
      icon: '/images/management-icon.webp',
      title: 'services.management',
      fallback: '📊'
    }
  ];

  return (
    <section ref={sectionRef} className="services-section" id="services">
      <div className="container">
        <h1 className={`services-title ${isVisible ? 'fade-in' : ''}`}>
          {t('services.title')}
        </h1>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-item ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-content">
                <img 
                  src={service.icon} 
                  alt={t(service.title)} 
                  className="service-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="service-icon-fallback" style={{ display: 'none' }}>
                  {service.fallback}
                </div>
                <h3 className="service-title">{t(service.title)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
