import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ServicesSection.css';

const ServicesSection = () => {
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

  const services = [
    {
      id: 1,
      icon: '/images/service-1.jpg',
      title: 'تفعيل الحلول',
      description: 'نقوم بتفعيل وتطبيق الحلول التقنية المتطورة'
    },
    {
      id: 2,
      icon: '/images/service-2.jpg',
      title: 'خدمة العملاء',
      description: 'دعم متواصل وخدمة عملاء على مدار الساعة'
    },
    {
      id: 3,
      icon: '/images/service-3.jpg',
      title: 'الاستشارات المتقدمة',
      description: 'استشارات تقنية وإدارية من خبراء متخصصين'
    },
    {
      id: 4,
      icon: '/images/service-4.jpg',
      title: 'إدارة المشاريع',
      description: 'إدارة احترافية للمشاريع من البداية للنهاية'
    },
    {
      id: 5,
      icon: '/images/service-5.jpg',
      title: 'خبير الربط الآن',
      description: 'خدمات فورية ومتاحة في أي وقت'
    }
  ];

  return (
    <>
      {/* Background Image Section */}
      <div className={`section-top parttwo ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
        <img 
          src="/images/contact-image.jpg" 
          loading="lazy" 
          sizes="100vw" 
          alt="Link Expert Services" 
          className="image-2 about"
        />
      </div>

      {/* Services Section */}
      <section className="section-2">
        <h1 className={`heading-6 ${isVisible ? 'animate-in delay-1' : ''}`}>
          حلول متخصصة لنخبة الشركات
        </h1>
        <div className="elementpart1">
          <div className="text-block paragrapg">
            <p className={`paragraphpart1 ${isVisible ? 'animate-in delay-2' : ''}`}>
              تواجدك مع {t('hero.title')} يعني أن تنغمس في تجربة غير مسبوقة وفريدة من نوعها، محـــاطًا بالتفاصيل المفعمة بالأنـــاقة والاحترافية، بمزيجٍ متنـــاغم من أحدث التقنيات وأفضل الممارسات في مجال الأعمال.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <div className="section home">
        <div className="div-block-5 home">
          <h1 className={`heading-2 home ${isVisible ? 'animate-in delay-3' : ''}`}>
            {t('services.title')}
          </h1>
          <div className="w-layout-grid grid-2">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-item ${isVisible ? 'animate-in' : ''}`}
                style={{ 
                  animationDelay: `${0.4 + (index * 0.1)}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="div-block-6">
                  <img 
                    src={service.icon} 
                    loading="lazy" 
                    alt={service.title}
                    className={`image-5 ${index === 4 ? 'bigger' : ''}`}
                  />
                  <div className="text-block-7">
                    {service.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className={`section-top parttwo ${isVisible ? 'animate-in delay-4' : ''}`}>
        <img 
          src="/images/intro-image.jpg" 
          loading="lazy" 
          sizes="100vw" 
          alt="Link Expert Excellence" 
          className="image1 about"
        />
      </div>

      <section className="section-2">
        <h1 className={`heading-7 ${isVisible ? 'animate-in delay-5' : ''}`}>
          التقاء الخبرة والتميز في خدمة العملاء
        </h1>
      </section>
    </>
  );
};

export default ServicesSection;
