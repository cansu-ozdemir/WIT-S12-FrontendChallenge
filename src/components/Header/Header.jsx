import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, content } = useContext(LanguageContext);
  const [activeSection, setActiveSection] = useState('');

useEffect(() => {
  const handleScroll = () => {
  const sections = ['skills', 'projects', 'about-me'];
  const currentSection = sections.find(section => {
  const element = document.getElementById(section);
  if (element) {const rect = element.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;}
    return false;
});
  setActiveSection(currentSection || '');
};
window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToSection = (sectionId) => {
const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getLinkStyle = (sectionId) => {
    const baseStyle = "text-sm font-medium transition-colors duration-300 px-4 py-2 rounded-md";
    const isActive = activeSection === sectionId;
    
    return `${baseStyle} ${
        isActive 
            ? 'bg-white text-[#3730A3] border border-[#3730A3]' 
            : 'text-[#6B7280] dark:text-[#6B7280] hover:bg-white hover:text-[#3730A3] hover:border hover:border-[#3730A3]'
    }`;
};

return (
<header className="fixed top-0 left-0 w-full bg-white dark:bg-[#1F2937] z-50 h-[120px] font-['Inter']">
<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-end items-center space-x-4 py-4">
    <div className="flex items-center space-x-2">

<button onClick={toggleTheme} className={`relative h-[24px] w-[48px] rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-[#3A3A3A]' : 'bg-[#4731D3]'}`}>
  <div className={`absolute top-0 h-[24px] w-[24px] flex items-center justify-center transition-transform duration-300 ${theme === 'dark' ? 'left-0' : 'left-[24px]'}`}>
  {theme === 'dark' ? (<span className="text-[18px] text-[#FFE86E] transform scale-x-[-1]">🌙</span>
  ) : (
  <span className="text-[18px] text-[#FFE86E]">🌕</span>
 )}
  </div>
</button>
<span className="text-sm font-medium text-[#777777] dark:text-[#D9D9D9]">
  {theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE'}
</span>
</div>
<span className="text-[#777777] dark:text-[#777777]">|</span>


<button onClick={toggleLanguage} className="text-sm font-medium">
  {language === 'tr' ? (
    <>
    <span className="text-gray-500">
      {content?.header?.switchLanguage.rest}
    </span>
    <span className={theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4731D3]'}>
      {content?.header?.switchLanguage.highlight}
    </span>
    </>
    ) : (
    <>
    <span className={theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4731D3]'}>
     {content?.header?.switchLanguage.highlight}
    </span>
    <span className="text-gray-500">
     {content?.header?.switchLanguage.rest}
    </span>
        </>
    )}
</button>
</div>


<div className="flex items-center justify-between py-6">

<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#EEEBFF] dark:bg-[#4731D3]">
  <span className="text-2xl text-[#7B61FF] dark:text-[#8F88FF] transform rotate-12">
     C
  </span>
</div>


<nav className="flex items-center space-x-8">
<button onClick={() => scrollToSection('skills')} className={getLinkStyle('skills')}>
  {content?.header?.skills}
</button>
                
<button onClick={() => scrollToSection('projects')} className={getLinkStyle('projects')}>
  {content?.header?.projects}
</button>
                
<button onClick={() => scrollToSection('about-me')} className={getLinkStyle('about-me')}>
  {content?.header?.hire}
</button>
</nav>
</div>
</div>
</header>
);
};

export default Header;