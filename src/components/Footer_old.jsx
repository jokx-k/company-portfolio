import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="office-section">
            <h2 className="section-title">{t('footer.title')}</h2>
            
            <div className="office-grid">
              <div className="office-info">
                <h3 className="office-city">{t('footer.company')}</h3>
                
                <div className="contact-item">
                  <div className="contact-link">
                    <div className="contact-label">{t('footer.address.label')}</div>
                    <div className="contact-value">
                      {t('footer.address.value')}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <a href="mailto:info@al-Link.com" className="contact-link">
                    <div className="contact-label">{t('footer.email.label')}</div>
                    <div className="contact-value">{t('footer.email.value')}</div>
                  </a>
                </div>

                <div className="contact-item">
                  <a href="tel:966920013846" className="contact-link">
                    <div className="contact-label">{t('footer.phone.label')}</div>
                    <div className="contact-value">{t('footer.phone.value')}</div>
                  </a>
                </div>

                <div className="links-section">
                  <h4 className="links-title">{t('footer.links.title')}</h4>
                  <div className="footer-links">
                    <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="footer-link">
                      {t('navbar.home')}
                    </button>
                    <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="footer-link">
                      {t('navbar.about')}
                    </button>
                    <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="footer-link">
                      {t('navbar.services')}
                    </button>
                    <button onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })} className="footer-link">
                      {t('navbar.offers')}
                    </button>
                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="footer-link">
                      {t('navbar.contact')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="office-image-container">
                <img 
                  src="/images/company-image.webp" 
                  alt={t('footer.company')} 
                  className="office-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="office-image-fallback" style={{ display: 'none' }}>
                  <div className="fallback-content">
                    <h3>{t('footer.company')}</h3>
                    <p>{t('footer.address.value')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <a href="#" className="copyright-link">
              {t('footer.copyright')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
