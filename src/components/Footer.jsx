import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className="section-footer">
      <div className="footer">
        <a href="#" className="link-footer">
          {t('footer.copyright')}
        </a>
      </div>
    </div>
  );
};

export default Footer;
