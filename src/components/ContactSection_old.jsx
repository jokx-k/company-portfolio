import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ContactSection.css';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});
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

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'required';
    }
    
    if (!formData.company.trim()) {
      errors.company = 'required';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'invalid';
    }

    return errors;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setSubmitStatus('sending');
    setFormErrors({});
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="container">
        <h1 className={`contact-title ${isVisible ? 'fade-in' : ''}`}>
          {t('contact.title')}
        </h1>
        
        <div className="contact-grid">
          <div className="contact-content">
            <h2 className={`contact-subtitle ${isVisible ? 'fade-in' : ''}`}>
              {t('contact.subtitle')}
            </h2>
            <p className={`contact-description ${isVisible ? 'fade-in' : ''}`}>
              {t('contact.description')}
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className={`form-grid ${isVisible ? 'fade-in' : ''}`}>
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${formErrors.name ? 'error' : ''}`}
                  />
                  {formErrors.name && <span className="error-message">*</span>}
                </div>
                
                <div className="form-field">
                  <input
                    type="text"
                    name="company"
                    placeholder={t('contact.form.company')}
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${formErrors.company ? 'error' : ''}`}
                  />
                  {formErrors.company && <span className="error-message">*</span>}
                </div>
                
                <div className="form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${formErrors.phone ? 'error' : ''}`}
                  />
                  {formErrors.phone && <span className="error-message">*</span>}
                </div>
                
                <div className="form-field email">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                  />
                  {formErrors.email && <span className="error-message">*</span>}
                </div>
                
                <div className="form-field">
                  <textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <div className="success-text">{t('contact.success.title')}</div>
                <div className="success-text">{t('contact.success.message')}</div>
              </div>
            )}
          </div>
          
          <div className="contact-image-container">
            <img 
              src="/images/contact-image.webp" 
              alt={t('contact.title')} 
              className={`contact-image ${isVisible ? 'fade-in' : ''}`}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="contact-image-fallback" style={{ display: 'none' }}>
              <div className="fallback-content">
                <h3>{t('contact.title')}</h3>
                <p>{t('contact.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
