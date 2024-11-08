import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Footer = ({data}) => {
  const { content } = useContext(LanguageContext);

  if (!content || !content.footer) {
     return null;
  }

  const footerData = data || content.footer;

  return (
    <footer className="py-20 px-6 bg-[#F9F9F9] dark:bg-[#141414] font-['Inter']">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12 font-['Inter']">
    <span className="block">{content.footer.title.line1}</span>
    <span>{content.footer.title.line2}</span>
</h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <a href={`mailto:${content.footer.email}`} className="text-[#AF0C48] dark:text-[#BAB2E7] hover:underline mb-4 sm:mb-0 flex items-center font-['Inter']">
          <span className="mr-2">👉</span>
            {content.footer.email}
        </a>

      <div className="flex items-center gap-6">
        <a href="#blog" className="text-[#0A0A14] dark:text-[#E1E1FF] hover:text-[#7B61FF] dark:hover:text-[#8F88FF] font-['Inter']">
          {content.footer.links.blog}
        </a>
                    
       <a href="https://github.com/cansu-ozdemir" target="_blank" rel="noopener noreferrer" className="text-[#00AB6B] dark:text-[#17D18B] hover:underline font-['Inter']">
          {content.footer.links.github}
       </a>
                        
       <a href="https://www.linkedin.com/in/cansu-ozdemir1/" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] dark:text-[#0BA6F6] hover:underline font-['Inter']">
            {content.footer.links.linkedin}
       </a>
        </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;
  