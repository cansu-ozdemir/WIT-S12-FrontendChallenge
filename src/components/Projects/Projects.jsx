import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { content } = useContext(LanguageContext);

    if (!content || !content.projects) {
        return null;
    }

    return (
    <section id="projects" className="py-12 px-6 bg-white dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
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