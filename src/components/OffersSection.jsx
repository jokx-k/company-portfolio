import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './OffersSection.css';

const OffersSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const offers = [
    {
      id: 1,
      icon: '/images/offer-1.jpg',
      title: 'استشارات تقنية',
      subtitle: 'متخصصة'
    },
    {
      id: 2,
      icon: '/images/offer-2.jpg',
      title: 'حلول متكاملة',
      subtitle: 'ومبتكرة'
    },
    {
      id: 3,
      icon: '/images/offer-3.jpg',
      title: 'دعم فني',
      subtitle: 'متواصل'
    },
    {
      id: 4,
      icon: '/images/offer-4.jpg',
      title: 'إدارة مشاريع',
      subtitle: 'احترافية'
    },
    {
      id: 5,
      icon: '/images/offer-5.jpg',
      title: 'خدمات تطوير',
      subtitle: 'متقدمة'
    },
    {
      id: 6,
      icon: '/images/service-1.jpg',
      title: 'شراكة استراتيجية',
      subtitle: 'طويلة المدى'
    },
    {
      id: 7,
      icon: '/images/service-2.jpg',
      title: 'حلول مخصصة',
      subtitle: 'لكل عميل'
    },
    {
      id: 8,
      icon: '/images/service-3.jpg',
      title: 'جودة عالية',
      subtitle: 'مضمونة'
    }
  ];

  return (
    <>
      {/* Background Image Section */}
      <div className={`section-top parttwo ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
        <img 
          src="/images/views-image.jpg" 
          loading="lazy" 
          sizes="100vw" 
          alt="Link Expert Views" 
          className="image-2 about"
        />
      </div>

      {/* Main Content Section */}
      <section className="section-2">
        <h1 className={`heading-7 on ${isVisible ? 'animate-in delay-1' : ''}`}>
          إطلالات ساحرة تلهمك وتعزز إبداعك
        </h1>
        <div className="elementpart1 paragraph">
          <div className="text-block paragrapg">
            <p className={`paragraphpart1 ${isVisible ? 'animate-in delay-2' : ''}`}>
              من هنا تبدأ رحلتك نحو التميز
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="element5">
          <div className="text-block">
            <div className="w-layout-grid grid-2 new">
              {offers.map((offer, index) => (
                <div 
                  key={offer.id}
                  className={`grid-item ${isVisible ? 'animate-in' : ''}`}
                  style={{ 
                    animationDelay: `${0.3 + (index * 0.1)}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  <div className="div-block-6">
                    <img 
                      src={offer.icon} 
                      loading="lazy" 
                      alt={offer.title}
                      className="image-5 new"
                    />
                    <div className="text-block-7 part">
                      {offer.title}<br />
                      {offer.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Image Sections */}
      <div className={`section-top parttwo ${isVisible ? 'animate-in delay-3' : ''}`}>
        <img 
          src="/images/office-image.jpg" 
          loading="lazy" 
          sizes="100vw" 
          alt="Link Expert Office" 
          className="image-2 about"
        />
      </div>

      <section className="section-2">
        <h1 className={`heading-7 hidemob ${isVisible ? 'animate-in delay-4' : ''}`}>
          عزّز أعمالك في بيئة مهنية متطورة
        </h1>
        <h1 className={`heading-7 mob ${isVisible ? 'animate-in delay-4' : ''}`}>
          عزّز أعمالك في بيئة<br />مهنية متطورة
        </h1>
      </section>
    </>
  );
};

export default OffersSection;
