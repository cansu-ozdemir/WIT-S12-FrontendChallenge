import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import ProjectCard from './ProjectCard';

const Projects = ({data}) => {
    const { content } = useContext(LanguageContext);

    if (!content || !content.projects) {
        return null;
    }

    const projectsData = data || content.projects;
    
    return (
    <section id="projects" className="py-12 px-6 pb- 24 bg-white dark:bg-[#1F2937] font-['Inter']">
      <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12 font-['Inter']">
              {content.projects.title}
          </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.items.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          githubText={project.githubText}
          siteLink={project.siteLink}
          siteText={project.siteText}/>
  ))}
    </div>
  </div>
</section>
 );
};

export default Projects;