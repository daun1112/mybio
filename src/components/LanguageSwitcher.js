import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    return (
        <div className="language-switcher">
            <button 
                className={language === 'ru' ? 'active' : ''} 
                onClick={() => handleLanguageChange('ru')}
            >
                Русский
            </button>
            <button 
                className={language === 'en' ? 'active' : ''} 
                onClick={() => handleLanguageChange('en')}
            >
                English
            </button>
        </div>
    );
};

export default LanguageSwitcher;