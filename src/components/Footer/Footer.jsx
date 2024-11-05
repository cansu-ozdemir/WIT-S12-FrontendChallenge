import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Footer = ({data}) => {
  const { content } = useContext(LanguageContext);

  if (!content || !content.footer) {
     return null;
  }

  const footerData = data || content.footer;

  return (
    <footer className="py-12 px-6 bg-[#F9F9F9] dark:bg-[#141414]">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
    <span className="block">{content.footer.title.line1}</span>
    <span>{content.footer.title.line2}</span>
</h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <a href={`mailto:${content.footer.email}`} className="text-[#7B61FF] dark:text-[#8F88FF] hover:underline mb-4 sm:mb-0 flex items-center">
          <span className="mr-2 text-yellow-400">✉</span>
            {content.footer.email}
        </a>

      <div className="flex items-center gap-4">
        <a href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-[#7B61FF] dark:hover:text-[#8F88FF]">
          {content.footer.links.blog}
        </a>
                    
       <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#7B61FF] dark:text-[#8F88FF] hover:underline">
          {content.footer.links.github}
       </a>
                        
       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#7B61FF] dark:text-[#8F88FF] hover:underline">
            {content.footer.links.linkedin}
       </a>
        </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;
  