import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './IntroSection.css';

const IntroSection = () => {
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
      { threshold: 0.3 }
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

  return (
    <>
      {/* First Section - Two Column Layout */}
      <section className="top-section home onlyhome top" ref={sectionRef}>
        <div className="w-layout-blockcontainer container home w-container">
          <div className="grid-2-columns">
            <div className="col1">
              <h1 className={`headingintro ${isVisible ? 'animate-in' : ''}`}>
                {t('hero.title')}
              </h1>
              <div className="div-block-4 home">
                <p className={`paragraph-6 ${isVisible ? 'animate-in delay-1' : ''}`}>
                  {t('about.description')}
                </p>
              </div>
            </div>
            <div className="col2 top">
              <img 
                className={`top-section-video-right buttom-section home ${isVisible ? 'animate-in delay-2' : ''}`}
                src="/images/intro-image.jpg" 
                alt="Link Expert Services" 
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 68vw, (max-width: 1439px) 44vw, 525px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className={`section-top parttwo ${isVisible ? 'animate-in delay-3' : ''}`}>
        <img 
          src="/images/gateway-image.jpg" 
          loading="lazy" 
          sizes="100vw" 
          alt="Link Expert Gateway" 
          className="image-2 about"
        />
      </div>

      {/* Text Section */}
      <section className="section-2">
        <h1 className={`heading-6 ${isVisible ? 'animate-in delay-4' : ''}`}>
          بوابتك لعالمك الاستثنائي
        </h1>
        <div className="elementpart1">
          <div className="text-block paragrapg">
            <p className={`paragraphpart1 ${isVisible ? 'animate-in delay-5' : ''}`}>
              أهــــلاً بك في {t('hero.title')}.. الوجهة المتميزة في تقديم الخدمات والحلول التقنية والاستشارية، حيث صُممت لعَيـــش تجربــــة الأعمـــال وأسلوب الحياة العصري بمعايير عالمية ومزايا رفيعة المستوى.. اختيرت بعناية مُطلقة.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
