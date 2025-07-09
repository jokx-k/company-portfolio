import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useLanguage();
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.top-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-top-copy">
      <img 
        src="/images/hero-bg.jpg" 
        loading="lazy" 
        sizes="100vw" 
        alt="Link Expert Background" 
        className="image-2-copy"
      />
      <div className="div-block-home a">
        <div className="elements">
          <img 
            className={`image-3 ${animationLoaded ? 'animate-in' : ''}`}
            src="/images/link-expert-logo.webp" 
            alt="Link Expert Logo" 
            sizes="(max-width: 479px) 40vw, (max-width: 767px) 25vw, (max-width: 991px) 21vw, 18vw"
            loading="lazy"
          />
        </div>
        
        <div className="element2">
          <div className="text-block">
            <p className={`paragraph ${animationLoaded ? 'animate-in' : ''}`}>
              {t('hero.title')}
            </p>
            <p className={`paragraph-2 ${animationLoaded ? 'animate-in delay-1' : ''}`}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="element3">
          <div className={`text-block-2 new ${animationLoaded ? 'animate-in delay-2' : ''}`}>
            {t('hero.description')}
          </div>
        </div>
        
        <div className="div-block-2">
          <a 
            className={`button-2 w-button ${animationLoaded ? 'animate-in delay-3' : ''}`}
            href="#contact"
          >
            {t('hero.cta')}
          </a>
        </div>
        
        <div className="elements4">
          <div className={`div-block-3 ${animationLoaded ? 'animate-in delay-4' : ''}`}>
            <div className="text-block-4">
              {t('hero.tagline.ar')}
            </div>
            <div className="text-block-3 en">
              {t('hero.tagline.en')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
