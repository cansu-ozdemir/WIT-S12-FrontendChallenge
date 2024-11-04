import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  const { content } = useContext(LanguageContext);

  if (!content || !content.aboutMe) {
    return null;
  }
  
  return (
    <section className="pt-32 px-6 bg-white dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="flex-1">
          <div className="relative flex items-baseline gap-1 mb-2">
          <div className="w-12 h-[1px] bg-[#7B61FF] dark:bg-[#8F88FF] translate-y-[-5px]"></div>
            <h3 className="text-sm text-[#7B61FF] dark:text-[#8F88FF]">
              Almila Su
            </h3>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.aboutMe.title}
            <br />
            {content.aboutMe.subtitle}
            </h1>


            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            {content.aboutMe.description}
            </p>

            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-[#7B61FF] dark:bg-[#8F88FF] text-white rounded-md hover:bg-opacity-90 transition-all">
              {content.aboutMe.hireMeButton}
              </button>

              <a href="https://github.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex flex-row items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:border-[#7B61FF] dark:hover:border-[#8F88FF] transition-all">
              <FaGithub size={16}/>
              {content.aboutMe.githubButton}
              </a>

              <a href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-row items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:border-[#7B61FF] dark:hover:border-[#8F88FF] transition-all">
              <FaLinkedin size={16} />
              {content.aboutMe.linkedinButton}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <img src="/src/assets/images/profile.png"
            alt="Profile" 
            className="w-full h-auto rounded-lg shadow-lg"
        />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;