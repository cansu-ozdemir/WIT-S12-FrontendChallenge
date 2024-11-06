import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from "../../assets/images/profile.png";

const AboutMe = ({data}) => {
  const { content } = useContext(LanguageContext);

  if (!content || !content.aboutMe) {
    return null;
  }

  const aboutMeData = data || content.aboutMe;
  
  return (
    <section id="about-me" className="pt-48 px-6 bg-white dark:bg-[#1F2937] font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="flex-1">
          <div className="relative flex items-baseline gap-1 mb-8">
          <div className="w-20 h-[1px] bg-[#4338CA] dark:bg-[#B7AAFF] translate-y-[-5px]"></div>
            <h3 className="text-m text-[#4338CA] dark:text-[#B7AAFF]">
              Almila Su
            </h3>
            </div>

            <h1 className="text-7xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8">
            {content.aboutMe.title}
            <br />
            {content.aboutMe.subtitle}
            </h1>


            <p className="text-[#6B7280] dark:text-white text-m font-light mb-12 max-w-lg">
            {content.aboutMe.description}
            </p>

            <div className="flex items-center gap-5 pt-2">
              <button className="px-6 py-2 bg-[#FFFFFF] dark:bg-[#383838] text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] rounded-md hover:bg-[#3730A3] dark:hover:bg-[#E1E1FF] hover:text-white dark:hover:text-black hover:border-transparent dark:hover:border-transparent transition-all">
              {content.aboutMe.hireMeButton}
              </button>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex flex-row items-center gap-2 px-4 py-2 bg-[#FFFFFF] dark:bg-[#383838] border border-[#3730A3] dark:border-[#E1E1FF] rounded-md text-[#3730A3] dark:text-[#E1E1FF] hover:bg-[#3730A3] dark:hover:bg-[#E1E1FF] hover:text-white dark:hover:text-black hover:border-transparent dark:hover:border-transparent transition-all">
              <FaGithub size={16}/>
              {content.aboutMe.githubButton}
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex flex-row items-center gap-2 px-4 py-2 bg-[#FFFFFF] dark:bg-[#383838] border border-[#3730A3] dark:border-[#E1E1FF] rounded-md text-[#3730A3] dark:text-[#E1E1FF] hover:bg-[#3730A3] dark:hover:bg-[#E1E1FF] hover:text-white dark:hover:text-black hover:border-transparent dark:hover:border-transparent transition-all">
              <FaLinkedin size={16} />
              {content.aboutMe.linkedinButton}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <img src={profileImage} alt="Profile" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;