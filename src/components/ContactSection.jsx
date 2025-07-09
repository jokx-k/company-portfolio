import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ContactSection.css';

const ContactSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="success-message-2 w-form-done">
        <div className="approved">
          <div className="text-block-8">{t('contact.success.title')}</div>
          <div className="text-block-8">{t('contact.success.message')}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Contact Form Section */}
      <section className="top-section home onlyhome" id="contact" ref={sectionRef}>
        <h1 className={`heading-2 gallary home ${isVisible ? 'animate-in' : ''}`}>
          {t('contact.title')}
        </h1>
        <div className="w-layout-blockcontainer container home w-container">
          <div className="grid-2-columns">
            <div className="col1">
              <h1 className={`heading-hero-b ${isVisible ? 'animate-in delay-1' : ''}`}>
                {t('contact.subtitle')}
              </h1>
              <div className="inner-container">
                <p className={`mg-bottom-48px ${isVisible ? 'animate-in delay-2' : ''}`}>
                  {t('contact.description')}
                </p>
              </div>
              
              <div className="w-form">
                <form 
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className={`w-layout-grid grid ${isVisible ? 'animate-in delay-3' : ''}`}>
                    <div>
                      <input 
                        className="text-field-2 w-input" 
                        maxLength="256" 
                        name="name" 
                        placeholder={t('contact.form.name')}
                        type="text" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <input 
                        className="text-field-2 w-input" 
                        maxLength="256" 
                        name="company" 
                        placeholder={t('contact.form.company')}
                        type="text" 
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <input 
                        className="text-field-2 w-input" 
                        maxLength="256" 
                        name="phone" 
                        placeholder={t('contact.form.phone')}
                        type="text" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <input 
                        className="text-field-2 emial w-input" 
                        maxLength="256" 
                        name="email" 
                        placeholder={t('contact.form.email')}
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="textarea-wrapper">
                      <textarea 
                        name="message" 
                        maxLength="5000" 
                        placeholder={t('contact.form.message')}
                        className="textarea-2 w-input"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="submit-button w-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col2">
              <img 
                className={`top-section-video-right ${isVisible ? 'animate-in delay-4' : ''}`}
                src="/images/contact-image.jpg" 
                alt="Contact Link Expert" 
                sizes="(max-width: 991px) 90vw, (max-width: 1439px) 44vw, 564px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="top-section second home">
        <div className="w-layout-blockcontainer container home w-container">
          <div>
            <h1 className="heading-2">تفضل بزيارة مكاتبنا</h1>
          </div>
          <div className="grid-2-columns">
            <div className="col1">
              <h1 className={`heading-hero-b ${isVisible ? 'animate-in delay-5' : ''}`}>
                الرياض
              </h1>
              <div className="div-block-4">
                <a 
                  href="https://maps.google.com/?q=Al-Malqa,Riyadh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-block w-inline-block"
                >
                  <div className={`text-block-5 ${isVisible ? 'animate-in delay-6' : ''}`}>
                    {t('footer.address.label')}
                  </div>
                  <div className={`text-block-6 ${isVisible ? 'animate-in delay-6' : ''}`}>
                    {t('footer.address.value')}
                  </div>
                </a>
                
                <a 
                  href={`mailto:${t('footer.email.value')}`} 
                  className="link-block w-inline-block"
                >
                  <div className={`text-block-5 ${isVisible ? 'animate-in delay-7' : ''}`}>
                    {t('footer.email.label')}
                  </div>
                  <div className={`text-block-6 ${isVisible ? 'animate-in delay-7' : ''}`}>
                    {t('footer.email.value')}
                  </div>
                </a>
                
                <a 
                  href={`tel:${t('footer.phone.value')}`} 
                  className="link-block w-inline-block"
                >
                  <div className={`text-block-5 ${isVisible ? 'animate-in delay-8' : ''}`}>
                    {t('footer.phone.label')}
                  </div>
                  <div className={`text-block-6 ${isVisible ? 'animate-in delay-8' : ''}`}>
                    {t('footer.phone.value')}
                  </div>
                </a>
                
                <div className="div-blockbarachour">
                  <a 
                    href="/downloads/media-file.pdf" 
                    download
                    className={`button-donload w-button ${isVisible ? 'animate-in delay-9' : ''}`}
                  >
                    حمل الملف الإعلامي
                  </a>
                </div>
                
                <div className="div-blockbarachour">
                  <a 
                    href="/downloads/brochure.pdf" 
                    download
                    className={`button-donload w-button ${isVisible ? 'animate-in delay-10' : ''}`}
                  >
                    حمل البروشور
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col2">
              <img 
                className={`top-section-video-right buttom-section ${isVisible ? 'animate-in delay-11' : ''}`}
                src="/images/office-image.jpg" 
                alt="Link Expert Office" 
                sizes="(max-width: 991px) 90vw, (max-width: 1439px) 44vw, 564px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
