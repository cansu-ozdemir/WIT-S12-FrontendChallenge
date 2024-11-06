import { useContext, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import SkillCard from './SkillCard';
import jsIcon from '../../assets/icons/js.jpeg';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/node.jpeg';
import reduxIcon from '../../assets/icons/redux.png';
import vscodeIcon from '../../assets/icons/vscode.png';
import figmaIcon from '../../assets/icons/figma.jpeg';


const Skills = ({data}) => {
  const {content} = useContext(LanguageContext);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const cardWidth = container?.firstElementChild?.offsetWidth || 0;
    const gap = 24;
      
    if (container) {
        container.scrollBy({left: direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap),
        behavior: 'smooth'
        });
      }
  };
  const skillIcons = {
    "JavaScript": jsIcon,
    "React.js": reactIcon,
    "Node.js": nodeIcon,
    "Redux": reduxIcon,
    "VS Code": vscodeIcon,
    "Figma": figmaIcon
};

const skillsData = data || content.skills;


  return (
    <section id="skills" className="py-18 pt-32 px-6 bg-white dark:bg-[#1F2937] font-['Inter']">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10">
            {content.skills.title}
            </h2>

            <div className="relative group">
                <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 opacity-80 hover:opacity-100 transition-all">
                    ←
                </button>

                <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar px-2 snap-x snap-mandatory">
                    {content.skills.items.map((skill, index) => (
                <div key={index} className="snap-start">
                    <SkillCard 
                        title={skill.title}
                        description={skill.description}
                        icon={skillIcons[skill.title]}/>
                </div>
                    ))}
                </div>

                <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 opacity-80 hover:opacity-100 transition-all">
                 →
                </button>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 mt-8"/>
        </div>
    </section>
);
};

export default Skills;