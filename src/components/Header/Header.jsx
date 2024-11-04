import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, content } = useContext(LanguageContext);

  const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
  };

return (
<header className="fixed top-0 left-0 w-full bg-white dark:bg-[#1F2937] z-50">
<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-end items-center space-x-4 py-2">

<div className="flex items-center space-x-2">

<button onClick={toggleTheme} className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#E2E8F0] dark:bg-gray-700 transition-colors duration-300">
  <span className="sr-only">Toggle theme</span>
  <span className={`${theme === 'dark' ? 'translate-x-1' : 'translate-x-6'} inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#818CF8] transition-transform duration-300`}/>
</button>
  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
    {theme === 'dark' ? content?.header?.lightMode : content?.header?.darkMode}
  </span>
</div>
  <span className="text-gray-300 dark:text-gray-600">|</span>

<button onClick={toggleLanguage} className="text-sm font-medium text-gray-600 dark:text-gray-300">
  {content?.header?.switchLanguage}
</button>
</div>


<div className="flex items-center justify-between py-4">

<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#EEEBFF] dark:bg-[#4731D3]">
  <span className="text-2xl text-[#7B61FF] dark:text-[#8F88FF] transform rotate-12">
     A
  </span>
</div>


<nav className="flex items-center space-x-8">
<button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] text-sm font-medium">
{content?.header?.skills}
</button>
                    
<button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] text-sm font-medium">
{content?.header?.projects}
</button>
                    
<button className="px-4 py-1.5 bg-white dark:bg-[#1F2937] text-[#6366F1] dark:text-[#818CF8] border border-[#6366F1] dark:border-[#818CF8] rounded-md text-sm font-medium hover:bg-[#6366F1] hover:text-white dark:hover:bg-[#818CF8]">
{content?.header?.hire}
</button>
</nav>
</div>
</div>
</header>
);
};

export default Header;