import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    // Get language from localStorage or default to Arabic
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
    
    // Update document direction and lang attribute
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key) => {
    const translation = translations[language][key] || key;
    // Convert \n to actual line breaks for display
    return translation.replace(/\\n/g, '\n');
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  ar: {
    // Navbar
    'navbar.home': 'الرئيسية',
    'navbar.about': 'من نحن',
    'navbar.services': 'خدماتنا',
    'navbar.offers': 'ماذا نقدم',
    'navbar.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'خبير الربط',
    'hero.subtitle': 'نقدم لكم أفضل الخدمات والحلول',
    'hero.description': 'نعمل بجدية واجتهاد لتحقيق أهدافنا وتلبية احتياجات عملائنا بكل دقة واحترافية',
    'hero.cta': 'تواصل معنا الآن',
    'hero.tagline.ar': 'شريكك المتميز في تقديم الحلول',
    'hero.tagline.en': 'Your Distinguished Partner in Providing Solutions',
    'hero.stats.location.label': 'الموقع',
    'hero.stats.location.value': 'حي الملقا، الرياض',
    'hero.stats.experience.label': 'الخبرة',
    'hero.stats.experience.value': 'حلول متطورة',
    'hero.scroll.text': 'اكتشف المزيد',
    
    // About Section
    'about.title': 'من نحن',
    'about.description': 'خبير الربط هي شركة متخصصة في تقديم أفضل الخدمات والحلول التقنية والاستشارية. نعمل بجدية واجتهاد لتحقيق أهدافنا وتلبية احتياجات عملائنا بكل دقة واحترافية، مع التزامنا بأعلى معايير الجودة والتميز في الأداء.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.consulting': 'الاستشارات التقنية',
    'services.solutions': 'الحلول المتكاملة',
    'services.support': 'الدعم الفني',
    'services.development': 'التطوير والتنفيذ',
    'services.management': 'إدارة المشاريع',
    
    // Offers Section
    'offers.title': 'ماذا نقدم',
    'offers.subtitle': 'نقدم حلول متطورة ومبتكرة',
    'offers.quality': 'جودة عالية',
    'offers.reliability': 'موثوقية',
    'offers.innovation': 'ابتكار',
    'offers.support': 'دعم متواصل',
    'offers.efficiency': 'كفاءة',
    'offers.partnership': 'شراكة استراتيجية',
    
    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن هنا لخدمتكم',
    'contact.description': 'تواصل معنا للحصول على أفضل الخدمات والحلول المتخصصة',
    'contact.form.name': 'الاسم',
    'contact.form.company': 'الشركة',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    'contact.form.sending': 'من فضلك انتظر..',
    'contact.success.title': 'شكرا لك',
    'contact.success.message': 'سنتواصل معك قريباً',
    
    // Footer
    'footer.title': 'معلومات التواصل',
    'footer.company': 'خبير الربط',
    'footer.address.label': 'العنوان',
    'footer.address.value': 'المملكة العربية السعودية - حي الملقا، الرياض',
    'footer.email.label': 'البريد الإلكتروني',
    'footer.email.value': 'info@al-Link.com',
    'footer.phone.label': 'الهاتف',
    'footer.phone.value': '966920013846',
    'footer.links.title': 'روابط مهمة',
    'footer.copyright': 'جميع الحقوق محفوظة لـ خبير الربط – 2025 ©'
  },
  en: {
    // Navbar
    'navbar.home': 'Home',
    'navbar.about': 'About Us',
    'navbar.services': 'Our Services',
    'navbar.offers': 'What We Offer',
    'navbar.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'Link Expert',
    'hero.subtitle': 'We Provide You with the Best Services and Solutions',
    'hero.description': 'We work diligently and earnestly to achieve our goals and meet our clients\' needs with precision and professionalism',
    'hero.cta': 'Contact Us Now',
    'hero.tagline.ar': 'Your Distinguished Partner in Providing Solutions',
    'hero.tagline.en': 'Your Distinguished Partner in Providing Solutions',
    'hero.stats.location.label': 'Location',
    'hero.stats.location.value': 'Al-Malqa, Riyadh',
    'hero.stats.experience.label': 'Expertise',
    'hero.stats.experience.value': 'Advanced Solutions',
    'hero.scroll.text': 'Discover More',
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'Link Expert is a specialized company in providing the best technical and consulting services and solutions. We work diligently and earnestly to achieve our goals and meet our clients\' needs with precision and professionalism, with our commitment to the highest standards of quality and excellence in performance.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.consulting': 'Technical Consulting',
    'services.solutions': 'Integrated Solutions',
    'services.support': 'Technical Support',
    'services.development': 'Development & Implementation',
    'services.management': 'Project Management',
    
    // Offers Section
    'offers.title': 'What We Offer',
    'offers.subtitle': 'We provide advanced and innovative solutions',
    'offers.quality': 'High Quality',
    'offers.reliability': 'Reliability',
    'offers.innovation': 'Innovation',
    'offers.support': 'Continuous Support',
    'offers.efficiency': 'Efficiency',
    'offers.partnership': 'Strategic Partnership',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We Are Here to Serve You',
    'contact.description': 'Contact us to get the best specialized services and solutions',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company',
    'contact.form.phone': 'Phone Number',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'contact.form.sending': 'Please wait..',
    'contact.success.title': 'Thank You',
    'contact.success.message': 'We will contact you soon',
    
    // Footer
    'footer.title': 'Contact Information',
    'footer.company': 'Link Expert',
    'footer.address.label': 'Address',
    'footer.address.value': 'Saudi Arabia - Al-Malqa District, Riyadh',
    'footer.email.label': 'Email',
    'footer.email.value': 'info@al-Link.com',
    'footer.phone.label': 'Phone',
    'footer.phone.value': '966920013846',
    'footer.links.title': 'Important Links',
    'footer.copyright': 'All Rights Reserved for Link Expert – 2025 ©'
  }
};
